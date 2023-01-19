import { MPComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';
import { winnersListComponent } from '../components/winners-list.component';
import { winnersButtonsComponent } from '../components/winners-buttons.component';

class WinnersPageComponent extends MPComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const winnersPageComponent = new WinnersPageComponent({
  selector: 'app-winners-page',
  template: `   
        <app-winners-list></app-winners-list>     
        <app-winners-buttons></app-winners-buttons>
    `,
  childComponents: [winnersListComponent, winnersButtonsComponent],
});
