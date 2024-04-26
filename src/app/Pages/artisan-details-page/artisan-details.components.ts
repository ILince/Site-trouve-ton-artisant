import { Component, OnInit } from "@angular/core";
import { ArtisansService } from "../../Services/artisans.service";
import { ActivatedRoute } from "@angular/router";
import { Artisan } from "../../Services/artisans.model";

@Component({
  selector: "app-artisant-details",
  template: `
    <main id="main">
      <!-- Fiche complète des artisans -->
      <section id="Artisan">
        <div *ngIf="artisan" class="container p-4" style="max-width: 1160px;">
          <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6">
              <div class="line"></div>
              <img
                class="card-img mb-5 mb-md-0"
                [src]="artisan.imageUrl"
                alt="Image d'une figurine"
              />
            </div>

            <div class="container col-md-6">
              <h2>{{ artisan.name }}</h2>

              <div class="container  d-flex justify-content-start">
                <h3 class="my-2">Note : {{ artisan.rating }}/5</h3>
                <app-star-rating
                  [rating]="artisan.rating"
                  class="my-2 mx-4 star-rating"
                ></app-star-rating>
              </div>

              <div class="container mb-2">
                <div>
                  <h4>
                    Spécialité : <strong>{{ artisan.specialty }}</strong>
                  </h4>
                  <h4>Localisation : {{ artisan.location }}</h4>

                  <h4>
                    Site internet :
                    <a href="{{ artisan.website }}">{{ artisan.website }}</a>
                  </h4>
                </div>
                <div>
                  <h3 class="mt-4 pt-">À propos</h3>
                  <p>
                    {{ artisan.about }}
                  </p>
                </div>
              </div>
            </div>
            <!-- Formulaire de contact  -->

            <div class="contact col mx-4 container-fluid p-4">
              <form
                class="contact-form validate-form"
                action="mailto:{{ artisan.email }}"
                method="post"
                enctype="text/plain"
              >
                <h3 class="contact-form-title m-4">Contact</h3>
                <div class="container-fluid m-2">
                  <div class="wrap-input100">
                    <input
                      class="input100"
                      type="text"
                      name="name"
                      placeholder="Nom"
                      required
                    />
                  </div>

                  <div class="wrap-input100">
                    <input
                      class="input100"
                      type="text"
                      name="objet"
                      placeholder="Objet"
                      required
                    />
                  </div>
                  <div class="wrap-input100">
                    <textarea
                      class="input100"
                      name="message"
                      placeholder="Votre message ..."
                      required
                    ></textarea>
                  </div>
                  <input type="submit" class="btn" value="Envoyer" />
                </div>
              </form>
            </div>
            <!-- Formulaire de contact end  -->
          </div>
        </div>
      </section>
    </main>
  `,
  styles: `
  /*CARD STYLE*/

  .star-rating{
    font-size: 1.3em;
  }
  .line{
    border: solid 5px #cd2c2e;
    width:15%;
    margin:  32px 0px;
  }
  .card-img{
    border-radius: 3px;
    border: 0.1rem solid #b7d1df;
  }
  h1{
    font-size:1.6em;
    font-weight: 800;
    margin: 18px 0px;
    padding:12px;
    text-align: center;
    border-bottom: 10px solid #cce5ff;
  }
  h3{
    font-size:1.4em;
    border:none;
    margin-bottom: 0px;
  }
  h4{
    font-size:1.2em;
    margin:18px;
    
  }

  /*CONTACT STYLE*/
  
  .contact {
    background: #f1f8fc ;
    border-radius: 10px;
    margin:100px 0px;
  }
  .wrap-input100 {
    width: 100%;
    position: relative;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    margin-bottom: 17px;
  }
  .contact-form-title{
    font-size: 30px;
    line-height: 1.2;
    padding-bottom: 30px;
    border-bottom: solid 3px;
    text-align: center;
  }
  .contact100-form {
    width: 100%;
  }
  textarea.input100 {
    min-height: 199px;
    padding: 19px 20px 0 23px;
  }
  .input100 {
    display: block;
    width: 100%;
    background: transparent;
    font-size: 15px;
    color: #1b3815;
    line-height: 4;
    height: 62px;
    padding: 0 20px 0 23px;
  }
  input {
    outline: none;
    border: none;
  }
`,
})
export class ArtisantDetailsComponent implements OnInit {
  artisan: Artisan | undefined;

  constructor(
    private route: ActivatedRoute,
    private ArtisansService: ArtisansService
  ) {}

  // Exécution de la methode à l'initialisation du composant.
  ngOnInit(): void {
    // Récupération l'id paramétré dans l'URL.
    const ArtisanId = this.route.snapshot.paramMap.get("id");
    // vérification de l'id, et récupération des data de l'artisan correspondant.
    if (ArtisanId !== null) {
      this.artisan = this.ArtisansService.getArtisanById(ArtisanId);
    }
  }
}
