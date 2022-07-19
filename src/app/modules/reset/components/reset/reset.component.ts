import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ResetFormControlNames } from '@utils/constants/form-input-names';
import { BirthdayValidator } from '@utils/validators/birthday.validator';

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
      value = 'RESET.FORM.ERRORS.REQUIRED';
    }

    if (this.birthday?.errors!['minimumAge']) {
      value = `RESET.FORM.ERRORS.UNDERAGED`;
    }

    return value;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * Emits to the parent component that the counter should be reset.
   *
   * @returns     { void }
   */
  submitForm(): void {
    if (!this.form.valid) return;
    this.resetCounter.emit();
  }

  /**
   * Creates a new FormGroup instance containing the user's birth date.
   */
  private createForm(): void {
    this.form = this.formBuilder.group({
      [this.controlNames.BIRTHDAY]: new FormControl('', [Validators.required, BirthdayValidator(18)])
    });
  }
}
