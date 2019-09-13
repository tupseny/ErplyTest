import {FormControl} from '@angular/forms';
import {Vat} from '../models/vat.model';
import {max} from 'rxjs/operators';

interface ValidateErrorData {
  [error: string]: any
}

export class Validators2 {
  public static validateVatNumber(c: FormControl) {
    const COUNTRY_CODE_REGEXP = /^[a-z]{2}/i;

    const DEFAULT_NUMBER_MAX_LENGTH = 13;
    const DEFAULT_NUMBER_MIN_LENGTH = 6;

    const val: string = c.value;

    //country code
    if (COUNTRY_CODE_REGEXP.test(val) == false) {
      return {vatErrors: {countryCode: true}};
    }

    //number
    const countryCode = val.substring(0, 2);
    const num: string = val.substring(2);

    const vatCountry = Vat.VAT_COUNTRIES.find((value) => {
      if (value.code == countryCode) {
        return true;
      }
    });

    const maxLength = vatCountry !== undefined ? vatCountry.maxDigits : DEFAULT_NUMBER_MAX_LENGTH;

    if (num.length > maxLength || num.length < DEFAULT_NUMBER_MIN_LENGTH) {
      return {vatErrors: {numberLength: {min: DEFAULT_NUMBER_MIN_LENGTH, max: maxLength}}};
    }

    return null;
  }
}
