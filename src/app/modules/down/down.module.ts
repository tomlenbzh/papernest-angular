import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownRoutingModule } from './down-routing.module';
import { components } from './components';
import { pages } from './pages';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [...components, ...pages],
  imports: [CommonModule, DownRoutingModule, TranslateModule.forChild(), MaterialModule]
})
export class DownModule {}
