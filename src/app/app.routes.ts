import { RoutesObj } from '../framework/tools/interfaces';
import { notFound } from './common/not-found.component';
import { winnersPageComponent } from './pages/winners-page.component';
import { garagePageComponent } from './pages/carage-page.component';

export const appRoutes: RoutesObj[] = [
  { path: '', component: garagePageComponent },
  { path: 'winners', component: winnersPageComponent },
  { path: '**', component: notFound },
];
