import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-not-found-page",
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="styled-box">Not Found Page (404)</div>
    <button class="app-btn-primary" (click)="router.navigateByUrl('/home')">Back Home</button>
  `,
})
export class NotFoundPageComponent {
  router = inject(Router);
}
