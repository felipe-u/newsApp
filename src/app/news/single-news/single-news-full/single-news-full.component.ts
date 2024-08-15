import { Component, computed, inject, input } from '@angular/core';
import { NewsService } from '../../news.service';
import { DatePipe } from '@angular/common';
import { ResolveFn } from '@angular/router';

@Component({
  selector: 'app-single-news-full',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './single-news-full.component.html',
  styleUrl: './single-news-full.component.css'
})
export class SingleNewsFullComponent {
  newsId = input.required<string>();
  private newsService = inject(NewsService);
  news = computed(
    () => this.newsService.loadedNews().find(
      singleN => singleN.uuid === this.newsId()
    )
  );

  get newsPubDate() {
    return new Date(Date.parse(this.news().published_at));
  }

  onSearch() {
    console.log(this.newsService.loadedNews().find(
      singleN => singleN.uuid === this.newsId()
    ).description);
  }
}

export const resolveTitle: ResolveFn<any> = (
  activatedRoute, routerState
) => {
  const newsService = inject(NewsService);
  const news = computed(
    () => newsService.loadedNews().find(
      singleN => singleN.uuid === activatedRoute.paramMap.get('newsId')
    )
  )
  return news().title;
}