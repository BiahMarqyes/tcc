import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutomoveisPage } from './automoveis.page';

const routes: Routes = [
  {
    path: '',
    component: AutomoveisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutomoveisPageRoutingModule {}
