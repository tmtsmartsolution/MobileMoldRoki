import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../services/server.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dataMold:any;
  constructor(private _ServerService: ServerService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getMold();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.getMold();
    }, 2000);
  }

  getMold(){
    this._ServerService.getMold()
    .subscribe(data => {
      
      this.dataMold = data;
      this.dataMold = JSON.parse(this.dataMold);
      console.log(this.dataMold);   
    })
  }
}
