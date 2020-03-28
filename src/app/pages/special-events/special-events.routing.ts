import { Routes, RouterModule } from '@angular/router';
import { SpecialEventsComponent } from './special-events.component';

const routes: Routes = [
  {
    path: '',
    component: SpecialEventsComponent
  },
];

export const SpecialEventsRoutes = RouterModule.forChild(routes);
