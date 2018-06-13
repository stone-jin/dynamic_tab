import {Injectable} from '@angular/core';
import {AComponent} from './components/A.component';
import {BComponent} from './components/B.component';
import {CComponent} from './components/C.component';

@Injectable()
export class DynamicComponentService {
  private components = {
    componentA: AComponent,
    componentB: BComponent,
    componentC: CComponent,
  };

  getComponent(componentName) {
    return this.components[componentName];
  }
}
