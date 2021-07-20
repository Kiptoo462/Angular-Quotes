import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private el: ElementRef) { }
  highlightElement() {
    this.el.nativeElement.style.backgroundColor = 'blue';
    this.el.nativeElement.style.color = 'black';
  }
  ngOnInit() {
    this.highlightElement();
  }
}
