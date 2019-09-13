import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface AlertData {
  name: string;
  status: boolean;
  msg: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  timeout = 10000;

  private _alertData: Array<AlertData> = [
    {
      name: 'success',
      status: false,
      msg: '',
    },
    {
      name: 'warning',
      status: false,
      msg: '',
    },
    {
      name: 'danger',
      status: false,
      msg: '',
    },
  ];

  private _alertsSource = new BehaviorSubject<Array<AlertData>>(this._alertData);

  constructor() {}

  public showWarn(msg: string) {
    this.showTempAlert(1, msg);
  }

  public showSucc(msg: string) {
    this.showTempAlert(0, msg);
  }

  public showErr(msg: string) {
    this.showTempAlert(2, msg);
  }

  private updateAlerts(){
    this._alertsSource.next(this._alertData);
  }

  public getObservable(){
    return this._alertsSource.asObservable();
  }

  private showTempAlert(id: number, msg: string) {
    this._alertData[id].msg = msg;
    this._alertData[id].status = true;
    this.updateAlerts();

    setTimeout(() => {
      this._alertData[id].msg = '';
      this._alertData[id].status = false;
      this.updateAlerts();
    }, this.timeout);
  }
}
