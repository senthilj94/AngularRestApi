import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/pages/login/login.module')
    .then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../app/pages/register/register.module')
    .then(m => m.RegisterModule)
  },
  {
    path: 'events',
    loadChildren: () => import('../app/pages/events/events.module')
    .then(m => m.EventsModule)
  },
  {
    path: 'special',
    loadChildren: () => import('../app/pages/special-events/special-events.module')
    .then(m => m.SpecialEventsModule)
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
