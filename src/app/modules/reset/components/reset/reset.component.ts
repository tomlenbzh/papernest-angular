import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ResetFormControlNames } from 'src/app/utils/constants/form-input-names';
import { BirthdayValidator } from 'src/app/utils/validators/birthday.validator';

@Component({
  selector: 'papernest-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  @Output() resetCounter: EventEmitter<any> = new EventEmitter<any>();

  controlNames = ResetFormControlNames;
  form!: FormGroup;

  get birthday(): AbstractControl | null {
    return this.form && this.form.get(this.controlNames.BIRTHDAY);
  }

  get errorMessage(): string {
    let value: string = '';

    if (this.birthday?.errors!['required']) {
      value = 'RESET.FORM.ERRORS.REQUIRED'; // TODO RETURN TRANSLATION KEY
    }

    if (this.birthday?.errors!['minimumAge']) {
      value = `RESET.FORM.ERRORS.UNDERAGED`; // TODO RETURN TRANSLATION KEY
    }

    return value;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  submitForm(): void {
    if (!this.form.valid) return;
    this.resetCounter.emit();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      [this.controlNames.BIRTHDAY]: new FormControl('', [Validators.required, BirthdayValidator(18)])
    });
  }
}
