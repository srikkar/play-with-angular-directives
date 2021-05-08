import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BgColorModule} from './shared/bg-color/bg-color.module';
import {AlertModule} from './shared/alert/alert.module';
import {ConsoleLogModule} from './shared/console-log/console-log.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BgColorModule,
    AlertModule,
    ConsoleLogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
