import { Component, Input } from '@angular/core';
import { News } from '../news.model';

@Component({
  selector: 'app-single-news',
  standalone: true,
  imports: [],
  templateUrl: './single-news.component.html',
  styleUrl: './single-news.component.css'
})
export class SingleNewsComponent {
  @Input() singleNews: News;
}
