import { Component, input, inject, signal } from '@angular/core';
import { CarService } from '../../services/car.service.js';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { withLoadState, LoadState } from '../../../../shared/load-state.js';
import { Car } from '../../models/car.model.js';
import { RouterLink, Router } from '@angular/router';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-car-details',
  imports: [RouterLink, MatAnchor],
  templateUrl: './car-details.html',
  styleUrl: './car-details.scss',
})
export class CarDetails {
  private carService = inject(CarService);
  private readonly router = inject(Router);
  readonly deleting = signal(false);
  
  readonly deleteError = signal<string | null>(null);


  readonly id = input.required<string>();

  readonly initial: LoadState<Car> = { status: 'loading' };

  state = toSignal(
    toObservable(this.id).pipe(
      switchMap((id) => withLoadState(this.carService.getCarById(id))),
    ),
    { initialValue: this.initial },
  );

  deleteCar(car: Car): void {
    if (!confirm(`Delete ${car.make} ${car.model}?`)) return;
  
    this.deleting.set(true);
    this.deleteError.set(null);
  
    this.carService.deleteCar(car._id).subscribe({
      next: () => this.router.navigate(['/cars']),
      error: (err: Error) => {
        this.deleteError.set(err.message);
        this.deleting.set(false);
      },
    });
  }
}
