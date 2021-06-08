import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseComponent } from './house/house.component';
import { HousesOverviewComponent } from './houses-overview.component';

const routes: Routes = [
  {
    path: '',
    component: HousesOverviewComponent,
    data: {
      title: 'Houses Overview',
    },
  },
  {
    path: ':id',
    component: HouseComponent,
    data: {
      title: 'House Preview',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HousesOverviewRoutingModule {}
