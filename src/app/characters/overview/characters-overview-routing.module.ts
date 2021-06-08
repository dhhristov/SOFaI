import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersOverviewComponent } from './characters-overview.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersOverviewComponent,
    data: {
      title: 'Characters Overview',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersOverviewRoutingModule {}
