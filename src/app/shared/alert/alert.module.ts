import {NgModule} from '@angular/core';
import {AlertDirective} from './alert.directive';

@NgModule({
  declarations: [ AlertDirective ],
  exports: [ AlertDirective]
})

export class AlertModule {}
