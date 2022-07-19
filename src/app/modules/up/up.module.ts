import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpRoutingModule } from './up-routing.module';
import { components } from './components';
import { pages } from './pages';
import { CounterHelper } from 'src/app/store/counter/counter.helper';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [...pages, ...components],
  imports: [CommonModule, UpRoutingModule, MaterialModule, TranslateModule.forChild()],
  providers: [CounterHelper]
})
export class UpModule {}
