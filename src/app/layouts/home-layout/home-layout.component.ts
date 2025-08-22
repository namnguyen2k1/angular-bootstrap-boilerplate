import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { Session } from "@core/models";
import { SessionService } from "@core/services";
import { IconModule } from "@shared/icons/icon.module";

@Component({
  selector: "app-home-layout",
  imports: [RouterOutlet, IconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <div class="styled-box !border-none">
      <div class="m-[10px] flex gap-[10px]">
        <button class="app-btn-accent" (click)="router.navigateByUrl('/home/post')">Post</button>
        <button class="app-btn-accent" (click)="router.navigateByUrl('/home/user')">
          <span>User</span>
          @let isClientRole = session.role === "client";
          @if (isClientRole) {
            <fa-icon icon="ban" class="text-[red]"></fa-icon>
          }
        </button>
        <div class="ml-auto badge badge-dash badge-accent">
          <fa-icon icon="circle-user"></fa-icon>
          <span>{{ session.role }}</span>
        </div>
        <button class="app-btn-primary" (click)="logout()">
          <span>Logout</span>
          <fa-icon icon="right-from-bracket"></fa-icon>
        </button>
      </div>
      <div class="divider"></div>
      <router-outlet />
    </div>
  `,
})
export class HomeLayoutComponent implements OnInit {
  router = inject(Router);
  session!: Session;

  ngOnInit() {
    this.session = SessionService.getSession();
  }

  logout() {
    SessionService.logout();
    this.router.navigateByUrl("/auth/login");
  }
}
