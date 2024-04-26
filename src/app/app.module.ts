import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./Pages/home-page/home.component";
import { ArtisantsListComponent } from "./Pages/artisans-list-page/artisans-list.component";
import { ArtisantDetailsComponent } from "./Pages/artisan-details-page/artisan-details.components";
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { ArtisansOfTheMonthComponent } from "./Components/artisans-of-the-month/artisans-of-the-month.component";
import { StarRatingComponent } from "./Components/star-rating/star-rating.component";
import { ErrorPageComponent } from "./Pages/error-page/error-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtisantsListComponent,
    ArtisantDetailsComponent,
    HeaderComponent,
    FooterComponent,
    ArtisansOfTheMonthComponent,
    StarRatingComponent,
    ErrorPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  isCollapsed = true;
}
