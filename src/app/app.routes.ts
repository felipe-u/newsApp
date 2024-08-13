import { Routes } from "@angular/router";
import { NewsComponent } from "./news/news.component";
import { SingleNewsFullComponent } from "./news/single-news/single-news-full/single-news-full.component";
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
    },
    {
        path: 'news/:newsId',
        component: SingleNewsFullComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]