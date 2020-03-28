import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents: any;
  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.getSpecialEvents().subscribe(res => {
      this.specialEvents = res;
    });
  }
}
