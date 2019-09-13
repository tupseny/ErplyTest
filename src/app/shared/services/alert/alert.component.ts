import {Component, OnInit} from '@angular/core';
import {AlertData, AlertService} from '../alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  private alerts: Array<AlertData>;

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.getObservable().subscribe(value => {
      this.alerts = value;
    });
  }
}
