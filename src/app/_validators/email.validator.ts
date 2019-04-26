import { AbstractControl } from '@angular/forms';

const EMAIL_REGEX = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'gi');

export function Email(control: AbstractControl) {
    if (!control.value.match(EMAIL_REGEX)) {
        return { validEmail: true };
    }
    return null;
}
