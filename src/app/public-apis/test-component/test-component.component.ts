import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
// import { db } from '../../services/db/db.service';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor(
    private api : APIService,
    private http : HttpClient
    // private db : db
  ) { }

  ngOnInit(): void {
  }

  callAPI(){
    this.http.get("https://api.publicapis.org/entries").subscribe(
      (response ) => {
        console.log("Response : ", response);

        
        
      },
      (error  ) => {
        console.log('Error : ',error);
        
      }
    );
  }

}
