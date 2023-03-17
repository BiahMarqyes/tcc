import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImpostoPage } from './imposto.page';

const routes: Routes = [
  {
    path: '',
    component: ImpostoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImpostoPageRoutingModule {}
