import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { toFetchState } from "@core/utils";
import { PostComponent } from "../components";
import { PostService } from "../services";

@Component({
  selector: "app-post-list",
  imports: [AsyncPipe, PostComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <div class="styled-box">
      <div>Post Listing Page</div>
      @let posts = posts$ | async;
      @let data = posts?.data;
      @if (data) {
        @for (p of data; track $index) {
          <app-post [data]="p" />
        } @empty {
          <div class="text-center">No post</div>
        }
      } @else if (posts?.error) {
        <div class="text-[red]">Loading posts failed....</div>
      } @else {
        <div class="text-center">Loading...</div>
      }
    </div>
  `,
})
export class PostListingComponent {
  private readonly postService = inject(PostService);
  protected posts$ = this.postService.getAllPosts().pipe(toFetchState());
}
