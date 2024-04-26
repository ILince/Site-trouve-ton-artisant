import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  template: `
    <nav
      class="navbar navbar-expand-lg navbar-light justify-content-between p-2"
    >
      <div class="container-fluid" style="max-width: 1400px;">
        <!-- Logo/lien vers la page home -->
        <div class="logo m-2">
          <a routerLink="/">
            <img
              alt="Trouve ton artisan ! Avec la région Auvergne-Rhône-Alpes."
              src="assets/Images/Logo.png"
              width="230"
            />
          </a>
        </div>

        <!-- Nav Router Links -->

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" routerLink="/">Accueil</a>
            </li>
            <!-- List des liens sélecteurs de catégorie -->
            <li class="nav-item">
              <a
                (click)="selectCategory('Bâtiment')"
                class="nav-link"
                style="cursor: pointer;"
                >Bâtiment</a
              >
            </li>
            <li class="nav-item">
              <a
                (click)="selectCategory('Services')"
                class="nav-link"
                style="cursor: pointer;"
                >Services</a
              >
            </li>
            <li class="nav-item">
              <a
                (click)="selectCategory('Fabrication')"
                class="nav-link"
                style="cursor: pointer;"
                >Fabrication</a
              >
            </li>
            <li class="nav-item">
              <a
                (click)="selectCategory('Alimentation')"
                class="nav-link"
                style="cursor: pointer;"
                >Alimentation</a
              >
            </li>
            <!-- List des liens sélecteurs de catégorie end -->
          </ul>
        </div>
        <div>
          <!-- Bar de recherche -->
          <input
            class="searchBar"
            style="width: 210px;"
            type="text"
            placeholder="Rechercher ..."
            [(ngModel)]="searchTerm"
            (input)="search()"
          />
        </div>
        <!-- Toggle Nav button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  `,
  styles: `
    nav {
      box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.0793474);
      background: #fff;
    }
    .nav-link {
      font-size: 1.2em;
      transition: color 0.3s;
      color: #353d4d;
      padding-right: 3rem;
      cursor: pointer;
    }
    .nav-link:hover{
      text-decoration-line: underline;
    text-decoration-color: #353d4d;
    }
    .searchBar{
      margin: 0;
      padding-right: 6rem;
      border-top: none;
      border-left: none;
      transition: border-color .3s;
      border-color: #0074c7;
    }
    .searchBar:focus{
      outline: .2rem solid #eec220;
    }
  `,
})
export class HeaderComponent {
  // Définition de l'événement de sortie.
  @Output() categorySelected = new EventEmitter<string>();

  // Stockage du terme de recherche saisit  par l'utilisateur.
  searchTerm: string = "";

  constructor(private router: Router) {}

  // Émission de l'événement défini avec la catégorie sélectionnée
  selectCategory(category: string): void {
    this.categorySelected.emit(category);

    // Lancement d'une navigation vers une autre page avec la catégorie sélectionnée en paramètre de requête.
    this.navigateToArtisansList({ category });
  }
  // Vérification du terme recherché (défini et non vide).
  search(): void {
    const searchQuery = this.searchTerm ? this.searchTerm.trim() : "";

    // Lancement d'une navigation vers une autre page en passant le terme de recherche en paramètre de requête
    this.navigateToArtisansList({ search: searchQuery });
  }
  // Méthode permettant de naviguer vers la page (/artisans-list) avec les paramètres de requête incluse dans l'URL.
  private navigateToArtisansList(queryParams: { [key: string]: string }): void {
    this.router.navigate(["/artisans-list"], { queryParams });
  }
}
