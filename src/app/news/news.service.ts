import { Injectable, signal } from '@angular/core';
import { News } from './news.model';

@Injectable({ providedIn: 'root' })
export class NewsService {
    news: News[] =[
        {
            id: '1',
            title: 'Just a test news',
            description: `This is simply a test, a fake news you could say. Although, later I'll add some real news. `,
            image_url: 'https://cdn.uanews.arizona.edu/s3fs-public/styles/az_large/public/Olympics_pic_2021_banner_png.png',
        },
        {
            id: '2',
            title: 'Just a test news 2',
            description: `This is simply a test, a fake news you could say. Although, later I'll add some real news. `,
            image_url: 'https://aws-modapedia.vogue.es/prod/designs/v1/assets/1200x628/1466.jpg',
        }
    ]
}