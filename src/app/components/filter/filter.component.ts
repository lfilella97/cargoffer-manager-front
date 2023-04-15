import { Component, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent {
  @Output() filterBy = new EventEmitter<string>();

  filter: FormGroup = new FormGroup({
    option: new FormControl(),
  });

  onChange(event: any) {
    this.filterBy.emit(`${event.target.value as string}`!);
  }
}
