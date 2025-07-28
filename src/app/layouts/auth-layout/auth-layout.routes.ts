import { Route } from "@angular/router";
import { AuthLayoutComponent } from "./auth-layout.component";

export const authLayoutRoutes: Route[] = [
  {
    path: "",
    component: AuthLayoutComponent,
    loadChildren: () => import("../../features/auth/auth.routes").then((r) => r.authRoutes),
  },
];
