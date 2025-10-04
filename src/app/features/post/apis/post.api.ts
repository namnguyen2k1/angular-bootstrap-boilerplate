import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { API_SERVICE } from "@core/constants";
import { map, Observable } from "rxjs";
import { Post } from "../models";

@Injectable({ providedIn: "root" })
export class PostApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = API_SERVICE.POST;

  getAll({ limit }: { limit: number }) {
    const url = `${this.baseUrl}?_limit=${limit}`;

    return this.http.get<Post[]>(url).pipe(
      map((body) => {
        return body.map((data) => {
          return Post.create(data);
        });
      }),
    );
  }

  getById(id: number) {
    const url = `${this.baseUrl}/${id}`;

    return this.http.get<Post>(url).pipe(
      map((body) => {
        return Post.create(body);
      }),
    );
  }

  addPost(post: Omit<Post, "id">): Observable<Post> {
    const url = `${this.baseUrl}`;

    return this.http.post<Post>(url, post);
  }

  updatePost(id: number, body: Partial<Post>): Observable<Post> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.put<Post>(url, body);
  }

  deletePost(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<void>(url);
  }
}
