import { NgModule } from "@angular/core";
import { FaConfig, FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faBan,
  faCircle,
  faCircleUser,
  faHome,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconModule {
  constructor(library: FaIconLibrary, faConfig: FaConfig) {
    library.addIcons(faHome, faCircleUser, faBan, faRightFromBracket);
    faConfig.fallbackIcon = faCircle;
  }
}
