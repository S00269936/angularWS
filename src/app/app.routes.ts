import { Routes } from '@angular/router';
import { CarList } from './features/cars/pages/car-list/car-list';
import { CarForm } from './features/cars/components/car-form/car-form';
import { CarDetails } from './features/cars/pages/car-details/car-details';
import { Register } from './features/auth/pages/register/register';
import { LoginComponent } from './features/auth/pages/login/login';
import { authGuard } from './core/auth/auth-guard';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'cars',
      pathMatch: 'full'
    },
    {
      path: 'cars',
      component: CarList
    },
    {
        path: 'cars/new',
        component: CarForm, canActivate: [authGuard]
      },
      {
        path: 'cars/:id',
        component: CarDetails
      },
      {
        path: 'cars/new',
        component: CarForm, canActivate: [authGuard]
      },
      {
        path: 'cars/:id/edit',
        component: CarForm, canActivate: [authGuard]
      },
      {
        path: 'register',
        component: Register
      },
      {
        path: 'login',
        component: LoginComponent
      }
  ];
  