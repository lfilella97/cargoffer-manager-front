import { Component } from "@angular/core";
import { TasksService } from "src/app/services/tasks/tasks.service";

@Component({
  selector: "app-home-app",
  templateUrl: "./home-app.component.html",
  styleUrls: ["./home-app.component.scss"],
  providers: [TasksService],
})
export class HomeAppComponent {}
