import { ChangeDetectionStrategy, Component, inject, input } from "@angular/core";
import { Router } from "@angular/router";
import { Post } from "../models";

@Component({
  standalone: true,
  selector: "app-post",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @defer (on viewport) {
      @let p = data();
      <div class="card bg-base-200 mb-[16px]">
        <div class="card-body">
          <h2 class="card-title text-warning">[Post {{ p.id }}] {{ p.title }}</h2>
          <p>{{ p.body }}</p>
          <div class="justify-end card-actions">
            <button class="app-btn-primary" (click)="router.navigateByUrl('/home/post/' + p.id)">
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
export class PostComponent {
  router = inject(Router);
  data = input.required<Post>();
}
