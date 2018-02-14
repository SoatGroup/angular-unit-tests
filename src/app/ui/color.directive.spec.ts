import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorDirective } from './color.directive';

@Component({
  selector: 'app-parent',
  template: '<div [appColor]="color">Hello</div>'
})
export class ParentComponent {
  public color: string;
}

describe('AppColorDirective', () => {

  let fixture: ComponentFixture<ParentComponent>;
  let comp: ParentComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ParentComponent,
        ColorDirective
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParentComponent);
    comp = fixture.componentInstance;
  }));

  it('should change its background color', () => {

    comp.color = 'white';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('div'));

    expect(el.nativeElement.style.backgroundColor).toEqual('white');
  });

});
