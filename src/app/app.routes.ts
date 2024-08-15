import { Routes } from "@angular/router";
import { NewsComponent, resolveCategory, resolveSearch } from "./news/news.component";
import { resolveTitle, SingleNewsFullComponent } from "./news/single-news/single-news-full/single-news-full.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/news',
        pathMatch: 'full',
        title: 'Learning Purpose News'
    },
    {
        path: 'news',
        component: NewsComponent,
        title: 'Learning Purpose News',
        data: {
            onTopNews: true
        }
    },
    {
        path: 'news/filter',
        component: NewsComponent,
        data: {
            onTopNews: false
        },
        runGuardsAndResolvers: 'always',
        resolve: {
            category: resolveCategory
        }
    },
    {
        path: 'news/searcher',
        component: NewsComponent,
        data: {
            onTopNews: false
        },
        runGuardsAndResolvers: 'always',
        resolve: {
            search: resolveSearch
        }
    },
    {
        path: 'news/:newsId',
        component: SingleNewsFullComponent,
        title: resolveTitle
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]