import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'houses',
    loadChildren: () =>
      import('./houses/houses.module').then((m) => m.HousesModule),
  },
  {
    path: '**',
    redirectTo: 'houses',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
