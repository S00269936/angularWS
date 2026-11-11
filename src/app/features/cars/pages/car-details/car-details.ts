import { Component, input } from '@angular/core';
import { inject } from '@angular/core';
import { CarService } from '../../services/car.service.js';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { withLoadState, LoadState } from '../../../../shared/load-state.js';
import { Car } from '../../models/car.model.js';
import { RouterLink } from '@angular/router';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-car-details',
  imports: [RouterLink, MatAnchor],
  templateUrl: './car-details.html',
  styleUrl: './car-details.scss',
})
export class CarDetails {
  private carService = inject(CarService);

  readonly id = input.required<string>();

  readonly initial: LoadState<Car> = { status: 'loading' };

  state = toSignal(
    toObservable(this.id).pipe(
      switchMap((id) => withLoadState(this.carService.getCarById(id))),
    ),
    { initialValue: this.initial },
  );

}
