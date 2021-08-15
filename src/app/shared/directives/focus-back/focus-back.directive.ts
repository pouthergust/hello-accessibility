import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusBack]'
})
export class FocusBackDirective implements OnInit, OnDestroy {

  private lastFocusedElement!: any

  public ngOnInit(): void {
    this.lastFocusedElement = document.activeElement
  }

  ngOnDestroy(): void {
    if (this.lastFocusedElement) {
      (this.lastFocusedElement as HTMLElement).focus()
    }
  }
}
