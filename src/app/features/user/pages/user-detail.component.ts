import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FetchState, toFetchState } from "@core/utils";
import { Observable } from "rxjs";
import { User } from "../models";
import { UserService } from "../services";

@Component({
  selector: "app-user-detail",
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <div class="styled-box">
      @let user = user$ | async;
      @let data = user?.data;
      @if (data) {
        <b>[{{ data.id }}] {{ data.name }}</b>
        <p>{{ data.phone }}</p>
      } @else if (user?.error) {
        <div class="text-[red]">Error when fetch user content</div>
      } @else {
        <div>loading...</div>
      }
    </div>
    <button class="app-btn-primary" (click)="router.navigateByUrl('/home/user')">Back List</button>
  `,
})
export class UserDetailComponent implements OnInit {
  private readonly userService = inject(UserService);
  readonly id = input<number>(0);
  router = inject(Router);
  user$?: Observable<FetchState<User>>;

  ngOnInit() {
    this.user$ = this.userService.getUserById(this.id()).pipe(toFetchState());
  }
}
