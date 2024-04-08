import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <nav
      class="navbar navbar-expand-lg navbar-light justify-content-between p-2"
    >
      <!-- Loggo -->
      <div class="container-fluid" style="max-width: 1360px;">
        <div class="logo m-2">
          <a routerLink="/">
            <img
              alt="Trouve ton artiosant !. Avec la région Auvergne-Rhône-Alpes."
              src="assets/Images/Logo.png"
              width="230"
            />
          </a>
        </div>

        <!-- Nav Router Links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" routerLink="/"
                >Accueil
              </a>
            </li> 

            <li class="nav-item">
              <a class="nav-link" routerLink="/Contact">Bâtiment</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/About">Services</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" routerLink="/About">Fabrication</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/About">Alimentation</a>
            </li>
          </ul>
        </div>
        <div>
          <input
            class="form-control"
            id="search-text"
            aria-describedby="search-text"
            placeholder="Recherche ..."
          />
        </div>
        <!-- toggle Nav button -->
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
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.459);
  background: #fff;
  box-shadow: 0 0.2rem 0.6rem rgba(0,0,0,.0793474);
  
    
}


a{
  transition:color .3s;
  color:#353d4d;
  padding-right: 3rem;
}




`,
})
export class HeaderComponent { }
