import { inject, Injectable, OnInit, signal } from '@angular/core';
import { News } from './news.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

const apiEndpoint = 'https://api.thenewsapi.com/v1/news/';
const apiToken = 'h1Un3ZbRws1mh8yVg8ebFdwoJdiQytMylHE01vnP';

@Injectable({ providedIn: 'root' })
export class NewsService {
    private httpClient = inject(HttpClient);
    private topNews = signal([]);
    loadedTopNews = this.topNews.asReadonly();

    fetchTopNews() {
        return this.httpClient.get<{ data: any }>
            (apiEndpoint + 'top?api_token=' + apiToken + '&locale=us&limit=3')
            .pipe(
                map((news) => news.data),
                tap((news) => this.topNews.set(news))
            )
    }
}