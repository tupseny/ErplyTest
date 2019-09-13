import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {VatModule} from './modules/vat/vat.module';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import {ApiService} from './shared/services/api.service';
import {HttpClientModule} from '@angular/common/http';
import {AlertComponent} from './shared/services/alert/alert.component';
import {AlertService} from './shared/services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    VatModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    AlertService,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
