import { Injectable } from "@angular/core";
import { BaseStore } from "@shared/services/base-store.service";
import { Post } from "../models";

@Injectable({
  providedIn: "root",
})
export class PostStore extends BaseStore<Post> {
  // override methods...
}
