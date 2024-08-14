import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private router = inject(Router);
  showSearchBar = false;
  searchTerm: string = '';

  
  search() {
    if (!this.showSearchBar) {
      this.showSearchBar = true;
    } else {
      this.router.navigate(['news/searcher'], {queryParams: {search: this.searchTerm}});
    }
  }

  onHideSearchBar() {
    this.showSearchBar = false;
  }

  onCategoryChange(event: Event) {
    const category = (event.target as HTMLSelectElement).value;
    this.router.navigate(['news/filter'], {queryParams: {category: category}});
  }
}
