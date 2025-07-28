import { inject } from "@angular/core";
import { CanMatchFn, Router } from "@angular/router";
import { SessionService } from "@core/services";

export const authGuard: CanMatchFn = () => {
  const router = inject(Router);
  const isValid = SessionService.isLogIn() && !SessionService.isExpiredSession();

  if (!isValid) {
    return router.parseUrl("/auth/login");
  }

  return true;
};
