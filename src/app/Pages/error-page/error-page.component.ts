import { Component } from "@angular/core";

@Component({
  selector: "app-error-page",
  template: `
    <main id="main">
      <section id="NoPages">
        <div class="container p-4" style="max-width: 1160px;">
          <div class="row">
            <div class="col col-md-2 d-flex align-items-center">
              <img
                src="assets/Images/error-page.png"
                width="100px"
                alt="Image d'un personnage troublé."
              />
            </div>
            <div class="col">
              <h2>Erreur 404</h2>
              <h3>Page non trouvée ...</h3>
            </div>
          </div>

          <a to="/home" class="btn"
            >Retourner à la page d'accueil<i class="mx-2 bi bi-arrow-right"></i
          ></a>
        </div>
      </section>
    </main>
  `,
  styles: `
  img {
    width:124px;
    margin: auto;
  }
   h2{
    font-size:2em;
    border:none;
    margin: 50px 0px;
  }
  h3{
    font-size:1.4em;
    border:none;
    margin-bottom: 0px;
    color:#384050;
    font-weight: 600;
  }
  .btn{
    padding: 4px 24px;
    width: auto;
  }
  
  `,
})
export class ErrorPageComponent {}
