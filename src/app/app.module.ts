import { NgModule } from "@angular/core";
import { Store, StoreModule } from "@ngrx/store";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NotFoundAppComponent } from "./components/pages/not-found-app/not-found-app.component";
import { HomeAppComponent } from "./components/pages/home-app/home-app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HttpClientModule } from "@angular/common/http";
import { TaskComponent } from "./components/task/task.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { CreateAppComponent } from "./components/pages/create-app/create-app.component";
import { CreateTaskComponent } from "./components/create-task/create-task.component";
import { TasksService } from "./services/tasks/tasks.service";
import { TasksModule } from "./store/tasks.module";
import { reducer } from "./store/reducers/tasks.reducer";
import { UpdateTaskComponent } from "./components/update-task/update-task.component";
import { EditTaskAppComponent } from "./components/pages/edit-task-app/edit-task-app.component";

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
    UpdateTaskComponent,
    EditTaskAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ task: reducer }, {}),
    TasksModule,
  ],
  providers: [Store, TasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
