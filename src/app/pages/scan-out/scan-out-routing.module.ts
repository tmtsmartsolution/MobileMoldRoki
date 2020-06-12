import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanOutPage } from './scan-out.page';

const routes: Routes = [
  {
    path: '',
    component: ScanOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanOutPageRoutingModule {}
