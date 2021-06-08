import { NgModule } from '@angular/core';
import { BooksOverviewComponent } from './books-overview.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BooksOverviewComponent,
    data: {
      title: 'Books Overview',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksOverviewRoutingModule {}
