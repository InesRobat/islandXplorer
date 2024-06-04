import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverComponent implements OnInit {

  @Input() public imgSrc!: string;

  public isActive = false;

  ngOnInit(): void { }

  toggle() {
    this.isActive = !this.isActive;
  }

}
