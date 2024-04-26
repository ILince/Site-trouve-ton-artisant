import { Component } from "@angular/core";
import { SearchService } from "./Services/search.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-root",
  template: `
    <!-- header -->
    <app-header 
      (searchEvent)="handleSearch($event)"
      (categorySelected)="handleCategorySelected($event)">
    </app-header>
    <!-- main -->
    <router-outlet></router-outlet>
    

    <!-- Footer -->
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  title = "ng-artisant-app";
  
  constructor(
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  handleSearch(searchTerm: any) {
    // Enregistrer le terme de recherche dans le service de recherche partagé
    this.searchService.setSearchTerm(searchTerm);
  }

  handleCategorySelected(category: string): void {
    // Filtrer les artisans par la catégorie sélectionnée
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: category },
      queryParamsHandling: "merge",
    });
  }
}