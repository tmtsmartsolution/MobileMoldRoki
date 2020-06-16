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

  //header = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

  getMold() {
    return this.http.get(this.state.API_URL + 'MoldDatas/Get');
    // return this.http.get(this.state.API_URL)
    // .pipe(map(results => results));
  }

  moldSearch(Barcode: String) {
    return this.http.get(this.state.API_URL + "MoldDatas/ClearViewMold?Barcode="+Barcode+""
      // {Barcode: Barcode}
    )
  }

  ChangeStatusMold(Barcode: String, StatusId : String) {
    return this.http.get(this.state.API_URL + "MoldDatas/ChangeStatusMold?Barcode="+Barcode+"&&StatusId="+StatusId
      // {Barcode: Barcode}
    )
  }
}
