import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowDescription]'
})
export class ShowDescriptionDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener(`click`, [`$event`]) onclick(event: MouseEvent) {
    // console.log(event)
    // const description = this.renderer.nextSibling(this.element.nativeElement);
    const description = this.element.nativeElement.nextElementSibling;
    // this.renderer.listen(description, `click`, (e) => {
    //   console.log(e)
    // });
    this.renderer.setProperty(description, `hidden`, !description.hidden);
  }

  @HostListener(`mouseenter`) onMouseenter() {
    this.changeCursor(`pointer`);
  }

  changeCursor(type) {
    this.renderer.setStyle(this.element.nativeElement, `cursor`, type);
  }
}
