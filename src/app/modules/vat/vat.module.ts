import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VatBrowseComponent} from './vat-browse/vat-browse.component';
import {VatRoutingModule} from './vat-routing.module';
import {VatInputComponent} from './vat-input/vat-input.component';
import {VatComponent} from './vat.component';
import {VatDataService} from './shared/services/vat-data.service';
import {NgxSpinnerModule} from 'ngx-spinner';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    VatBrowseComponent,
    VatInputComponent,
    VatComponent
  ],
  imports: [
    CommonModule,
    VatRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
  ],
  providers: [
    VatDataService
  ]
})
export class VatModule {
}
