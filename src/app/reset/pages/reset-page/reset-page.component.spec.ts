import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetComponent } from '../../components/reset/reset.component';
import { ResetPageComponent } from './reset-page.component';

describe('ResetPageComponent', () => {
  let component: ResetPageComponent;
  let fixture: ComponentFixture<ResetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetPageComponent, ResetComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
});
