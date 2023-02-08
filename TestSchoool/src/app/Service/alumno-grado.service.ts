import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AlumnoGrado } from '../alumno-grado/alumno-grado';
@Injectable({
  providedIn: 'root',
})
export class AlumnoGradoService {
  apiUrl = 'https://localhost:5001/api/AlumnoGrado';
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

  create(alumnoGrado: AlumnoGrado): Observable<any> {
    return this.httpClient
      .post(this.apiUrl, JSON.stringify(alumnoGrado), this.httpOptions)

      .pipe(catchError(this.errorHandler));
  }

  find(id: number): Observable<any> {
    return this.httpClient
      .get(this.apiUrl + '/' + id)

      .pipe(catchError(this.errorHandler));
  }

  update(id: number, alumnoGrado: AlumnoGrado): Observable<any> {
    return this.httpClient
      .put(
        this.apiUrl + '/' + id,
        JSON.stringify(alumnoGrado),
        this.httpOptions
      )

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
