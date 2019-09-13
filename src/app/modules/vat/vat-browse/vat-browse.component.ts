import {Component, OnInit} from '@angular/core';
import {Vat} from '../../../shared/models/vat.model';
import {VatDataService} from '../shared/services/vat-data.service';

@Component({
  selector: 'app-vat-browse',
  templateUrl: './vat-browse.component.html',
  styleUrls: ['./vat-browse.component.scss']
})
export class VatBrowseComponent implements OnInit {
  data: Vat = null;

  constructor(
    private vatData: VatDataService
  ) {
  }

  ngOnInit() {
    this.vatData.getObservable().subscribe(data => {
      this.data = data !== null && data.isValid() ? data : null;
    })
  }

}
