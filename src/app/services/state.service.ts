import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  API_URL = 'https://dev.tungtongsaving.com/api/';
  constructor() { }
}
