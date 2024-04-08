import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ArtisantDetailsComponent } from './Pages/artisant-details/artisant-details.component';
import { ArtisantsListComponent } from './Pages/artisants-list/artisants-list.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'Artisant-details', component: ArtisantDetailsComponent},
  {path:'Artisants-list', component: ArtisantsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
