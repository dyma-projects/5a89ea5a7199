import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirective {

  private code: string;

  @HostBinding('style.color') public textColor = 'black';

  @HostListener('window:keydown', ['$event']) windowClick($event) {

    this.code = (<KeyboardEvent>event).code;

    if (this.code === 'ArrowUp') {
      this.textColor = 'red';
    } else if (this.code === 'ArrowRight') {
      this.textColor = 'blue';
    } else if (this.code === 'ArrowDown') {
      this.textColor = 'green';
    } else if (this.code === 'ArrowLeft') {
      this.textColor = 'purple';
    }
  }

  constructor() {
  }
}
