import { Component, inject, input, OnInit, signal } from '@angular/core';
import { News } from './news.model';
import { SingleNewsComponent } from './single-news/single-news.component';
import { NewsService } from './news.service';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';

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
  onTopNews = input.required<boolean>();
  category = input.required<string>();
  otherNews = this.newsService.news;
  isThereAnError = this.newsService.isThereAnError;
  onFetching = this.newsService.onFetching;

  ngOnInit(): void {
    this.onFetching.set(true);
    console.log('fetching');
    if (this.onTopNews()) {
      this.fetchTopNews();
    }
  }

  private fetchTopNews() {
    this.newsService.fetchTopNews()
      .subscribe({
        next: (data) => this.handleSuccess(data),
        error: () => this.handleError()
      });
  }

  private handleSuccess(data: News[]) {
    this.topNews.set(data);
    this.isThereAnError.set(false);
    this.onFetching.set(false);
  }

  private handleError() {
    this.isThereAnError.set(true);
    this.onFetching.set(false);
  }

}

function hanldeNewsFetching(
  fetchNewsFn: () => Observable<News[]>,
  newsService: NewsService
) {
  fetchNewsFn().subscribe({
    next: () => {
      newsService.isThereAnError.set(false);
      newsService.onFetching.set(false);
    },
    error: () => {
      newsService.isThereAnError.set(true);
      newsService.onFetching.set(false);
    }
  });
}

export const resolveCategory: ResolveFn<string> = (
  activatedRoute, routerState
) => {
  const newsService = inject(NewsService);
  const category = activatedRoute.queryParamMap.get('category');
  hanldeNewsFetching(
    () => newsService.fetchNewsForCategory(category), newsService
  );

  return category;
}

export const resolveSearch: ResolveFn<string> = (
  activatedRoute, routerState
) => {
  const newsService = inject(NewsService);
  const searchTerm = activatedRoute.queryParamMap.get('search');
  hanldeNewsFetching(
    () => newsService.fetchNewsForCategory(searchTerm), newsService
  );

  return searchTerm;
}
