import { AbstractControl } from '@angular/forms';

export function NoWhiteSpace(control: AbstractControl) {
    return (control.value || '').trim().length !== 0 ? null : { nowhitespace: true };
}
