import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchTerm: string = "";

  constructor() {}
// Définition du terme recherché.
  setSearchTerm(term: string) {
    this.searchTerm = term;
  }
// Récupération du terme de recherché.
  getSearchTerm(): string {
    return this.searchTerm;
  }
}
