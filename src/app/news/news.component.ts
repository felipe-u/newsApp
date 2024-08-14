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
  categoryNews = this.newsService.news;
  isThereAnError = this.newsService.isThereAnError;
  onFetching = this.newsService.onFetching;

  ngOnInit(): void {
    this.onFetching.set(true);
    console.log('fetching');
    if (!this.onCategory()) {
      this.newsService.fetchTopNews()
        .subscribe({
          next: (data) => {
            this.topNews.set(data);
            this.isThereAnError.set(false);
            this.onFetching.set(false);
          },
          error: () => {
            this.isThereAnError.set(true);
            this.onFetching.set(false);
          }
        })
    }
  }
}

export const resolveCategory: ResolveFn<string> = (
  activatedRoute, routerState
) => {
  const newsService = inject(NewsService);
  const category = activatedRoute.queryParamMap.get('category');
  newsService.fetchNewsForCategory(category)
    .subscribe({
      next: () => {
        newsService.isThereAnError.set(false);
        newsService.onFetching.set(false);

      },
      error: () => {
        newsService.isThereAnError.set(true);
        newsService.onFetching.set(false);
      }
    });

  return category;
}
