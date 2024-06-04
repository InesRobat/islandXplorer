import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { PopoverComponent } from './components/popover/popover.component';
import { RouterLink } from '@angular/router';
import { PopoverContentComponent } from './components/popover-content/popover-content.component';
import { TIME_INFO, WEATHER_INFO } from './popover';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    PopoverComponent,
    RouterLink,
    PopoverContentComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {

  public weatherInfo = WEATHER_INFO;
  public timeInfo = TIME_INFO;

  ngOnInit(): void { }

}
