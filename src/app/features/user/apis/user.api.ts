import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { API_SERVICE } from "@core/constants";
import { User } from "../models";

@Injectable({ providedIn: "root" })
export class UserApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = API_SERVICE.USER;

  getAll({ limit }: { limit: number }) {
    return this.http.get<User[]>(`${this.baseUrl}?_limit=${limit}`);
  }

  getById(id: number) {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }
}
