import { ChangeDetectionStrategy, Component, inject, input } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../models";

@Component({
  standalone: true,
  selector: "app-user",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @defer (on viewport) {
      @let u = data();
      <div class="card bg-base-200 mb-[16px]">
        <div class="card-body">
          <h2 class="card-title text-warning">[User {{ u.id }}] {{ u.name }}</h2>
          <p>{{ u.phone }}</p>
          <div class="justify-end card-actions">
            <button class="app-btn-primary" (click)="router.navigateByUrl('/home/user/' + u.id)">
              Read more
            </button>
          </div>
        </div>
      </div>
    } @placeholder {
      <div class="h-[200px]"></div>
    }
  `,
})
export class UserComponent {
  router = inject(Router);
  data = input.required<User>();
}
