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
      <div class="styled-box !min-h-full">
        <h3 class="underline">[Post {{ p.id }}] {{ p.title }}</h3>
        <div>{{ p.body }}</div>
        <button (click)="router.navigateByUrl('/home/post/' + p.id)">Read more</button>
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
