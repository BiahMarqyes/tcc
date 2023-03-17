import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AposenPage } from './aposen.page';

const routes: Routes = [
  {
    path: '',
    component: AposenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AposenPageRoutingModule {}
