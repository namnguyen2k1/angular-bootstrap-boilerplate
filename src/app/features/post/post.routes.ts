import { Route } from "@angular/router";
import { integerParamGuard } from "@core/guards";

export const productRoutes: Route[] = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/post-listing.component").then((c) => c.PostListingComponent),
  },
  {
    path: ":id",
    canMatch: [integerParamGuard],
    loadComponent: () => import("./pages/post-detail.component").then((c) => c.PostDetailComponent),
  },
];
