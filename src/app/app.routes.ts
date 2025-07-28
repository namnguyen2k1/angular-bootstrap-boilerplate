import { Routes } from "@angular/router";
import { authGuard } from "@core/guards";
import { noAuthGuard } from "@core/guards/no-auth.guard";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    canMatch: [authGuard],
    loadChildren: () =>
      import("./layouts/home-layout/home-layout.routes").then((r) => r.homeLayoutRoutes),
  },
  {
    path: "auth",
    canMatch: [noAuthGuard],
    loadChildren: () =>
      import("./layouts/auth-layout/auth-layout.routes").then((r) => r.authLayoutRoutes),
  },
  {
    path: "maintenance",
    loadComponent: () =>
      import("./layouts/maintenance-page.component").then((c) => c.MaintenancePageComponent),
  },
  {
    path: "forbidden",
    loadComponent: () =>
      import("./layouts/forbidden-page.component").then((c) => c.ForbiddenPageComponent),
  },
  {
    path: "**",
    loadComponent: () =>
      import("./layouts/not-found-page.component").then((c) => c.NotFoundPageComponent),
  },
];
