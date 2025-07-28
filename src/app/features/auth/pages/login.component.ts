import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "@core/services";

@Component({
  selector: "app-login",
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="styled-box">Login Page</div>
    <div class="m-[10px] flex gap-[10px]">
      <button (click)="login('client')">Login</button>
      <button (click)="router.navigateByUrl('/auth/register')">Register</button>
      <button (click)="login('admin')">Admin Login</button>
    </div>
  `,
})
export class LoginComponent {
  router = inject(Router);

  login(role?: string) {
    SessionService.login(role ?? "guest");
    this.router.navigateByUrl("/home");
  }
}
