import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as moment from 'moment';

export function BirthdayValidator(requiredAge: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control || !control.value) return null;

    let result: ValidationErrors = {};
    const value = control?.value;
    const rawDate: Date = new Date(value);

    const year = rawDate.getFullYear();
    const month = rawDate.getMonth();
    const day = rawDate.getDay();
    const date = moment({ year, month: month + 1, day });

    if (date.isValid()) {
      const now = moment().startOf('day');
      const actualAge = date.diff(now, 'years');

      if (actualAge > -requiredAge) {
        result = {
          minimumAge: { requiredAge, actualAge }
        };
      }
    }

    return result;
  };
}
