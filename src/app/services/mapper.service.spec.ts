import { TestBed, async, inject, fakeAsync, tick, flush } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { MapperService } from './mapper.service';
import { DataService } from './data.service';
import 'rxjs/add/observable/of';

describe('MapperService', () => {
  const spyDataService = jasmine.createSpyObj('spyDataService', ['getInfo']);
  spyDataService.getInfo.and.returnValue( Observable.of('Hello') );

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          providers: [
              MapperService,
              {
                  provide: DataService,
                  useValue: spyDataService
              }
          ]
      });
  }));

  let service;
  beforeEach(inject( [MapperService], (_s: MapperService) => {
      service = _s;
  }));

  it('should get data and format result to uppercase', () => {
     service.getData('mon parm');
     expect(spyDataService.getInfo).toHaveBeenCalledWith('mon parm');
     expect(service.monResultat).toBe('HELLO');
  });

  it('should return true', fakeAsync(() => {
      service.getValueAfterTimer();

      tick(25);
      expect(service.val).toBe(false);
      tick(25);
      expect(service.val).toBe(true);

  }));

});
