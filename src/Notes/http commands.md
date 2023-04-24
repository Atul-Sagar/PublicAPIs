<!-- Steps to use HttpClientModule with angular 12 -->

<!-- Import HttpClientModule from @angular/common/http in the module.ts file -->
import { HttpClientModule } from '@angular/common/http';

<!-- Add it to the imports array in @NgModule -->
@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})

<!-- In your service.ts file import thr HttpClient -->
import { HttpClient } from '@angular/common/http';

<!-- Initilize it in the constructor as a private variable -->
constructor(private http: HttpClient) { }

<!-- Import RxJS using the following imports -->
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

<!-- Make a new function for the http call -->
makeGetRequest() {
  return this.http.get<Type>("Api-EndPoint");
}

<!-- In Your component.ts file call the function from the api service file  -->
functionname() {
  this.api.makeGetRequest()
    .subscribe((data: Type) => this.config = {
        heroesUrl: data.heroesUrl,
        textfile:  data.textfile,
        date: data.date,
    });
}


<!-- Request a non JSON Resoponse API call -->
makePostRequest(requestName: String, rawBody: any) {

    return this.http.post(this.baseUrl + requestName, rawBody, this.requestOptions)
      .pipe(
        map((xmlString: any) => {
            return xmlString;
        }),
        catchError((err) => {
            console.warn('INT ERR:', err);
            return err;
        })
      );
}

<!-- Using this non JSON method in a component.ts file -->
async submitCase(raw : any){
  await this.api.makePostRequestWithToken("InvestigatorSRS/Investigation",raw)
  .subscribe(
    (response) => {
      console.log("Response : ", response);
      if(response == "1"){
        alert("case submitted bois")
      }
    },
    (error) => {
      console.log('Error : ',error);
      
    }
  )
}

<!-- Handling HTTP erros -->
private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}


<!-- Retrying a failed api request -->
methodName() {
  return this.http.get<Type>("APIENDPOINT")
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
}