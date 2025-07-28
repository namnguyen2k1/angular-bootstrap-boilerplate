import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, map, of } from "rxjs";
import { PostApi } from "../apis";
import { Post } from "../models";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private readonly PostApi = inject(PostApi);
  private _posts$ = new BehaviorSubject<{
    data: Post[];
    expired: number;
  }>({ data: [], expired: 0 });

  get posts() {
    return this._posts$.value.data;
  }

  clearCache() {
    this._posts$.next({ data: [], expired: 0 });
  }

  isExpired() {
    const expired = Date.now() > this._posts$.value.expired;
    if (expired) {
      this.clearCache();
    }
    return expired;
  }

  getAllPosts() {
    if (this.posts.length && !this.isExpired()) {
      return of(this.posts);
    }

    return this.PostApi.getAll({ limit: 100 }).pipe(
      map((data) => {
        this._posts$.next({
          data,
          expired: Date.now() + 3 * 60 * 1000, // expires in 3 minutes
        });
        return data;
      }),
    );
  }

  getPostById(id: number) {
    return this.PostApi.getById(id);
  }
}
