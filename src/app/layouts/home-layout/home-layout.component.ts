import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { Session } from "@core/models";
import { SessionService } from "@core/services";

@Component({
  selector: "app-home-layout",
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <div class="styled-box">
      <div class="m-[10px] flex gap-[10px]">
        <button (click)="router.navigateByUrl('/home/post')">Post</button>
        <button (click)="router.navigateByUrl('/home/user')">
          <span>User</span>
          @let isClientRole = session.role === "client";
          @if (isClientRole) {
            <span class="ml-[4px] text-[red]">(forbidden)</span>
          }
        </button>
        <b class="ml-auto">Role: [{{ session.role }}]</b>
        <button (click)="logout()">Logout</button>
      </div>
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
