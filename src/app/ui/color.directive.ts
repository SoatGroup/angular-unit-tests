import { Directive, Input, ElementRef, OnChanges } from '@angular/core';
@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnChanges {
    @Input() appColor = '#000000';
    constructor(private el: ElementRef) { }

    ngOnChanges() {
      this.el.nativeElement.style.backgroundColor = this.appColor;
    }
}
