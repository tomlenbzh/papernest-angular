import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterHelper } from 'src/app/store/counter/counter.helper';
import { UpComponent } from '../../components/up/up.component';
import { UpPageComponent } from './up-page.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('UpPageComponent', () => {
  let component: UpPageComponent;
  let fixture: ComponentFixture<UpPageComponent>;
  let store: MockStore;

  const initialState = { counter: null };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpPageComponent, UpComponent],
      imports: [SharedModule],
      providers: [provideMockStore({ initialState }), CounterHelper]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
});
