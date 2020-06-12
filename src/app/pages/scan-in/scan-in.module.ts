import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanInPageRoutingModule } from './scan-in-routing.module';

import { ScanInPage } from './scan-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanInPageRoutingModule
  ],
  declarations: [ScanInPage]
})
export class ScanInPageModule {}
