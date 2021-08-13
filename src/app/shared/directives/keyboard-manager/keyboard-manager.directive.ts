import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';
import { ContentChildren, QueryList } from "@angular/core";
import { HostListener } from "@angular/core";
import { Directive } from "@angular/core";

@Directive ({
  selector: '[appKm]'
})
export class KeyboardManagerDirective {

  @ContentChildren(KeyboardManagedItemDirective) public items!: QueryList<KeyboardManagedItemDirective>

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {

    switch (event.key) {

      case 'ArrowUp':
        this.moveFocus(ArrowDirection.right).focus()
        console.log('up')
        break;

      case 'ArrowDown':
        console.log('down')
        this.moveFocus(ArrowDirection.left).focus()
      break;

      case 'ArrowLeft':
        console.log('left')
        this.moveFocus(ArrowDirection.left).focus()
      break;

      case 'ArrowRight':
        console.log('right')
        this.moveFocus(ArrowDirection.right).focus()
      break;
    }
  }

  public moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective {
    const items = this.items.toArray()
    const currentSelectedIndex = items.findIndex(item => item.isFocused())
    const targetElementFocus = items[currentSelectedIndex + direction]

    if (targetElementFocus) {
      return targetElementFocus
    }

    return direction === ArrowDirection.left ? items[items.length - 1] : items[0]
  }
}

enum ArrowDirection {
  left = -1,
  right = 1
}
