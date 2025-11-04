import { inject, Injectable } from "@angular/core";
import { catchError, finalize, throwError } from "rxjs";
import { PostApi } from "../apis";
import { Post } from "../models";
import { PostStore } from "./post-store.service";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private readonly postApi = inject(PostApi);
  private readonly postStore = inject(PostStore);

  get postState() {
    return this.postStore.state;
  }

  isExpired() {
    const expired = Date.now() > this.postStore.state().expired;
    if (expired) {
      this.postStore.reset();
    }
    return expired;
  }

  fetchAllPosts() {
    if (!this.isExpired()) {
      console.log("data not expired");
      return;
    }

    this.postStore.setLoading(true);
    this.postApi
      .getAll({ limit: 20 })
      .pipe(
        catchError((error) => {
          console.log("fetch all post", error);
          return throwError(() => error);
        }),
        finalize(() => {
          this.postStore.setLoading(false);
        }),
      )
      .subscribe((data) => {
        const expired = Date.now() + 1 * 60 * 1000;
        this.postStore.setData(data, expired);
      });
  }

  getPostDetailById(id: number) {
    return this.postApi.getById(id);
  }

  createPost(data: Post, loading = true) {
    this.postStore.setLoading(loading);
    this.postApi
      .addPost(data)
      .pipe(
        catchError((error) => {
          console.log("create-post", error);
          return throwError(() => error);
        }),
        finalize(() => {
          this.postStore.setLoading(false);
        }),
      )
      .subscribe((post) => {
        this.postStore.addNewData(post);
      });
  }

  updatePost(id: number, data: Partial<Post>, loading = true) {
    this.postStore.setLoading(loading);
    this.postApi
      .updatePost(id, data)
      .pipe(
        catchError((error) => {
          console.log("update-post", error);
          return throwError(() => error);
        }),
        finalize(() => {
          this.postStore.setLoading(false);
        }),
      )
      .subscribe((post) => {
        this.postStore.updateDataById(id, post);
      });
  }

  deletePostById(id: number, loading = true) {
    this.postStore.setLoading(loading);
    this.postApi
      .deletePost(id)
      .pipe(
        catchError((error) => {
          console.log("delete-post", error);
          return throwError(() => error);
        }),
        finalize(() => {
          this.postStore.setLoading(false);
        }),
      )
      .subscribe(() => {
        this.postStore.deleteDataById(id);
      });
  }
}
