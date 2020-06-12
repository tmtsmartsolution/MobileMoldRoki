import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scan-out',
  templateUrl: './scan-out.page.html',
  styleUrls: ['./scan-out.page.scss'],
})
export class ScanOutPage implements OnInit {

  barcode: any;
  isScan = false;
  
  constructor(
    private barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit() {
    this.onScan();
  }

  onScan(){
    this.isScan = false;
    this.barcodeScanner.scan().then(barcodeData => {
      this.barcode = barcodeData.text;
      this.isScan = true;
      console.log('Barcode data', barcodeData);
    }).catch(err => {
         console.log('Error', err);
    });
  }

}
