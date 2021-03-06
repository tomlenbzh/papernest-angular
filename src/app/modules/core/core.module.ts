import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { components } from './components';
import { pages } from './pages';

import { AppComponent } from '../../app.component';
import { MaterialModule } from '../material.module';
import { reducers, metaReducers } from '@store/index';
import { environment } from '@env/environment';
import { CounterHelper } from '@store/counter/counter.helper';
import { CounterEffects } from '@store/counter/counter.effects';

@NgModule({
  declarations: [AppComponent, ...components, ...pages],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'app' }),
    RouterModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }) : [],
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    EffectsModule.forRoot([CounterEffects]),
    MaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    })
  ],
  providers: [CounterHelper]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) throw new Error('CoreModule is already loaded. Import it in the AppModule only');
  }

  static forRoot(): ModuleWithProviders<any> {
    return { ngModule: CoreModule, providers: [] };
  }
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
