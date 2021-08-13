import { forwardRef } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => YesNoButtonGroupComponent),
    multi: true,
  }]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input() public value!: string
  @Input() public label = ''
  @Output() public valueChange = new EventEmitter<string>()

  public id!: string
  public options = YesNoButtonGroupOptions
  public onChange = (value: string) => {}
  public onTouched = () => {}

  constructor(uniqueIdService: UniqueIdService) {
    this.id = uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group')
   }

  ngOnInit(): void {
  }

  public writeValue(value: string): void {
    this.value = value
    this.onChange(this.value)
    this.valueChange.emit(this.value)
  }
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  public activate(value: string): void {
    this.writeValue(value)
  }

}

enum YesNoButtonGroupOptions {
  no = 'no',
  yes = 'yes'
}