import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BpcPageRoutingModule } from './bpc-routing.module';

import { BpcPage } from './bpc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BpcPageRoutingModule
  ],
  declarations: [BpcPage]
})
export class BpcPageModule {}
