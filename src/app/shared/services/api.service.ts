import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {UrlBuilder} from '../utils/url-builder.utils';
import {Observable, of, throwError} from 'rxjs';
import {Vat} from '../models/vat.model';
import {HttpClient} from '@angular/common/http';
import {catchError, map, timeout} from 'rxjs/operators';
import {AlertService} from './alert.service';

const VAT_API = environment.vatApi;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  timeout: number = 15000;

  constructor(private http: HttpClient,
              private alertService: AlertService) {
  }

  private static buildApiUrl(path: string, params?: Map<string, string>): string {
    const vatApiUrl = new UrlBuilder(VAT_API.host, VAT_API.protocol);
    vatApiUrl.setPath(path);
    if (params !== undefined && params.size > 0) {
      vatApiUrl.setParameters(params);
    }

    return vatApiUrl.toString();
  }

  public getVatDate(vatNumber: string): Observable<Vat> {
    const params = new Map();
    params.set(VAT_API.paths.numbers.params.vatNumber, vatNumber);

    const url = ApiService.buildApiUrl(VAT_API.paths.numbers.pathname, params);
    return this.http
      .get(url)
      .pipe(
        timeout(this.timeout),
        map(resp => {
            return new Vat(
              resp['CountryCode'],
              resp['VATNumber'],
              resp['RequestDate'],
              resp['Valid'],
              resp['Name'],
              resp['Address']
            );
          }
        ),
        catchError(err => this.handleError(err))
      );
  }

  private handleError<T>(error) {
    let errorMessage = '';
    let userMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
      userMessage = 'Something went wrong. Try to restart page...';
    } else {
      switch (error.status) {
        case 503:
          userMessage = 'Invalid VAT number. Try another one';
          break;
        default:
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          userMessage = 'Server error. Try again later!';
      }
    }
    console.error(errorMessage);
    this.alertService.showErr(userMessage);
    return throwError(error);
  }
}
