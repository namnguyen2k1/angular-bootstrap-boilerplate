import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  standalone: true,
  template: `
    <div class="!max-w-[1200px] mx-auto">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
