import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialEventsComponent } from './special-events.component';
import { SpecialEventsRoutes } from './special-events.routing';



@NgModule({
  declarations: [SpecialEventsComponent],
  imports: [
    CommonModule,
    SpecialEventsRoutes
  ]
})
export class SpecialEventsModule { }
