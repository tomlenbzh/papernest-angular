import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DownComponent } from '../../components/down/down.component';
import { DownPageComponent } from './down-page.component';

describe('DownPageComponent', () => {
  let component: DownPageComponent;
  let fixture: ComponentFixture<DownPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownPageComponent, DownComponent],
      imports: [SharedModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
});
