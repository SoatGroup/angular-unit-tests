import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Component, ViewChild } from '@angular/core';
import { SharedComponent } from './shared.component';

@Component({
  selector: 'app-parent',
  template: `
      <app-shared [entree]="entree" (envoi)="envoi($event)">
      </app-shared>
  `
})
export class ParentComponent {
  @ViewChild(SharedComponent) child;
  entree = 'Hello';
  envoi = evt => {};
}

describe('SharedComponent', () => {

  let fixture: ComponentFixture<ParentComponent>;
  let comp: ParentComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            ParentComponent,
            SharedComponent
          ],
        schemas: [ NO_ERRORS_SCHEMA ]
    });
  }));

  beforeEach(async(() => {
      fixture = TestBed.createComponent(ParentComponent);
      comp = fixture.componentInstance;
  }));

  it('should have a Hello message', () => {
      fixture.detectChanges();
      expect(comp.child.entree).toBe('Hello');
      const el = fixture.debugElement.query(By.css('article'));
      expect(el.nativeElement.innerHTML).toBe('Hello');
  });

  it('should send the event', () => {
      spyOn(comp, 'envoi');
      fixture.detectChanges();
      const el = fixture.debugElement.query(By.css('article'));

      el.nativeElement.click();
      // fixture.detectChanges();
      expect(comp.envoi).toHaveBeenCalledWith('envoi');
  });

});
