import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
    HttpClientTestingModule, HttpTestingController
} from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {

  let service, http, backend;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers: [ DataService ]
    });
  });

  beforeEach(inject([DataService, HttpClient, HttpTestingController], (
    conf: DataService,
    _h: HttpClient,
    _b: HttpTestingController
  ) => {
    service = conf;
    http = _h;
    backend = _b;
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
      httpMock.verify();
  }));

  it('should get data', () => {

      service.getInfo('param').subscribe(res => {
          expect(res).toBe('pan');
      });

      const req = backend.expectOne({
        url: '/url?param=param',
        method: 'GET'
      });

      req.flush('pan', { status: 200, statusText: 'ok' });

  });

});
