import { Route } from "@angular/router";
import { roleGuard } from "@core/guards";
import { HomeLayoutComponent } from "./home-layout.component";

export const homeLayoutRoutes: Route[] = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "post",
      },
      {
        path: "post",
        loadChildren: () => import("../../features/post/post.routes").then((r) => r.productRoutes),
      },
      {
        path: "user",
        canMatch: [roleGuard],
        data: { roles: ["admin"] },
        loadChildren: () => import("../../features/user/user.routes").then((r) => r.orderRoutes),
      },
    ],
  },
];
