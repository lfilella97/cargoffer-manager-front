import { type ComponentFixture, TestBed } from "@angular/core/testing";

import { EditTaskAppComponent } from "./edit-task-app.component";

describe("EditTaskAppComponent", () => {
  let component: EditTaskAppComponent;
  let fixture: ComponentFixture<EditTaskAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTaskAppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditTaskAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
