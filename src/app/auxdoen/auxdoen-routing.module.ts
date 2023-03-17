import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuxdoenPage } from './auxdoen.page';

const routes: Routes = [
  {
    path: '',
    component: AuxdoenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuxdoenPageRoutingModule {}
