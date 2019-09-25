import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: 'input[appDNI]'
})
export class DNIDirective {
  constructor(private el: ElementRef) {}
  @HostBinding('style.border-color') borderColor;

  @HostListener('keyup') onKeyUp() {
    this.borderColor = this.validDNI(this.el.nativeElement.value) ? '' : 'red';
  }

  validDNI(dni) {
    return (
      dni.match(/^(\d{8})([A-Z])$/) &&
      'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(parseInt(dni, 10) % 23) === dni.charAt(8)
    );
  }
}
