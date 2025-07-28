import { Route } from "@angular/router";

export const authRoutes: Route[] = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login",
  },
  {
    path: "login",
    loadComponent: () => import("./pages/login.component").then((c) => c.LoginComponent),
  },
  {
    path: "register",
    loadComponent: () => import("./pages/register.component").then((c) => c.RegisterComponent),
  },
];
