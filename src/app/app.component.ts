
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalRef } from './shared/components/models/modal-ref';
import { ModalService } from './shared/services/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('modal') public modalTemplateRef!: TemplateRef<any>
  public modalRef!: ModalRef
  title = 'hello-accessibility';
  public firstName = 'Gabriel'
  public yesNoAnswer = 'no'

  public form!: FormGroup

  constructor(
    formBuilder: FormBuilder,
    private modalService: ModalService
  ) {
    this.form = formBuilder.group({
      yesNoAnswer: [{
        value: null,
        disabled: false
      }]
    })
  }
  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    })
  }

  public submit(): void {
    console.log(this.form.value)
  }

}
function show() {
  throw new Error('Function not implemented.');
}

