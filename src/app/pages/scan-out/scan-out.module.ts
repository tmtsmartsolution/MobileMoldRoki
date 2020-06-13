import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanOutPageRoutingModule } from './scan-out-routing.module';

import { ScanOutPage } from './scan-out.page';
import { ComponentModule } from 'src/app/component/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanOutPageRoutingModule,
    ComponentModule
  ],
  declarations: [ScanOutPage]
})
export class ScanOutPageModule {}
