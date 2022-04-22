import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "genres", component: IndexGenresComponent },
  { path: "genres/edit/:id", component: EditGenreComponent },
  { path: "genres/create", component: CreateGenreComponent },
  { path: "**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
