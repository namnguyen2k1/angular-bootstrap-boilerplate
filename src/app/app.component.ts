import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  standalone: true,
  template: `
    <h1 id="title" class="gradient-text text-center">{{ title }}</h1>
    <div class="!max-w-[1200px] mx-auto">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = "Angular Bootstrap Boilerplate";
}
