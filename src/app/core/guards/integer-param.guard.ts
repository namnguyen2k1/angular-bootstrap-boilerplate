import { inject } from "@angular/core";
import { CanMatchFn, Route, Router, UrlSegment } from "@angular/router";

export const integerParamGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const router = inject(Router);
  const lastSegment = segments.at(-1)?.path;
  const id = Number(lastSegment);
  const isValid = Number.isInteger(id) && id > 0;

  if (!isValid) {
    return router.parseUrl("/not-found");
  }

  return true;
};
