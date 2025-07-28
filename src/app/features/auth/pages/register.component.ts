import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="styled-box">Register Page</div>
    <button (click)="router.navigateByUrl('/auth/login')">login</button>
  `,
})
export class RegisterComponent {
  router = inject(Router);
}
