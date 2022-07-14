import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DownComponent } from './down.component';

describe('DownComponent', () => {
  let component: DownComponent;
  let fixture: ComponentFixture<DownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownComponent],
      imports: [SharedModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
});
