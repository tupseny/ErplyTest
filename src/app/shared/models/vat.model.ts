import {Utils} from '../utils/utils.utils';

export class Vat {
  private _name: string;
  private _address: string;
  private _countryCode: string;
  private _vatNumber: string;

  public static VAT_COUNTRIES = [
    {
      code: 'AT',
      maxDigits: 9
    },
    {
      code: 'BE',
      maxDigits: 10
    },
    {
      code: 'IT',
      maxDigits: 11
    },
    {
      code: 'LT',
      maxDigits: 12
    },
    {
      code: 'LV',
      maxDigits: 11
    },
    {
      code: 'FI',
      maxDigits: 8
    },
    {
      code: 'NZ',
      maxDigits: 13
    },
  ];

  valid: boolean;
  requestDate: Date;

  constructor(countryCode?: string,
              vatNumber?: string,
              requestDate?: string,
              valid?: boolean,
              name?: string,
              address?: string) {
    this.countryCode = countryCode;
    this.vatNumber = vatNumber;
    this.requestDate = Utils.parseDate(requestDate);
    this.valid = valid;
    this.address = address;
    this.name = name;
  }

  public isValid(): boolean {
    console.log(this.countryCode + ' ' + this.vatNumber);
    return this.vatNumber !== null && this.countryCode !== null;
  }

  get countryCode(): string {
    return this._countryCode;
  }

  set countryCode(value: string) {
    this._countryCode = value !== undefined ? value : null;
  }

  get vatNumber(): string {
    return this._vatNumber;
  }

  set vatNumber(value: string) {
    this._vatNumber = value !== undefined ? value : null;
  }

  set name(value: string) {
    if (typeof value === 'string') {
      this._name = value.match(/\w/) !== null ? value : null;
    }
  }

  set address(value: string) {
    if (typeof value === 'string') {
      this._address = value.match(/\w/) !== null ? value : null;
    }
  }

  get name(): string {
    return this._name;
  }

  get address(): string {
    return this._address;
  }
}
