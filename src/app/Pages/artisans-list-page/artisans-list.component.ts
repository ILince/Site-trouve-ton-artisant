import { Component, OnInit } from "@angular/core";
import { ArtisansService } from "../../Services/artisans.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-artisans-list",
  template: `
    <main id="main">
      <section id="artisan-list">
        <!-- card container -->
        <div class="container p-4" style="max-width: 1400px; ">
          <h2 class="m-4 text-center title">Liste de nos artisans</h2>
          <div class="row ">
            <!-- Artisans Card -->
            <div
              *ngFor="let artisan of artisans"
              class="col-12 col-sm-6 col-lg-4 mb-4"
            >
              <div class="card">
                <img
                  class=" card-img"
                  [src]="artisan.imageUrl"
                  alt="Product Image"
                />

                <div
                  class="card-body d-flex flex-column justify-content-around"
                >
                  <h3 class="my-4">{{ artisan.name }}</h3>
                  <h4>
                    Spécialité : <strong>{{ artisan.specialty }}</strong>
                  </h4>

                  <div class="d-flex align-items-center my-2">
                    <h4>Note : {{ artisan.rating }}/5</h4>
                    <!-- Star rating Component -->
                    <app-star-rating
                      [rating]="artisan.rating"
                      class="mx-4"
                    ></app-star-rating>
                  </div>
                  <h4>Localisation : {{ artisan.location }}</h4>

                  <!-- Lien vers la page "artisant-details" à partir des id des artisans  -->
                  <a
                    [routerLink]="['/artisant-details', artisan.id]"
                    class="btn"
                    >Voir plus</a
                  >
                </div>
              </div>
              <div class="line"></div>
            </div>
            <!-- card end -->
          </div>
        </div>
        <!-- Card container end -->
      </section>
    </main>
  `,
  styles: `
  .title{
    font-size:2em;
  }
  h2{
    font-size:1.6em;
    margin:0px;
  }
  h4{
    font-size:1.3em;
  }
   `,
})
export class ArtisantsListComponent {
  artisans: any[] = [];
  selectedCategory: string = "";

  constructor(
    private ArtisansService: ArtisansService,
    private route: ActivatedRoute
  ) {}
  // Exécution de la methode à l'initialisation du composant.
  ngOnInit(): void {
    // Récupération des paramètres modifiés de l'URL
    this.route.queryParams.subscribe((params) => {
      const searchTerm = params["search"];
      this.selectedCategory = params["category"];

      // Récupération des artisans correspondant au terme recherché (searchTerm) et l'implante à "this.artisans".

      if (searchTerm) {
        this.artisans = this.ArtisansService.searchArtisans(searchTerm);
      }
      // Récupération des artisans par catégorie (selectedCategory) et l'implante à "this.artisans".
      else if (this.selectedCategory) {
        this.artisans = this.ArtisansService.filterArtisansByCategory(
          this.selectedCategory
        );
      } else {
        // Récupération de tous les artisans et tri par ordre alphabétique.
        this.artisans = this.ArtisansService.getAllArtisans();

        this.artisans.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      }
    });
  }
}
