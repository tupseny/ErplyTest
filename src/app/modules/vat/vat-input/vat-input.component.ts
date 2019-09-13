import {Component, Input, OnInit, Output, Renderer2} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {VatDataService} from '../shared/services/vat-data.service';
import {AlertService} from '../../../shared/services/alert.service';
import {tap} from 'rxjs/operators';
import {FormControl, FormGroup, NgModel, Validators} from '@angular/forms';
import {Validators2} from '../../../shared/utils/validators.validator';

@Component({
  selector: 'app-vat-input',
  templateUrl: './vat-input.component.html',
  styleUrls: ['./vat-input.component.scss']
})
export class VatInputComponent implements OnInit {

  isSubmitDisabled = false;
  spinnerTimeout = 15000;

  private vatForm: FormGroup;
  private vatNumberControl: FormControl;

  constructor(private vatData: VatDataService,
              private spinner: NgxSpinnerService,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.vatNumberControl = new FormControl('', [
      Validators.required,
      Validators2.validateVatNumber,
    ]);

    this.vatForm = new FormGroup({
      vat: this.vatNumberControl
    });
  }

  showValidationResult() {
    const el = document.getElementById('vatInput');

    if (this.vatNumberControl.valid) {
      setValidationStatusOfElement(el, true, this.renderer);
    } else {
      setValidationStatusOfElement(el, false, this.renderer);
    }

    function setValidationStatusOfElement(el: HTMLElement, valid: boolean, renderer: Renderer2) {
      if (valid) {
        renderer.removeClass(el, 'is-invalid');
        renderer.addClass(el, 'is-valid');
      } else {
        renderer.removeClass(el, 'is-valid');
        renderer.addClass(el, 'is-invalid');
      }
    }
  }

  onSubmit() {
    this.vatData.getObservable().subscribe(
      () => this.setLoading(false),
      (e) => {
        this.setLoading(false);
      });

    this.showValidationResult();
    this.vatNumberControl.valueChanges.subscribe(() => {
      this.showValidationResult();
    });

    if (this.vatForm.valid){
      this.setLoading(true);
      this.vatData.requestData(this.vatNumberControl.value);
    }
  }

  setLoading(loading: boolean) {
    if (loading) {
      this.spinner.show().then(() => {
        setTimeout(() => {
          this.setLoading(false);
        }, this.spinnerTimeout);
      });
    } else {
      this.spinner.hide();
    }
  }
}
