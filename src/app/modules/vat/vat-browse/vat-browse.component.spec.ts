import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatBrowseComponent } from './vat-browse.component';

describe('VatBrowseComponent', () => {
  let component: VatBrowseComponent;
  let fixture: ComponentFixture<VatBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
