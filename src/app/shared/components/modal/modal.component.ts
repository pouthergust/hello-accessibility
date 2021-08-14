
import { AfterViewInit, TemplateRef } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { fade } from '../../animations/fade';
import { ModalConfig } from '../../interfaces/modal-config';
import { ModalRef } from '../models/modal-ref';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade]
})
export class ModalComponent /* implements AfterViewInit */ {
  // @HostBinding('class.show') public show = false
  @HostBinding('@fade') fade = true


  public config!: ModalConfig
  public modalRef!: ModalRef

/*   public ngAfterViewInit(): void {
    this.show = true;
  } */
}
