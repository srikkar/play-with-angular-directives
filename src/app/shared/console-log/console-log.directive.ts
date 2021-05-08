import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: 'input[consoleLog]'
})
export class ConsoleLogDirective {
@Input() public msg: string | undefined;
  constructor() { }

  @HostListener('blur')
  consoleLogger(): void {
    console.log(this.msg);
  }

}
