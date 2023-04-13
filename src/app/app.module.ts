import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NotFoundAppComponent } from "./components/pages/not-found-app/not-found-app.component";
import { HomeAppComponent } from "./components/pages/home-app/home-app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HttpClientModule } from "@angular/common/http";
import { TaskComponent } from "./components/task/task.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { CreateAppComponent } from "./components/pages/create-app/create-app.component";
import { CreateTaskComponent } from "./components/create-task/create-task.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    NotFoundAppComponent,
    NavBarComponent,
    TaskComponent,
    TasksComponent,
    CreateTaskComponent,
    CreateAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
