import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  API_URL = 'https://192.168.1.100/MoldLayout/api/MoldDatas/Get';
  constructor() { }
}
