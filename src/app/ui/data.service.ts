import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  change = (evt) => {};

  getMessage = () => Observable.of('');
}
