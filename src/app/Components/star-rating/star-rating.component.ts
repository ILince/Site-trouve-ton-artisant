import { Component, Input } from "@angular/core";

@Component({
  selector: "app-star-rating",
  template: `
    <div class="star-rating">
      <div>
        <i class="bi bi-star-fill" *ngFor="let star of stars"></i>
        <i class="bi bi-star-half" *ngIf="rating % 1 !== 0"></i>
      </div>
    </div>
  `,

  styles: `
  .star-rating {
  font-size: 0.9em;
  color: #0074c7;
}`,
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  get stars() {
    return Array(Math.floor(this.rating)).fill(0);
  }
}
