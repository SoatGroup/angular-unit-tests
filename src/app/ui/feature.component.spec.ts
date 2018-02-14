import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';
import { FeatureComponent } from './feature.component';

describe('FeatureComponent', () => {

  const spyDataService = jasmine.createSpyObj(
      'spyDataService', ['change', 'getMessage']
  );
  spyDataService.getMessage.and.returnValue(Observable.of('Hello'));

  beforeEach(async(() => {
       TestBed.configureTestingModule({
           declarations: [ FeatureComponent ],
           providers: [
               {
                  provide: DataService,
                  useValue: spyDataService
               }
           ],
           schemas: [ NO_ERRORS_SCHEMA ]
       });
   }));

  let fixture: ComponentFixture<FeatureComponent>;
  let comp: FeatureComponent;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeatureComponent);
    comp = fixture.componentInstance;
  }));

  it('should change data', () => {
    fixture.detectChanges();
    comp.change('Envoi');
    expect(spyDataService.change).toHaveBeenCalledWith('Envoi');
  });

  it('should get a new message', () => {
      fixture.detectChanges();
      expect(spyDataService.getMessage).toHaveBeenCalled();
      expect(comp.message).toBe('Hello');
  });

  it('should have a Hello value', () => {
       fixture.detectChanges();
       const element: DebugElement = fixture.debugElement;
       const el = element.query(By.css('article'));
       expect(el.nativeElement.innerHTML.trim()).toBe('Hello');
   });
});
