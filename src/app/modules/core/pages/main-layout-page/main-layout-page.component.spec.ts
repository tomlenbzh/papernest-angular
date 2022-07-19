import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@modules/material.module';
import { CounterHelper } from '@store/counter/counter.helper';
import { CounterComponent } from '../../components/counter/counter.component';
import { MainLayoutComponent } from '../../components/main-layout/main-layout.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { MainLayoutPageComponent } from './main-layout-page.component';

describe('MainLayoutPageComponent', () => {
  let component: MainLayoutPageComponent;
  let fixture: ComponentFixture<MainLayoutPageComponent>;
  let store: MockStore;

  const initialState = { counter: null };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainLayoutPageComponent, MainLayoutComponent, CounterComponent, NavigationComponent],
      imports: [RouterTestingModule, TranslateModule.forRoot(), MaterialModule],
      providers: [provideMockStore({ initialState }), CounterHelper]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
});
