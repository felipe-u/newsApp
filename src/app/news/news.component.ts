import { Component } from '@angular/core';
import { News } from './news.model';
import { SingleNewsComponent } from './single-news/single-news.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [SingleNewsComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  news: News[] = [
    {
      title: 'Just a test news',
      description: `This is simply a test, a fake news you could say. Although, later I'll add some real news. `,
      image_url: 'https://cdn.uanews.arizona.edu/s3fs-public/styles/az_large/public/Olympics_pic_2021_banner_png.png',
    },
    {
      title: 'Just a test news 2',
      description: `This is simply a test, a fake news you could say. Although, later I'll add some real news. `,
      image_url: 'https://aws-modapedia.vogue.es/prod/designs/v1/assets/1200x628/1466.jpg',
    }
  ]
}
