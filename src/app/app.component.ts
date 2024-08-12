import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { NewsComponent } from "./news/news.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, FooterComponent, NewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
