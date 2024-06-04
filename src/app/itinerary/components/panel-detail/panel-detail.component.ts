import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './panel-detail.component.html',
  styleUrl: './panel-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelDetailComponent implements OnInit {

  @Input() public panelTitle!: string;
  @Input() public panelSubtitle!: string;
  @Input() public panelDesc!: string;
  @Input() public panelSrc!: string;

  ngOnInit(): void { }

}
