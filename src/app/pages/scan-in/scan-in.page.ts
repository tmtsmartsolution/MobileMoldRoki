import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {ServerService} from '../../services/server.service';
import {AlertService} from '../../services/alert.service';
@Component({
  selector: 'app-scan-in',
  templateUrl: './scan-in.page.html',
  styleUrls: ['./scan-in.page.scss'],
})
export class ScanInPage implements OnInit {
  barcode: any;
  isScan = false;
  btnDisable = false;
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
      if(this.barcode !== ""){
        this._ServerService.ChangeStatusMold(this.barcode, "3")
        .subscribe((response: any) => {
          response = JSON.parse(response)
          if(response.Status == 200 || response.Status == 0){
            this._AlertService.presentToast("Scan in to Store Success!!",'success');
            // setTimeout(() => {
            //   this.onScan()
            //  }, 2000);
          }
        }, (error) => {
          this._AlertService.presentToast("Scan in Error!!",'danger');
          console.log(error);
        });
      }
      
    }).catch(err => {
         console.log('Error', err);
    });
  }

  btnScanIn(){
    this.onScan();
  }

}
