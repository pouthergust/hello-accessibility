import { AfterViewInit, TemplateRef } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ModalConfig } from '../../interfaces/modal-config';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent /* implements AfterViewInit */ {

  // @HostBinding('class.show') public show = false

  public config!: ModalConfig


/*   public ngAfterViewInit(): void {
    this.show = true;
  } */
}
