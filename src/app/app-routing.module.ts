import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'houses',
    loadChildren: () =>
      import('./houses/houses.module').then((m) => m.HousesModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./characters/characters.module').then((m) => m.CharactersModule),
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./books/books.module').then((m) => m.BooksModule),
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
