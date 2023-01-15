import { MPComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';

class WinnersPageComponent extends MPComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const winnersPageComponent = new WinnersPageComponent({
  selector: 'app-winners-page',
  template: `
        <h1>Winners</h1>             
    `,
  childComponents: [],
});
