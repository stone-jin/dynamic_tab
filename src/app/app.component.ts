import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {DynamicComponentService} from './DynamicComponentService';
import {DynamicComponentDirective} from './DynamicComponentDirective';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  @ViewChild(DynamicComponentDirective)
  componentHost: DynamicComponentDirective;

  constructor(
    private componentFacotryResolver: ComponentFactoryResolver,
    private dynamicComponentService: DynamicComponentService
  ) {}

  displayComponent(componentName: string) {
    const componentFactory = this.componentFacotryResolver.resolveComponentFactory(
      this.dynamicComponentService.getComponent(componentName)
    );
    const viewContainerRef = this.componentHost.viewContainerRef;

    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
