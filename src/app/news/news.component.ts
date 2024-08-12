import { Component, inject, OnInit, signal } from '@angular/core';
import { News } from './news.model';
import { SingleNewsComponent } from './single-news/single-news.component';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [SingleNewsComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit{
  private newsService = inject(NewsService);
  news = this.newsService.loadedTopNews;

  topNews = signal<News[]>(undefined);

  ngOnInit(): void {
    this.newsService.fetchTopNews()
    .subscribe({
      next: (data) => {
        this.topNews.set(data);
      }
    })
  }
}
