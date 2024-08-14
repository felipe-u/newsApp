import { Component, inject, input, OnInit, signal } from '@angular/core';
import { News } from './news.model';
import { SingleNewsComponent } from './single-news/single-news.component';
import { NewsService } from './news.service';
import { ResolveFn } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [SingleNewsComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  private newsService = inject(NewsService);
  topNews = signal<News[]>(undefined);
  onCategory = input.required<boolean>();
  category = input.required<string>();
  categoryNews = signal<News[]>(undefined);
  isThereAnError = false;

  ngOnInit(): void {
    if (!this.onCategory()) {
      this.newsService.fetchTopNews()
        .subscribe({
          next: (data) => {
            this.topNews.set(data);
            this.isThereAnError = false;
          },
          error: () => {
            this.isThereAnError = true;
          }
        })
    } else {
      this.newsService.fetchNewsForCategory(this.category())
        .subscribe({
          next: (data) => {
            this.categoryNews.set(data);
            this.isThereAnError = false;
          },
          error: () => {
            this.isThereAnError = true;
          }
        });
    }
  }
}

export const resolveCategory: ResolveFn<string> = (
  activatedRoute, routerState
) => {
  return activatedRoute.queryParamMap.get('category');
}
