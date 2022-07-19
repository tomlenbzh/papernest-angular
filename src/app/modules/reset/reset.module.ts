import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetRoutingModule } from './reset-routing.module';
import { pages } from './pages';
import { components } from './components';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [...components, ...pages],
  imports: [
    CommonModule,
    ResetRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }]
})
export class ResetModule {}
