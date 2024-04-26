import { Injectable } from "@angular/core";
import { Artisan } from "./artisans.model";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ArtisansService {
  Artisans: Artisan[] = [
    {
      id: "1",
      name: "Vallis Bellemare",
      specialty: "Plombier",
      rating: 4,
      location: "Vienne",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "v.bellemare@gmail.com",
      website: "https://plomberie-bellemare.com",
      category: "Bâtiment",
      top: false,
      imageUrl: "assets/Images/artisan-images/Plumber.jpg",
    },
    {
      id: "2",
      name: "Amitee Lécuyer",
      specialty: "Couturier",
      rating: 4.5,
      location: "Annecy",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "a.amitee@hotmail.com",
      website: "https://lecuyer-couture.com",
      category: "Fabrication",
      top: false,
      imageUrl: "assets/Images/artisan-images/Fashion-designer.jpg",
    },
    {
      id: "3",
      name: "Leala Dennis",
      specialty: "Coiffeur",
      rating: 3.8,
      location: "Chambéry",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "l.dennos@hotmail.fr",
      website: "https://coiffure-leala-chambery.fr",
      category: "Services",
      top: false,
      imageUrl: "assets/Images/artisan-images/barber.jpg",
    },
    {
      id: "4",
      name: "Chocolaterie Labbé",
      specialty: "Chocolatier",
      rating: 4.9,
      location: "Grenoble",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "chocolaterie-labbe@gmail.com",
      website: "https://chocolaterie-labbe.fr",
      category: "Alimentation",
      top: true,
      imageUrl: "assets/Images/artisan-images/chocolatier.jpg",
    },
    {
      id: "5",
      name: "Claude Quinn",
      specialty: "Bijoutier",
      rating: 4.2,
      location: "Aix-les-bains",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "claude.quinn@gmail.com",
      website: "",
      category: "Fabrication",
      top: false,
      imageUrl: "assets/Images/artisan-images/Jeweler.jpg",
    },
    {
      id: "6",
      name: "Valérie Laderoute",
      specialty: "Toiletteur",
      rating: 4.5,
      location: "Valence",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "v-laredoute@gmail.com",
      website: "",
      category: "Services",
      top: false,
      imageUrl: "assets/Images/artisan-images/Groomer.jpg",
    },
    {
      id: "7",
      name: "Boutot & fils",
      specialty: "Menuisier",
      rating: 4.7,
      location: "Bourg-en-bresse",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "boutot-menuiserie@gmail.com",
      website: "https://boutot-menuiserie.com",
      category: "Bâtiment",
      top: false,
      imageUrl: "assets/Images/artisan-images/Carpenter.jpg",
    },
    {
      id: "8",
      name: "CM Graphisme",
      specialty: "Webdesign",
      rating: 4.4,
      location: "Valence",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "contact@cm-graphisme.com",
      website: "https://cm-graphisme.com",
      category: "Services",
      top: false,
      imageUrl: "assets/Images/artisan-images/Webdesign.jpg",
    },
    {
      id: "9",
      name: "Orville Salmons",
      specialty: "Chauffagiste",
      rating: 5,
      location: "Evian",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "o-salmons@live.com",
      website: "",
      category: "Bâtiment",
      top: true,

      imageUrl: "assets/Images/artisan-images/Heating-Engineer.jpg",
    },
    {
      id: "10",
      name: "Au pain chaud",
      specialty: "Boulanger",
      rating: 4.8,
      location: "Montélimar",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "aupainchaud@hotmail.com",
      website: "",
      category: "Alimentation",
      top: true,

      imageUrl: "assets/Images/artisan-images/baker.jpg",
    },
    {
      id: "11",
      name: "Boucherie Dumont",
      specialty: "Boucher",
      rating: 4.5,
      location: "Lyon",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "boucherie.dumond@gmail.com",
      website: "",
      category: "Alimentation",
      top: false,
      imageUrl: "assets/Images/artisan-images/Butcher.jpg",
    },
    {
      id: "12",
      name: "Mont Blanc Eléctricité",
      specialty: "Electricien",
      rating: 4.5,
      location: "Chamonix",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "contact@mont-blanc-electricite.com",
      website: "https://mont-blanc-electricite.com",
      category: "Bâtiment",
      top: false,
      imageUrl: "assets/Images/artisan-images/Electrician.jpg",
    },
    {
      id: "13",
      name: "Traiteur Truchon",
      specialty: "Traiteur",
      rating: 4.1,
      location: "Privas",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "contact@truchon-traiteur.fr",
      website: "https://truchon-traiteur.fr",
      category: "Services",
      top: false,
      imageUrl: "assets/Images/artisan-images/Catering.jpg",
    },
    {
      id: "14",
      name: "Le monde des fleurs",
      specialty: "Fleuriste",
      rating: 4.6,
      location: "Annonay",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "contact@le-monde-des-fleurs-annonay.fr",
      website: "https://le-monde-des-fleurs-annonay.fr",
      category: "Services",
      top: false,
      imageUrl: "assets/Images/artisan-images/Florist.jpg",
    },
    {
      id: "15",
      name: "Royden Charbonneau",
      specialty: "Carrossier",
      rating: 3.8,
      location: "Saint-Priest",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "r.charbonneau@gmail.com",
      website: "",
      category: "Services",
      top: false,
      imageUrl: "assets/Images/artisan-images/panel-beater.jpg",
    },
    {
      id: "16",
      name: "Ernest Carignan",
      specialty: "Ferronier",
      rating: 5,
      location: "Le Puy-en-Velay",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "e-carigan@hotmail.com",
      website: "",
      category: "Fabrication",
      top: false,
      imageUrl: "assets/Images/artisan-images/ironworker.jpg",
    },
    {
      id: "17",
      name: "C'est sup'hair",
      specialty: "Coiffeur",
      rating: 4.1,
      location: "Romans-sur-Isère",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      email: "sup-hair@gmail.com",
      website: "https://sup-hair.fr",
      category: "Services",
      top: false,
      imageUrl: "assets/Images/artisan-images/barber.jpg",
    },
  ];

  constructor() {}
  
  // Méthodes de récupération de tous les artisans.
  getAllArtisans(): Artisan[] {
    return this.Artisans;
  }

  // Méthodes de récupération des artisans par id.
  getArtisanById(id: string): Artisan | undefined {
    return this.Artisans.find((artisan) => artisan.id === id);
  }

  // Méthodes de récupération des artisans par termes recherchés.
  searchArtisans(searchTerm: string) {
    if (!searchTerm.trim()) {
      return this.Artisans;
    }

    searchTerm = searchTerm.toLowerCase();
    return this.Artisans.filter(
      (artisan) =>
        artisan.name.toLowerCase().includes(searchTerm) ||
        artisan.specialty.toLowerCase().includes(searchTerm) ||
        artisan.location.toLowerCase().includes(searchTerm)
    );
  }

  // Méthodes de récupération des artisans par catégories.
  filterArtisansByCategory(category: string): Artisan[] {
    if (!category) {
      return [];
    }
    category = category.toLowerCase().trim();
    return this.Artisans.filter(
      (artisan) => artisan.category.toLowerCase() === category
    );
  }

  // Méthode de création d'un tableau des artisans avec des notes définies.
  getArtisansWithRatings(): Observable<Artisan[]> {
    return of(this.Artisans).pipe(
      map((artisans) =>
        artisans.filter(
          (Artisan) => Artisan.rating !== undefined && Artisan.rating !== null
        )
      )
    );
  }
}
