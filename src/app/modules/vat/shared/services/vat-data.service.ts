import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Vat} from '../../../../shared/models/vat.model';
import {ApiService} from '../../../../shared/services/api.service';

@Injectable()
export class VatDataService {
  private _dataSource = new BehaviorSubject<Vat>(null);
  private _data = this._dataSource.asObservable();

  constructor(
    private api: ApiService
  ) {
  }

  updateData(data: Vat) {
    if (data != null) {
      this._dataSource.next(data);
    }
  }

  clearData() {
    this._dataSource.next(null);
  }

  requestData(vatNumber: string) {
    this.api.getVatDate(vatNumber).subscribe(data => {
        console.log(data);
        this.updateData(data);
      },
      error => this._dataSource.error(error));
  }

  getObservable(): Observable<Vat> {
    return this._data;
  }
}
