import { Route } from "@angular/router";

export const orderRoutes: Route[] = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/user-listing.component").then((c) => c.UserListingComponent),
  },
  {
    path: ":id",
    loadComponent: () => import("./pages/user-detail.component").then((c) => c.UserDetailComponent),
  },
];
