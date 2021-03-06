import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterHelper } from '@store/counter/counter.helper';
import { UpComponent } from '../../components/up/up.component';
import { UpPageComponent } from './up-page.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@modules/material.module';

describe('UpPageComponent', () => {
  let component: UpPageComponent;
  let fixture: ComponentFixture<UpPageComponent>;
  let store: MockStore;

  const initialState = { counter: null };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpPageComponent, UpComponent],
      imports: [TranslateModule.forRoot(), MaterialModule],
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
