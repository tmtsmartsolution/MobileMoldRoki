import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  //API_URL = 'https://1hzdevelop.thddns.net:2727/MoldLayout/api/';
  API_URL = 'https://192.168.100.199:8080/MoldLayout/api/';
  constructor() { }
}
