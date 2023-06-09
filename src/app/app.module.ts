import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './public-apis/test-component/test-component.component';
import { APIService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
