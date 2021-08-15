import { FocusBackModule } from './../../directives/focus-back/focus-back.module';
import { FocusTrapModule } from './../../directives/focus-trap/focus-trap.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ModalService } from "../../services/modal/modal.service";
import { ModalComponent } from "./modal.component";

@NgModule ({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    FocusTrapModule,
    FocusBackModule
  ],
  exports: [ModalComponent],
  providers: [ModalService]
})
export class ModalModule {

}
