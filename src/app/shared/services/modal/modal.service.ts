import { ModalRef } from './../../components/models/modal-ref';
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector, TemplateRef } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalConfig } from '../../interfaces/modal-config';
import { BodyInjectorService } from '../body-injector/body-injector.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {


  private componentFactory: ComponentFactory<ModalComponent>

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectorService
  ) {
      this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent)
  }

    public open(config: ModalConfig): ModalRef {
      const componentRef = this.createComponentRef()
      componentRef.instance.config = config
      console.log('Open called')
      this.bodyInjector.stackBeforeAppRoot(componentRef)
      const modalRef = new ModalRef(componentRef)
      componentRef.instance.modalRef = modalRef
      return modalRef
    }

    private createComponentRef(): ComponentRef<ModalComponent> {
      return this.componentFactory.create(this.injector)
    }
}


