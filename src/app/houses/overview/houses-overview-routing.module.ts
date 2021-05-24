import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HousesOverviewComponent } from './houses-overview.component';

const routes: Routes = [
  {
    path: '',
    component: HousesOverviewComponent,
    data: {
      title: 'Houses Overview',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HousesOverviewRoutingModule {}
