import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundAppComponent } from './components/pages/not-found-app/not-found-app.component';
import { HomeAppComponent } from './components/pages/home-app/home-app.component';

@NgModule({
  declarations: [AppComponent, HomeAppComponent, NotFoundAppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
