import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { components } from './components';
import { directives } from './directives';

@NgModule({
  declarations: [...components, ...directives],
  imports: [CommonModule, MaterialModule],
  exports: [...components, ...directives]
})
export class SharedModule {}
