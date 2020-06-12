import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(
    private http: HttpClient,
    private state: StateService
  ) { }

  get(data) {
    return this.http.get(this.state.API_URL + 'get')
    .pipe(map(results => results));
  }
}
