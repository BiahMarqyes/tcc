import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuxdoenPageRoutingModule } from './auxdoen-routing.module';

import { AuxdoenPage } from './auxdoen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuxdoenPageRoutingModule
  ],
  declarations: [AuxdoenPage]
})
export class AuxdoenPageModule {}
