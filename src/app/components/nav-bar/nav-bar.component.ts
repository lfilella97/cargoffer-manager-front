import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent {
  constructor(@Inject(Router) private readonly router: Router) {}

  isNewTaskPage(): boolean {
    return this.router.url === "/new-task";
  }

  isEditTaskPage(): boolean {
    return this.router.url.includes("/edit-task");
  }
}
