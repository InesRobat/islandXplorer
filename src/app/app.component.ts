import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './route.animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'IslandXplorer';

  public prepareRoute(outlet: RouterOutlet) {
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['data'];
  }
}
