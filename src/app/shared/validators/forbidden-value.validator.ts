import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenValue(word: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (typeof value === 'string' && value.toLowerCase() === word.toLowerCase()) {
      return { forbiddenValue: true };
    }

    return null;
  };
}