import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  API_URL = 'https://1hzdevelop.thddns.net:2727/MoldLayout/api/';
  constructor() { }
}
