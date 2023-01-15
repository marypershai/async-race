import { ComponentConfig } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';


export class CarCreationComponent extends MPComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }

}

export const carCreationComponent = new CarCreationComponent({
  selector: 'app-car-creation',
  template: `
        <div>Create Car</div>
    `,
  childComponents: [],
});
