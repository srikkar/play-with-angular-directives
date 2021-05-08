import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[alerting]'
})
export class AlertDirective {
  @Input() public name: string;
  @Input() public sayWhat?: string;

  constructor() {}

  @HostListener('click')
  alertO(): void {
    if (!!this.sayWhat) {
      alert('Hi ' + this.name + ', ' + this.sayWhat);
    } else {
      alert('Hi ' + this.name);
    }
    console.log(this.name);
    if (this.sayWhat) {
      console.log(this.name, 'hi!', this.sayWhat);
    }
    console.log('clicked!!');
  }
}
