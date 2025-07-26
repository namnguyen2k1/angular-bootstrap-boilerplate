import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";

// if (environment.production) {
//   enableProdMode();
//   if (window) {
//     window.console.log = function () {};
//   }
// }

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
