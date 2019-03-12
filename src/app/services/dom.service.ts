import { Injectable, ApplicationRef, Injector, ComponentFactoryResolver, EmbeddedViewRef } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DomService {

	private componentRef: any;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private appRef: ApplicationRef,
		private injector: Injector
	) { }

	getComponent (component: any) {

		this.componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);

		this.appRef.attachView(this.componentRef.hostView);

		const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

		return domElem;
	}

	deleteComponent() {
		this.appRef.detachView(this.componentRef.hostView);
		this.componentRef.destroy();
	}
}
