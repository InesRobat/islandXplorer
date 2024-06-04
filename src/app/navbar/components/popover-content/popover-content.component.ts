import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-content',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './popover-content.component.html',
  styleUrl: './popover-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverContentComponent implements OnInit {

  @Input() public title!: string;
  @Input() public array!: { src: string; text: string; }[];

  ngOnInit(): void { }

}
