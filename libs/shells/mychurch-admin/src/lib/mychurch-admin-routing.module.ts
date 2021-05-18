import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MychurchAdminComponent } from './mychurch-admin.component';

export const mchurchAdminRoutes: Route[] = [
  {
    path: '', component: MychurchAdminComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(mchurchAdminRoutes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class MychurchAdminRoutingModule { }
