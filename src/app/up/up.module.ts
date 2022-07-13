import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpRoutingModule } from './up-routing.module';
import { components } from './components';
import { pages } from './pages';

@NgModule({
  declarations: [...pages, ...components],
  imports: [CommonModule, UpRoutingModule]
})
export class UpModule {}
