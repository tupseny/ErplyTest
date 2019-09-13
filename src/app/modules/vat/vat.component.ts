import { Component, OnInit } from '@angular/core';
import {VatDataService} from './shared/services/vat-data.service';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html'
})
export class VatComponent implements OnInit {
  isDataGot = false;

  constructor(
    private vatData: VatDataService
  ) {}

  ngOnInit() {
    this.vatData.getObservable().subscribe(data => {
      this.isDataGot = data !== null && data.isValid();
    })
  }

}
