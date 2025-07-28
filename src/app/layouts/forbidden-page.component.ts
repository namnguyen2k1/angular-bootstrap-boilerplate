import { Location } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";

@Component({
  selector: "app-forbidden-page",
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="styled-box">Forbidden Page (403)</div>
    <button (click)="location.back()">Back</button>
  `,
})
export class ForbiddenPageComponent {
  location = inject(Location);
}
