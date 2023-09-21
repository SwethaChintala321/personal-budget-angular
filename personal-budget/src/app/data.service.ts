import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any; // Variable to store fetched data

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    // Check if data is already available
    if (!this.data) {
      // If data is not available, make an HTTP GET request to fetch it
      return this.http.get<any>('http://localhost:3000/budget').pipe(
        // Store the fetched data in the 'data' variable
        tap((responseData) => {
          this.data = responseData;
        })
      );
    } else {
      // If data is available, return it as an observable
      return of(this.data);
    }
  }

  getData(): any {
    return this.data; // Return the stored data
  }
}
function tap(arg0: (responseData: any) => void): import("rxjs").OperatorFunction<any, any> {
  throw new Error('Function not implemented.');
}

