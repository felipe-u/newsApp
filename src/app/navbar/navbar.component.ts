import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
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
}
