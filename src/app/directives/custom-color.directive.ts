import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appCustomColor], appCustomColor'
})
export class CustomColorDirective {
  @Input() message;
  @Input() count;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {
    console.log(this.count);
    this.element.nativeElement.textContent += this.message;
  }

  @Input("appCustomColor") set newColor(color) {
    this.renderer.setStyle(this.element.nativeElement, 'color', color);
  }
}
