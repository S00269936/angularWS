import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CarCard } from '../../components/car-card/car-card';
import { toSignal } from '@angular/core/rxjs-interop';
import { withLoadState } from '../../../../shared/load-state';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-car-list',
  imports: [CarCard, RouterLink],
  templateUrl: './car-list.html',
  styleUrl: './car-list.scss',
})
export class CarList{
  private carService = inject(CarService);
  state = toSignal(withLoadState(this.carService.getCars()), { requireSync: true });
}
