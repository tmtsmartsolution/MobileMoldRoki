import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {ServerService} from '../../services/server.service';
import {AlertService} from '../../services/alert.service';
@Component({
  selector: 'app-scan-out',
  templateUrl: './scan-out.page.html',
  styleUrls: ['./scan-out.page.scss'],
})
export class ScanOutPage implements OnInit {

  barcode: any;
  isScan = false;
  disabledBtn = true;
  moldStatus = "";
  btnOkDisable = true;
  btnScanOutDisable = false;
  categories: any;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private _ServerService: ServerService,
    private _AlertService: AlertService
  ) { }

  ngOnInit() {
    this.onScan();
  }

  onScan(){
    this.isScan = false;
    this.barcodeScanner.scan().then(barcodeData => {
      this.barcode = barcodeData.text;
      this.isScan = true;
      // console.log('Barcode data', barcodeData);
    }).catch(err => {
         console.log('Error', err);
    });
  }

  radioGroupChange(event) {
    // console.log("radioGroupChange",event.detail.value);
    
    this.moldStatus = this.categories;
    if(this.categories !== null &&  this.barcode !== null){
      this.btnOkDisable = false;
    }
  }

  btnOk(){
    
    this._ServerService.ChangeStatusMold(this.barcode, this.moldStatus)
    .subscribe((response: any) => {
      response = JSON.parse(response)
      if(response.Status == 200 || response.Status == 0){
        this._AlertService.presentToast("Scan Out Success!!",'success');
        // setTimeout(() => {
        //   this.onScan()
        //  }, 2000);
      }
    }, (error) => {
      this._AlertService.presentToast("Scan Out Error!!",'danger');
      console.log(error);
    });
    this.categories = null;
    this.btnOkDisable=true;
    this.barcode=null;
  }

  btnScanOut(){
    this.onScan();
  }

}
