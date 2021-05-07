import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[alerting]'
})
export class AlertDirective {
  @Input() public name: string;

  constructor() {}

  @HostListener('click')
  alertO(){
    alert(this.name);
    console.log(this.name);
    console.log('clicked!!');
  }
}
