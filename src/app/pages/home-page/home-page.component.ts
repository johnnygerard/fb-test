import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [],
  templateUrl: "./home-page.component.html",
  host: { class: "block" },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
