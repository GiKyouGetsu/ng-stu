import { Input, Directive, HostBinding, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  @Input()
  appMyHighlight: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  onmouseenter() {
    this.el.nativeElement.style.backgroundColor=this.appMyHighlight;
  }
  @HostListener("mouseleave")
  onmouseleave() {
    this.el.nativeElement.style.backgroundColor = "#007bff"
  }

}
