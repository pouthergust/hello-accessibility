import { CommonModule } from "@angular/common";
import { Directive, NgModule } from "@angular/core";
import { DisableControlDirective } from "./disable-control.directive";

@NgModule({
  declarations: [DisableControlDirective],
  imports: [CommonModule],
  exports: [DisableControlDirective]
})
export class DisableControlModule {

}
