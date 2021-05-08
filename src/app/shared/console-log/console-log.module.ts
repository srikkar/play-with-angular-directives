import {NgModule} from '@angular/core';
import {ConsoleLogDirective} from './console-log.directive';

@NgModule({
  declarations: [ ConsoleLogDirective],
  exports: [ ConsoleLogDirective]
})
export class ConsoleLogModule {}
