import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <section id="home">
      <div class="container p-4" style="max-width: 1360px; ">
        <h1>Comment trouver mon artisan ?</h1>

        <ol>
          <li>Choisir la catégorie d'artisanat dans le menu.</li>
          <p>
            Pour choisir un artisant selon la catégorie, vous devrez vous rendre
            sur le menu, en haut de la page, et sélectionner une des catégories
            mises en avant. <br />Une liste contenant les fiches des artisans,
            classée par la catégorie que vous avez sélectionner, sera alors
            affichée.
          </p>
          <li>Choisir un artisan.</li>
          <p>
            Pour choisir un artisant de notre site, vous devrez cliquer sur le
            boutton "..."de la fiche d'un artisant.<br />La fiche
          </p>
          <li>Le contacter via le formulaire de contact.</li>
          <p>Pour prendre contacte avec un des artisants du site,</p>
          <li>Une réponse sera apportée sous 48h.</li>
        </ol>
      </div>

      <!-- Product container -->

      <div class="product-container">
        <div class="container">
          <h1 class="text-center m-5 product-h1">Artisans du mois</h1>
          <div class="redLine"></div>
        </div>
      </div>
    </section>
  `,
  styles: `
  li{
    
  }
  ol li {
  background: #cce5ff;
  color: darkblue;
  margin: 5px;
}
  `,
})
export class HomeComponent {}
