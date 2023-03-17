import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BpcPage } from './bpc.page';

const routes: Routes = [
  {
    path: '',
    component: BpcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BpcPageRoutingModule {}
