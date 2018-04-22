import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Hands } from "./hands";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";


@Injectable()
export class HandService {
  handUrl: string = 'api/play'
  constructor(private http: HttpClient) {
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHands(): Observable<Hands[]> {
    return this.http.get<Hands[]>(this.handUrl).pipe(catchError(this.handleError('getHands', [])))
  }

}
