import { Component, computed, inject, input, Input } from '@angular/core';
import { News } from '../../news.model';
import { NewsService } from '../../news.service';
import { DatePipe } from '@angular/common';

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
    ()=> this.newsService.news.find(
      singleN => singleN.id === this.newsId()
    )
  );

  get newsPubDate() {
    return new Date(Date.parse(this.news().published_at));
  }

  onSearch() {
    console.log(this.newsService.news.find(
      singleN => singleN.id === this.newsId()
    ).description);
  }
}
