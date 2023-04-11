import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundAppComponent } from './not-found-app.component';

describe('NotFoundAppComponent', () => {
  let component: NotFoundAppComponent;
  let fixture: ComponentFixture<NotFoundAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundAppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
