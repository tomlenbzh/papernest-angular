import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ACCEPTED_LANGUAGES, LANG } from '@utils/constants/languages';

@Component({
  selector: 'papernest-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  acceptedLangs = ACCEPTED_LANGUAGES;

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

  constructor(private router: Router, private translate: TranslateService) {
    this.router.events.subscribe((e) => e instanceof NavigationEnd && (this.currentUrl = e.urlAfterRedirects));
  }

  /**
   * Changes the application's language.
   *
   * @param     { lang }      lang
   */
  changeLanguage(lang: LANG): void {
    this.translate.use(lang);
  }
}
