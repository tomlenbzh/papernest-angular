import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@modules/material.module';
import { ResetComponent } from '../../components/reset/reset.component';
import { ResetPageComponent } from './reset-page.component';

describe('ResetPageComponent', () => {
  let component: ResetPageComponent;
  let fixture: ComponentFixture<ResetPageComponent>;
  let store: MockStore;

  const initialState = { counter: null };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetPageComponent, ResetComponent],
      imports: [TranslateModule.forRoot(), MaterialModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
});
