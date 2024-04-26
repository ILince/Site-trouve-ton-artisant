import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./Pages/home-page/home.component";
import { ArtisantDetailsComponent } from "./Pages/artisan-details-page/artisan-details.components";
import { ArtisantsListComponent } from "./Pages/artisans-list-page/artisans-list.component";
import { ErrorPageComponent } from "./Pages/error-page/error-page.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "artisant-details/:id", component: ArtisantDetailsComponent },
  { path: "artisans-list", component: ArtisantsListComponent },
  { path: "**", pathMatch: 'full',component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
