import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ModalService } from "../../services/modal/modal.service";
import { ModalComponent } from "./modal.component";

@NgModule ({
  declarations: [ModalComponent],
  imports: [CommonModule],
  exports: [ModalComponent],
  providers: [ModalService]
})
export class ModalModule {

}
