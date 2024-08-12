import { Injectable, signal } from '@angular/core';
import { News } from './news.model';

@Injectable({ providedIn: 'root' })
export class NewsService {
    news: News[] =[
        {
            id: '1',
            title: 'Just a test news',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nibh a dictum condimentum. Nullam tristique bibendum gravida. Cras a nisi ullamcorper, accumsan diam et, consectetur elit. Nulla id ipsum quis lorem feugiat maximus. Praesent faucibus lacus sapien, quis dignissim ipsum vestibulum vel. Mauris at porta purus, in tincidunt massa. In ac aliquet quam. Aliquam et tortor nisi. Nullam convallis mi vulputate orci rutrum, ac tempor sem auctor. Vivamus ultrices tincidunt mauris eget malesuada. Ut luctus lectus at odio malesuada ornare. Integer a felis ut ante imperdiet euismod a vitae odio. Fusce gravida aliquam nisi non tempor. `,
            image_url: 'https://cdn.uanews.arizona.edu/s3fs-public/styles/az_large/public/Olympics_pic_2021_banner_png.png',
            published_at: '2024-08-12T13:23:13.000000Z'
        },
        {
            id: '2',
            title: 'Just a test news 2',
            description: `This is simply a test, a fake news you could say. Although, later I'll add some real news. `,
            image_url: 'https://aws-modapedia.vogue.es/prod/designs/v1/assets/1200x628/1466.jpg',
            published_at: '2024-08-12T13:29:41.000000Z'
        }
    ]
}