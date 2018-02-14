import { TestBed, async, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { AsyncService } from './async.service';
import { DataService } from './data.service';
import 'rxjs/add/observable/of';

describe('AsyncService', () => {
  const spyDataService = jasmine.createSpyObj('spyDataService', ['getInfo']);
  spyDataService.getInfo.and.returnValue( Observable.of('Hello') );

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          providers: [
            AsyncService,
              {
                  provide: DataService,
                  useValue: spyDataService
              }
          ]
      });
  }));

  let service;
  beforeEach(inject( [AsyncService], (_s: AsyncService) => {
      service = _s;
  }));

  it('should get data and format result to uppercase', done => {

    service.getData('mon parm');

    service.monResultat.subscribe(resultat => {
        expect(spyDataService.getInfo).toHaveBeenCalledWith('mon parm');
        expect(resultat).toBe('HELLO');
        done();
    });

  });

});
