import { Routes } from '@angular/router';
import { CarList } from './features/cars/pages/car-list/car-list';
import { CarForm } from './features/cars/components/car-form/car-form';

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
        component: CarForm
      },
    
  ];
  