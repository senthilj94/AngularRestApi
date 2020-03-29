import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents: any;
  constructor(private eventsService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.eventsService.getSpecialEvents().subscribe(res => {
      this.specialEvents = res;
    }, error => {
      this.router.navigate(['/login']);
    });
  }
}
