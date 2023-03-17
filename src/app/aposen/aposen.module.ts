import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AposenPageRoutingModule } from './aposen-routing.module';

import { AposenPage } from './aposen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AposenPageRoutingModule
  ],
  declarations: [AposenPage]
})
export class AposenPageModule {}
