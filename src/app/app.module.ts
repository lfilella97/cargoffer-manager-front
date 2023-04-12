import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NotFoundAppComponent } from "./components/pages/not-found-app/not-found-app.component";
import { HomeAppComponent } from "./components/pages/home-app/home-app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    NotFoundAppComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
