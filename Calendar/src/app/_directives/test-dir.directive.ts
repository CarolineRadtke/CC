import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTestDir]',
})
export class TestDirDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.innerText += 'hi';
  }

  @Input('appTestDir') appTestDir: string;
}
