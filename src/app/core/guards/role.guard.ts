import { inject } from "@angular/core";
import { CanMatchFn, Router } from "@angular/router";
import { SessionService } from "@core/services";

export const roleGuard: CanMatchFn = (route) => {
  const router = inject(Router);
  const roles = route.data?.["roles"];
  const isValid = Array.isArray(roles) && SessionService.isMatchRole(roles);

  if (!isValid) {
    return router.parseUrl("/forbidden");
  }

  return true;
};
