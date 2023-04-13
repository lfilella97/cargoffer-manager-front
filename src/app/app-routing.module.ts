import { NgModule } from "@angular/core";
import { RouterModule, type Routes } from "@angular/router";
import { NotFoundAppComponent } from "./components/pages/not-found-app/not-found-app.component";
import { HomeAppComponent } from "./components/pages/home-app/home-app.component";
import { CreateAppComponent } from "./components/pages/create-app/create-app.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeAppComponent },
  { path: "new-task", component: CreateAppComponent },
  { path: "**", component: NotFoundAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
