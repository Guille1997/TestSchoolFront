import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Profesor } from '../profesor/profesor';
@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  apiUrl = 'https://localhost:5001/api/Profesor';
  constructor(private httpClient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAll(): Observable<any> {
    return this.httpClient
      .get(this.apiUrl)

      .pipe(catchError(this.errorHandler));
  }

  delete(id: number) {
    return this.httpClient
      .delete(this.apiUrl + '/' + id, this.httpOptions)

      .pipe(catchError(this.errorHandler));
  }

  create(profesor: Profesor): Observable<any> {
    return this.httpClient
      .post(this.apiUrl, JSON.stringify(profesor), this.httpOptions)

      .pipe(catchError(this.errorHandler));
  }

  find(id: number): Observable<any> {
    return this.httpClient
      .get(this.apiUrl + '/' + id)

      .pipe(catchError(this.errorHandler));
  }

  update(id: number, profesor: Profesor): Observable<any> {
    return this.httpClient
      .put(this.apiUrl + '/' + id, JSON.stringify(profesor), this.httpOptions)

      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }
}
