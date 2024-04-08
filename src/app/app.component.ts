import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!-- header -->
    <app-header></app-header>

    <!-- main -->
    <router-outlet></router-outlet>

    <!-- Footer -->
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  title = "ng-artisant-app";
}
