import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-maintenance-page",
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div class="styled-box">Maintenance Page (503)</div> `,
})
export class MaintenancePageComponent {}
