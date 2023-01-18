import { MPComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';
import { garageListComponent } from '../components/garage-list.component';
import { carCreationComponent } from '../components/car-creation.component';
import { garageButtonsComponent } from '../components/garage-buttons.component';

class GaragePageComponent extends MPComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const garagePageComponent = new GaragePageComponent({
  selector: 'app-garage-page',
  template: `
        <h1>Garage</h1>  
        <app-car-creation></app-car-creation>
        <app-garage-list></app-garage-list>   
        <app-garage-buttons></app-garage-buttons>     
    `,
  childComponents: [garageListComponent, carCreationComponent, garageButtonsComponent],
});
