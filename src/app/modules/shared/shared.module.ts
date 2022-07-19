import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { components } from './components';
import { directives } from './directives';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [...components, ...directives],
  imports: [CommonModule, MaterialModule, TranslateModule.forChild()],
  exports: [...components, ...directives]
})
export class SharedModule {}
