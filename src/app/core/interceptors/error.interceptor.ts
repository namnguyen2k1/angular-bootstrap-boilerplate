import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

function logError({ error, request }: { error: HttpErrorResponse; request: HttpRequest<unknown> }) {
  const info = {
    url: request.urlWithParams,
    ok: error.ok,
    status: error.status,
    statusText: error.statusText,
    type: error.type,
    name: error.name,
    message: error.message,
  };
  console.error(`[HTTP-ERROR] ${info.statusText} ${info.status}`, info);
}

export const errorInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const router = inject(Router);

  const handleError = (error: HttpErrorResponse): void => {
    switch (error.status) {
      case 0: {
        if (!navigator.onLine) {
          console.log("offline...");
        } else {
          console.log("maybe CORS error...");
        }
        break;
      }
      case 401:
        logError({ request, error });
        router.navigateByUrl("/auth/login");
        break;
      case 403:
        logError({ request, error });
        router.navigateByUrl("/forbidden");
        break;
      case 503:
        logError({ request, error });
        router.navigateByUrl("/maintenance");
        break;
      default:
        logError({ request, error });
        break;
    }
  };

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      handleError(error);
      return throwError(() => error);
    }),
  );
};
