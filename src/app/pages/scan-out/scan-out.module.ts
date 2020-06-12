import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanOutPageRoutingModule } from './scan-out-routing.module';

import { ScanOutPage } from './scan-out.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanOutPageRoutingModule
  ],
  declarations: [ScanOutPage]
})
export class ScanOutPageModule {}
