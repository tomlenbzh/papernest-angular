import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/modules/material.module';
import { CounterHelper } from 'src/app/store/counter/counter.helper';
import { DownComponent } from '../../components/down/down.component';
import { DownPageComponent } from './down-page.component';

describe('DownPageComponent', () => {
  let component: DownPageComponent;
  let fixture: ComponentFixture<DownPageComponent>;
  let store: MockStore;

  const initialState = { counter: null };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownPageComponent, DownComponent],
      imports: [MaterialModule, TranslateModule.forRoot()],
      providers: [provideMockStore({ initialState }), CounterHelper]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
});
