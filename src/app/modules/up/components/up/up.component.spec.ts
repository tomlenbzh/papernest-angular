import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { UpComponent } from './up.component';

describe('UpComponent', () => {
  let component: UpComponent;
  let fixture: ComponentFixture<UpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpComponent],
      imports: [SharedModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
});
