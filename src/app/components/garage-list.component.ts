import { CarObj, ComponentConfig } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';
import { getCars } from '../service/api-service';
import { createCarUI } from '../service/car-service';


export class GarageListComponent extends MPComponent {

  constructor(config: ComponentConfig) {
    super(config);
    this.createList();
  }

  public async createList(): Promise<void> {
    const carlist: CarObj[] = await getCars();
    carlist.forEach((car: CarObj) => {
      this.template += `${createCarUI(car)}`;
    });
    this.render();
  }
}

export const garageListComponent = new GarageListComponent({
  selector: 'app-garage-list',
  template: `
        <div>Garage list</div>
    `,
  childComponents: [],
});
