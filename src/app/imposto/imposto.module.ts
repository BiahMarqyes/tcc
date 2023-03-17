import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImpostoPageRoutingModule } from './imposto-routing.module';

import { ImpostoPage } from './imposto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImpostoPageRoutingModule
  ],
  declarations: [ImpostoPage]
})
export class ImpostoPageModule {}
