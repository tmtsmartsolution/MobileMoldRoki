import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanInPage } from './scan-in.page';

const routes: Routes = [
  {
    path: '',
    component: ScanInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanInPageRoutingModule {}
