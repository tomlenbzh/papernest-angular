import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpRoutingModule } from './up-routing.module';
import { components } from './components';
import { pages } from './pages';
import { SharedModule } from '../shared/shared.module';
import { CounterHelper } from 'src/app/store/counter/counter.helper';

@NgModule({
  declarations: [...pages, ...components],
  imports: [CommonModule, UpRoutingModule, SharedModule],
  providers: [CounterHelper]
})
export class UpModule {}
