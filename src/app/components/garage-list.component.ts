import { ComponentConfig } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';


export class GarageListComponent extends MPComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }

}

export const garageListComponent = new GarageListComponent({
  selector: 'app-garage-list',
  template: `
        <div>Garage list</div>
    `,
  childComponents: [],
});
