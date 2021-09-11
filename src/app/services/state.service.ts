import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  API_URL = 'https://virtualstore.tmt-digital.com/api/';
  constructor() { }
}
