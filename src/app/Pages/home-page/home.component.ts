import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <main id="main">
      <!-- Section "Comment trouver mon artisans/home"  -->

      <section id="home">
        <h2 class="text-center">Comment trouver mon artisan ?</h2>

        <div class="container px-4" style="max-width: 1400px;">
          <ol>
            <li>
              <div class="redline"></div>
              <h3>Choisir la catégorie d'artisanat dans le menu.</h3>
              <p>
                Pour choisir un artisan selon son domaine, vous devrez vous
                rendre sur le <strong>menu, en haut de la page</strong>, et
                sélectionnée, une des
                <strong>catégories mises en avant</strong> ( Bâtiment, Services,
                Fabrication, Alimentation).
              </p>

              <p>
                <strong>Une liste </strong>contenant les fiches des
                artisans,<strong> classée par la catégorie</strong>
                que vous avez sélectionner, sera alors affichée.
              </p>
            </li>

            <li>
              <div class="redline"></div>
              <h3>Choisir un artisan.</h3>
              <p>
                Pour choisir un artisan de notre site, vous devrez cliquer sur
                <strong>le bouton bleu "Voir plus"</strong> qui se situe
                <strong>en bas de chaque fiche</strong> des artisans de la
                liste.
              </p>
              <p>
                <strong>La fiche complète</strong> de l'artisan choisi s'ouvrira
                à ce moment-là.
              </p>
            </li>

            <li>
              <div class="redline"></div>
              <h3>Le contacter via le formulaire de contact.</h3>
              <p>
                Une fois votre artisan choisi vous pouvez prendre contact avec
                celui-ci, pour cela il vous faudra
                <strong>remplir le formulaire de contact</strong> se situant sur
                la <strong>fiche complète de l'artisan </strong>(voir étapes 2).
              </p>
              <p>
                Après avoir complètement rempli le formulaire de contact, il
                vous suffira de cliquer sur le
                <strong>bouton "Envoyer"</strong>. Un e-mail sera directement
                transmis à l'artisan que vous aurez choisi.
              </p>
            </li>

            <li>
              <div class="redline"></div>
              <h3>Une réponse sera apportée sous 48h.</h3>
              <p>
                Après avoir bien
                <strong>rempli et envoyé le formulaire de contact</strong> (voir
                étapes 3), vous recevrez une réponse de nos artisans dans un
                <strong>délai de 48 heures</strong>.
              </p>
              <p>
                Si vous ne recevez pas de response sous ces délais, veuillez
                <strong>nous contacter avec les coordonees</strong> inscrites en
                bas de cette page.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <!-- section Artisans du mois  -->
      <section id="topArtisans">
        <h2 class="text-center title">Nos artisans du mois !</h2>
        <!-- top artisans card container -->

        <div class="container p-4" style="max-width: 1400px;">
          <app-artisans-of-the-month></app-artisans-of-the-month>
        </div>
      </section>
    </main>
  `,

  styles: `
  .redline {
    background-color:#cd2c2e;
    width:50px;
    height: 6px;
    margin: 50px 20px;
  }
  ol li {
    color: #00497c;
    margin: 10px 0px;
    padding: 20px 0px;
    font-size:2em;
    font-weight: 800;
  }
  h2{
    font-size: 2em;
    font-weight: 800;
    margin: 50px 0px;
    padding-top:80px;
    text-transform: uppercase;
  }
  h3{
    border-bottom: none;
    background-color: #f1f8fc;
  }
  ol li p{
    padding: 10px 30px;
    font-size: 0.7em;
    color:black;
    font-weight: 400;
  }
  @media (max-width: 1250px) { 
    ol li p{
      padding: 0px;
    }
  }
  `,
})
export class HomeComponent {}
