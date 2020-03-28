import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  eventsUrl = 'http://localhost:61946/api/events/';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get(`${this.eventsUrl}${'getevents'}`);
  }

  getSpecialEvents(): Observable<any> {
    return this.http.get(`${this.eventsUrl}${'getspecialevents'}`);
  }
}
