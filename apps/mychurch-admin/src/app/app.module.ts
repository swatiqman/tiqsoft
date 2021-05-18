import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MychurchAdminModule } from '@tiq-soft/shells/mychurch-admin'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MychurchAdminModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
