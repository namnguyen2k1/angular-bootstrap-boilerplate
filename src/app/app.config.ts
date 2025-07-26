import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from "@angular/core";
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
  withViewTransitions,
} from "@angular/router";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(
      routes,
      withViewTransitions(),
      withPreloading(PreloadAllModules),
      //
    ),
  ],
};
