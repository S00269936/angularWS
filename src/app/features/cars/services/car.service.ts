import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5050/api/v1/cars'; // this should be read from an env variable we will leave it for now.

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl)
  }

}
