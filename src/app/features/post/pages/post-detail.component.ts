import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FetchState, toFetchState } from "@core/utils";
import { Observable } from "rxjs";
import { Post } from "../models";
import { PostService } from "../services";

@Component({
  selector: "app-post-detail",
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <div class="styled-box">
      @let post = post$ | async;
      @let data = post?.data;
      @if (data) {
        <b>[{{ data.id }}] {{ data.title }}</b>
        <p>{{ data.body }}</p>
      } @else if (post?.error) {
        <div class="text-[red]">Error when fetch post content</div>
      } @else {
        <div>loading...</div>
      }
    </div>
    <button class="app-btn-primary" (click)="router.navigateByUrl('/home/post')">Back List</button>
  `,
})
export class PostDetailComponent implements OnInit {
  private readonly postService = inject(PostService);
  readonly id = input<number>(0);
  router = inject(Router);
  post$?: Observable<FetchState<Post>>;

  ngOnInit() {
    this.post$ = this.postService.getPostById(this.id()).pipe(toFetchState());
  }
}
