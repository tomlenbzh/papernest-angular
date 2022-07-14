import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpRoutingModule } from './up-routing.module';
import { components } from './components';
import { pages } from './pages';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [...pages, ...components],
  imports: [CommonModule, UpRoutingModule, SharedModule]
})
export class UpModule {}
