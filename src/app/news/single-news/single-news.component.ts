import { Component, Input } from '@angular/core';
import { News } from '../news.model';
import { RouterLink } from '@angular/router';
import { ShortPipe } from '../../shared/short.pipe';

@Component({
  selector: 'app-single-news',
  standalone: true,
  imports: [RouterLink, ShortPipe],
  templateUrl: './single-news.component.html',
  styleUrl: './single-news.component.css'
})
export class SingleNewsComponent {
  @Input() singleNews: News;
}
