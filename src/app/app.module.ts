import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [],
  imports: [CoreModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
