import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { API_SERVICE } from "@core/constants";
import { Post } from "../models";

@Injectable({ providedIn: "root" })
export class PostApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = API_SERVICE.POST;

  getAll({ limit }: { limit: number }) {
    return this.http.get<Post[]>(`${this.baseUrl}?_limit=${limit}`);
  }

  getById(id: number) {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }
}
