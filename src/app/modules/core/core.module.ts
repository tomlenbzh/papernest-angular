import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { components } from './components';
import { pages } from './pages';
import { AppComponent } from '../../app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../../store';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterHelper } from '../../store/counter/counter.helper';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { CounterEffects } from 'src/app/store/counter/counter.effects';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

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
    SharedModule,
    MaterialModule
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
