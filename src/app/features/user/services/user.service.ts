import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, map, of } from "rxjs";
import { UserApi } from "../apis";
import { User } from "../models";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private readonly userApi = inject(UserApi);
  private _users$ = new BehaviorSubject<{
    data: User[];
    expired: number;
  }>({ data: [], expired: 0 });

  get users() {
    return this._users$.value.data;
  }

  clearCache() {
    this._users$.next({ data: [], expired: 0 });
  }

  isExpired() {
    const expired = Date.now() > this._users$.value.expired;
    if (expired) {
      this.clearCache();
    }
    return expired;
  }

  getAllUsers() {
    if (this.users.length && !this.isExpired()) {
      return of(this.users);
    }

    return this.userApi.getAll({ limit: 100 }).pipe(
      map((data) => {
        this._users$.next({
          data,
          expired: Date.now() + 3 * 60 * 1000, // expires in 3 minutes
        });
        return data;
      }),
    );
  }

  getUserById(id: number) {
    return this.userApi.getById(id);
  }
}
