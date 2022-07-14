import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownRoutingModule } from './down-routing.module';
import { components } from './components';
import { pages } from './pages';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [...components, ...pages],
  imports: [CommonModule, DownRoutingModule, SharedModule]
})
export class DownModule {}
