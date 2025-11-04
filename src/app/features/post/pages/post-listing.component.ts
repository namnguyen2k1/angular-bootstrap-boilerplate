import { ChangeDetectionStrategy, Component, inject, OnInit, Signal } from "@angular/core";
import { StateType } from "@shared/services/base-store.service";
import { PostComponent } from "../components";
import { PostSubmitEvent } from "../components/post.component";
import { Post } from "../models";
import { PostService } from "../services";

@Component({
  selector: "app-post-list",
  imports: [PostComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <div class="styled-box">
      <div class="divider text-accent">Post Listing Page</div>
      @let state = postState();
      @if (state.error) {
        <div class="text-[red]">Loading posts failed....</div>
      } @else if (state.loading) {
        <span class="loading loading-spinner loading-xl"></span>
      } @else {
        @for (p of state.data; track $index) {
          <app-post [data]="p" (submitEvent)="handlePostItemEvent($event)" />
        } @empty {
          <div class="text-center">No post</div>
        }
      }
    </div>
  `,
})
export class PostListingComponent implements OnInit {
  private readonly postService = inject(PostService);
  protected postState: Signal<StateType<Post>> = this.postService.postState;

  ngOnInit() {
    this.postService.fetchAllPosts();
  }

  protected handlePostItemEvent(event: PostSubmitEvent) {
    switch (event.type) {
      case "delete":
        return this.postService.deletePostById(event.data.id, false);
      case "update":
        return this.postService.updatePost(event.data.id, event.data, false);
    }
  }
}
