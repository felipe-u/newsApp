import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private router = inject(Router);
  showSearchBar = false;
  
  search() {
    if (!this.showSearchBar) {
      this.showSearchBar = true;
    } else {
      alert('Working on it.')
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
