import { Component } from '@angular/core';
import { Car } from '../../models/car.model';
import { input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-car-card',
  imports: [RouterLink, MatAnchor],
  templateUrl: './car-card.html',
  styleUrl: './car-card.scss',
})
export class CarCard {
  car = input.required<Car>();
}
