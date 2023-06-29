import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavegarPageRoutingModule } from './navegar-routing.module';

import { NavegarPage } from './navegar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavegarPageRoutingModule
  ],
  declarations: [NavegarPage]
})
export class NavegarPageModule {}
