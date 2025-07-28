import { inject } from "@angular/core";
import { CanMatchFn, Router } from "@angular/router";
import { SessionService } from "@core/services";

export const noAuthGuard: CanMatchFn = () => {
  const router = inject(Router);

  if (SessionService.isLogIn()) {
    return router.parseUrl("/home");
  }

  return true;
};
