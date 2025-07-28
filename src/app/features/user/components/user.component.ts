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
      <div class="styled-box !min-h-full">
        <h3 class="underline">[User {{ u.id }}] {{ u.name }}</h3>
        <div>{{ u.phone }}</div>
        <button (click)="router.navigateByUrl('/home/user/' + u.id)">Read more</button>
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
