import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutomoveisPageRoutingModule } from './automoveis-routing.module';

import { AutomoveisPage } from './automoveis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutomoveisPageRoutingModule
  ],
  declarations: [AutomoveisPage]
})
export class AutomoveisPageModule {}
