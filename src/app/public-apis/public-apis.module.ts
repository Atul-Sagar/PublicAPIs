import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    TestComponentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
    
  ]
})
export class PublicApisModule { }
