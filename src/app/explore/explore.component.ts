import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild, type OnInit } from '@angular/core';
import { ASSET } from './asset';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExploreComponent implements OnInit {

  @ViewChild('scrollWrapper') public scrollWrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('textTop') public textTop!: ElementRef<HTMLDivElement>;
  @ViewChild('textBottom') public textBottom!: ElementRef<HTMLDivElement>;

  public assetImages = ASSET;

  ngOnInit(): void { }

  @HostListener('wheel', ['$event'])
  public onWheel(event: WheelEvent): void {

    if (window.innerWidth >= 991) {
      this.scrollWrapper.nativeElement.scrollLeft -= (event.deltaY * 2);
      this.textTop.nativeElement.style.transform = `translateY(${-this.scrollWrapper.nativeElement.scrollLeft / 2}px)`;
      this.textBottom.nativeElement.style.transform = `translateY(${this.scrollWrapper.nativeElement.scrollLeft / 2}px)`;

      this.textTop.nativeElement.style.opacity = `${1 - this.scrollWrapper.nativeElement.scrollLeft / 100}`;
      this.textBottom.nativeElement.style.opacity = `${1 - this.scrollWrapper.nativeElement.scrollLeft / 100}`;
    } else {
      this.scrollWrapper.nativeElement.scrollTop -= (event.deltaY * 2);
      this.textTop.nativeElement.style.transform = `translateY(${-this.scrollWrapper.nativeElement.scrollTop / 2}px)`;
      this.textBottom.nativeElement.style.transform = `translateY(${this.scrollWrapper.nativeElement.scrollTop / 2}px)`;
      this.textTop.nativeElement.style.opacity = `${1 - this.scrollWrapper.nativeElement.scrollTop / 100}`;
      this.textBottom.nativeElement.style.opacity = `${1 - this.scrollWrapper.nativeElement.scrollTop / 100}`;
    }

    event.preventDefault();
  }
}
