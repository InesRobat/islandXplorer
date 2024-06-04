import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChild, ViewChildren, type OnInit } from '@angular/core';
import { PanelDetailComponent } from './components/panel-detail/panel-detail.component';
import { ITINERARY_MENU } from './itinerary';

@Component({
  selector: 'app-itinerary',
  standalone: true,
  imports: [
    CommonModule,
    PanelDetailComponent,
  ],
  templateUrl: './itinerary.component.html',
  styleUrl: './itinerary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItineraryComponent implements OnInit {

  @ViewChildren('elements') public elements!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('scrollWrapper') public scrollWrapper!: ElementRef<HTMLDivElement>;

  public itinerayMenu = ITINERARY_MENU;

  ngOnInit(): void { }

  // @HostListener('wheel', ['$event'])
  public onWheel(event: WheelEvent): void {
    if (window.innerWidth >= 991) {
      this.scrollWrapper.nativeElement.scrollLeft -= (event.deltaY * 2);
    } else {
      this.scrollWrapper.nativeElement.scrollTop -= (event.deltaY * 2);
    }

    event.stopPropagation();
  }

  open(el: any) {
    el.classList.toggle('active');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });

    this.elements.forEach((element) => {
      if (element.nativeElement !== el) {
        element.nativeElement.classList.remove('active');
      }
    });
  }
}
