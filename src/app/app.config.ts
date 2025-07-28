import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from "@angular/core";
import { provideRouter, withComponentInputBinding, withViewTransitions } from "@angular/router";
import { errorInterceptor, loggerInterceptor, switchServiceInterceptor } from "@core/interceptors";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(
      routes,
      withViewTransitions(),
      withComponentInputBinding(),
      // ...
    ),
    provideHttpClient(
      withInterceptors(
        [
          switchServiceInterceptor,
          loggerInterceptor,
          errorInterceptor,
          // ...
        ],
        // ...
      ),
    ),
  ],
};
