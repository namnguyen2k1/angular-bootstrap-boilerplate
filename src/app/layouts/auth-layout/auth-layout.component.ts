import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-auth-layout",
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <div class="styled-box">
      <div class="text-center">Get started with Angular</div>
      <router-outlet />
    </div>
  `,
})
export class AuthLayoutComponent {}
