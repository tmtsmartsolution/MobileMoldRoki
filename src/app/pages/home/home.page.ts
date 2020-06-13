import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../services/server.service';
import {AlertService} from '../../services/alert.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dataMold:any;
  dataMoldBase:any;
  isItemAvailable = false;
  btnDisable = false;
  searchData = "";

  items:any;

  constructor(private _ServerService: ServerService, private _AlertService: AlertService) { }

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
    .subscribe( data => {
      
      this.dataMold = data;
      this.dataMold = JSON.parse(this.dataMold);
      this.dataMoldBase = this.dataMold;
      if(this.searchData !== ""){
        this.dataMold = this.dataMoldBase.filter((item) => {
          return (item.Code.toLowerCase().indexOf(this.searchData.toLowerCase()) > -1);
        })
      }
      // console.log(this.dataMold);   
    })
  }

  getItems(ev: any) {
    this.searchData = ev.target.value;
    // console.log(this.searchData);
    if (this.searchData && this.searchData.trim() != '') {
      this.dataMold = this.dataMoldBase.filter((item) => {
          return (item.Code.toLowerCase().indexOf(this.searchData.toLowerCase()) > -1);
      })
    }else{
      this.dataMold = this.dataMoldBase;
    }
  }

  btnMoldSearch(barcode : any){
    this.btnDisable = true;
    this._ServerService.moldSearch(barcode)
    .subscribe((response: any) => {
      // console.log(response);
      this._AlertService.presentToast("Search Mold Success!!",'success');
      this.getMold();
      // console.log(this.dataMold);
    }, (error) => {
      this._AlertService.presentToast("Search Mold Error!!",'danger');
      console.log(error);
    });

    this.btnDisable = false;
  }
}
