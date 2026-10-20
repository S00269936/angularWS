import { Component } from '@angular/core';
import { Car } from '../../models/car.model';
import { input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  imports: [],
  templateUrl: './car-card.html',
  styleUrl: './car-card.scss',
})
export class CarCard {
  car = input.required<Car>();
}
