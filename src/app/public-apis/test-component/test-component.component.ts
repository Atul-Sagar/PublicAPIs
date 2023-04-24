import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';


@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor(
    private api : APIService
  ) { }

  ngOnInit(): void {
  }

  callAPI(){
    this.api.makeGetRequest("https://api.publicapis.org/entries").subscribe(
      (response ) => {
        console.log("Response : ", response);
        
      },
      (error  ) => {
        console.log('Error : ',error);
        
      }
    );
  }

}
