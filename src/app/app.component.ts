
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalRef } from './shared/components/models/modal-ref';
import { ModalService } from './shared/services/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('modal') public modalTemplateRef!: TemplateRef<any>
  public modalRef!: ModalRef
  title = 'hello-accessibility';
  public yesNoAnswer = 'no'
  info = false as boolean

  public form!: FormGroup
  public formModal!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService
  ) {
    this.form = this.formBuilder.group({
      yesNoAnswer: [{
        value: null,
        disabled: false
      }]
    })
  }

  public ngOnInit(): void {
   this.formModal = this.formBuilder.group({
     firstName: ['Gabriel', Validators.required],
     surname: ['', Validators.required],
     age: ['', Validators.required],
     info: [false]
   })
  }

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'Detalhes do usuário'
    })
  }

  public submit(): void {
    if (this.formModal.invalid) {
      return
    }

    console.log(this.formModal.value)
    this.modalRef.close()
  }

}

