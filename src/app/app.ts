import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarList } from './features/cars/pages/car-list/car-list';
import { inject } from '@angular/core';
import { AuthCustomService } from './core/auth/auth-custom.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarList, RouterLink, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angularWS');
  protected auth = inject(AuthCustomService);
}
