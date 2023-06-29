import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavegarPage } from './navegar.page';

const routes: Routes = [
  {
    path: '',
    component: NavegarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavegarPageRoutingModule {}
