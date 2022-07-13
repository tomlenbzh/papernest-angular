import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownRoutingModule } from './down-routing.module';
import { components } from './components';
import { pages } from './pages';

@NgModule({
  declarations: [...components, ...pages],
  imports: [CommonModule, DownRoutingModule]
})
export class DownModule {}
