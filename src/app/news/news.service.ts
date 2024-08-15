import { inject, Injectable, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

const apiEndpoint = 'https://api.thenewsapi.com/v1/news/';
const apiToken = '?api_token=h1Un3ZbRws1mh8yVg8ebFdwoJdiQytMylHE01vnP';
const language = 'en';

@Injectable({ providedIn: 'root' })
export class NewsService {
    private httpClient = inject(HttpClient);
    news = signal([]);
    loadedNews = this.news.asReadonly();
    // For fetching category News
    isThereAnError = signal<boolean>(undefined);
    onFetching = signal<boolean>(undefined);

    private fetchNews(endpoint: string, params: string) {
        return this.httpClient.get<{ data: any }>(`${apiEndpoint}${endpoint}${apiToken}${params}&limit=3&language=${language}`)
            .pipe(
                map((news) => news.data),
                tap((news) => this.news.set(news))
            )
    }

    fetchTopNews() {
        return this.fetchNews('top', '');
    }

    fetchNewsForCategory(category: string) {
        return this.fetchNews('all', `&categories=${category}`);
    }

    fetchNewsForSearchTerm(searchTerm: string) {
        return this.fetchNews('all', `&search=${searchTerm}`);
    }
}