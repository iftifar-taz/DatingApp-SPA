import { FormGroup } from '@angular/forms';

export function Match(caseSensitive?: boolean) {
    return (formGroup: FormGroup) => {
        if (formGroup) {
            const obj = formGroup.controls;
            const control1 = obj[Object.keys(obj)[0]];
            const control2 = obj[Object.keys(obj)[1]];
            if (caseSensitive && control1.value !== control2.value) {
                return { match: true };
            } else if (!caseSensitive && control1.value.toLowerCase() !== control2.value.toLowerCase()) {
                return { match: true };
            }
            return null;
        }
    };
}

