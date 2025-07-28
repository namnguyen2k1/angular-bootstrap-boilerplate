import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { toFetchState } from "@core/utils";
import { UserComponent } from "../components";
import { UserService } from "../services";

@Component({
  selector: "app-user-list",
  imports: [AsyncPipe, UserComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <div class="styled-box">
      <div>user Listing Page</div>
      @let users = users$ | async;
      @let data = users?.data;
      @if (data) {
        @for (p of data; track $index) {
          <app-user [data]="p" />
        } @empty {
          <div class="text-center">No user</div>
        }
      } @else if (users?.error) {
        <div class="text-[red]">Loading users failed....</div>
      } @else {
        <div class="text-center">Loading...</div>
      }
    </div>
  `,
})
export class UserListingComponent {
  private readonly userService = inject(UserService);
  protected users$ = this.userService.getAllUsers().pipe(toFetchState());
}
