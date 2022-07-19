import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ACCEPTED_LANGUAGES, LANG } from './utils/constants/languages';

@Component({
  selector: 'papernest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'papernest-angular';

  constructor(private translate: TranslateService) {
    this.setAppLanguage();
  }

  /**
   * Sets the app language. Selects the language ton browser language if supported otherwise sets the language to default.
   */
  private setAppLanguage(): void {
    const browserLang = navigator.language;
    if ((ACCEPTED_LANGUAGES as string[]).includes(browserLang)) {
      this.translate.setDefaultLang(browserLang);
      this.translate.use(browserLang);
    } else {
      this.translate.setDefaultLang(LANG.FR);
      this.translate.use(LANG.FR);
    }
  }
}
