import { Component, OnInit } from "@angular/core";
import { Artisan } from "../../Services/artisans.model"; // Assurez-vous d'importer le bon modèle d'artisan
import { ArtisansService } from "../../Services/artisans.service";

@Component({
  selector: "app-artisans-of-the-month",

  template: `
    <!-- Artisans Card -->
    <div *ngFor="let artisan of topArtisans" class="card ">
      <div class="line"></div>
      <div class="row d-flex justify-content-around my-5">
        <div class="col-md-5 d-flex align-items-center">
          <img
            class="mt-2 card-img"
            [src]="artisan.imageUrl"
            alt="Product Image"
          />
        </div>
        <div class="col-md-6 d-flex justify-content-around">
          <div class="card-body d-flex flex-column justify-content-around">
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
            <a [routerLink]="['/artisant-details', artisan.id]" class="btn"
              >Voir plus</a
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
  .card-img{
    border-radius: 3px;
    border: 0.1rem solid #b7d1df;
  }
  .card {
    font-size: 2em;
    border: none;
    box-shadow: none;
    border-radius: 0px;
  }
  .container{
    padding:100px 0px;
  }
  .line{
    width: 10%;
    margin: 20px 10px;
    border-top: 10px solid #82b864;
  }
    `,
})
export class ArtisansOfTheMonthComponent implements OnInit {
  topArtisans: Artisan[] = [];

  constructor(private artisansService: ArtisansService) {}

  // Exécution de la methode à l'initialisation du composant.
  ngOnInit(): void {
    this.fetchTopArtisans();
  }
  // Méthode permettant de trier les 3 meilleurs artisans.
  fetchTopArtisans(): void {
    // Appel de l'observable afin de récupérer tous les artisans ayant une note définie et non nulle.
    this.artisansService.getArtisansWithRatings().subscribe((artisans) => {
      // tri et filtre du top 3 des artisans en utilisant les méthodes Javascript.
      this.topArtisans = artisans
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);
    });
  }
}
