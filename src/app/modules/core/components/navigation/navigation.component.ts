import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'papernest-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  private currentUrl!: string;

  get isOnUp() {
    return this.currentUrl === '/up';
  }

  get isOnDown() {
    return this.currentUrl === '/down';
  }

  get isOnReset() {
    return this.currentUrl === '/reset';
  }

  constructor(private router: Router) {
    this.router.events.subscribe((e) => e instanceof NavigationEnd && (this.currentUrl = e.urlAfterRedirects));
  }
}
