import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CoreModule.forRoot(), AppRoutingModule, BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
