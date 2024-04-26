import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer class="text-light p-4" style="background-color: #0074c7 ">
      <!-- Logo -->
      <div class="container p-4" style="max-width: 1400px;">
        <a routerLink="/">
          <img
            alt="Trouve ton artiosant !. Avec la région Auvergne-Rhône-Alpes."
            src="assets/Images/Logo-white.png"
            width="230"
          />
        </a>
        <p class="mt-4">Conseil régional<br />Auvergne-Rhône-Alpes</p>
        <!-- Contact -->
        <div class="p-2">
          <div>
            <div>
              <div>
                <h3><strong>Lyon</strong></h3>
                <p>
                  <span
                    >101 cours Charlemagne<br />
                    CS 20033<br />
                    69269 LYON CEDEX 02<br />
                    France<br />
                    Ouvert de 8h15 à 17h du lundi au vendredi
                  </span>
                </p>
                <p>
                  <span
                    ><a href="tel:33426734000">+33 (0)4 26 73 40 00</a> De 8h30
                    à 17h du lundi au vendredi</span
                  ><span
                    >Trams T1 et T2 - Arrêt Hôtel de Région - Montrochet</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Links -->
        <div class="container ">
          <div class="row d-flex justify-content-center p-2 p-2">
            <hr />
            <div class="col-sm fitMentions">
              <a href="">Mentions légales</a>
            </div>
            <div class="col-sm fitMentions">
              <a href="">Données personnelles</a>
            </div>
            <div class="col-sm fitMentions">
              <a href="">Accessibilité : partiellement conforme</a>
            </div>
            <div class="col-sm fitMentions">
              <a href="">Presse</a>
            </div>
            <div class="col-sm fitMentions">
              <a href="">Marchés publics</a>
            </div>
            <div class="col-sm fitMentions">
              <a href="">Venir à la Région</a>
            </div>
            <div class="col-sm fitMentions">
              <a href="">Contacts</a>
            </div>
            <!-- Cookies button -->
            <div class="d-flex justify-content-center m-2 p-3">
              <button type="button">Gestion des cookies</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: `

  /* Mentions links */
  h3{
    color:white;
    border:none;
    font-size:1.5em;
    margin:10px 0px
  }
  a{
    text-decoration: none;
    color:#fcfcfd;
  }
  a:hover{
    text-decoration-line: underline;
    text-decoration-color: #fcfcfd;
  }
  .fitMentions{
    min-width: fit-content;
    max-width: fit-content;
  }
  /* Cookies button */
  button{
    color:#fcfcfd;
    border: none;
    background: none;
  }
  button:hover{
    text-decoration-line: underline;
    text-decoration-color: #fcfcfd;
  }
  `,
})
export class FooterComponent {}
