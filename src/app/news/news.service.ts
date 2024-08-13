import { inject, Injectable, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

const apiEndpoint = 'https://api.thenewsapi.com/v1/news/';
const apiToken = '?api_token=h1Un3ZbRws1mh8yVg8ebFdwoJdiQytMylHE01vnP';

@Injectable({ providedIn: 'root' })
export class NewsService {
    private httpClient = inject(HttpClient);
    private news = signal([]);
    loadedNews = this.news.asReadonly();

    fetchTopNews() {
        return this.httpClient.get<{ data: any }>
            (apiEndpoint + 'top' + apiToken + '&locale=us&limit=3')
            .pipe(
                map((news) => news.data),
                tap((news)=> this.news.set(news))
            )
    }

    fetchNewsForCategory(category: string) {
        return this.httpClient.get<{ data: any }>(apiEndpoint + 'all' + apiToken + '&categories=' + category + '&limit=3')
            .pipe(
                map((news) => news.data),
                tap((news)=> this.news.set(news))
            )
    }
}