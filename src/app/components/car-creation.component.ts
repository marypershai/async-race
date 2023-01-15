import { CarObj, ComponentConfig } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';
import { garageListComponent } from './garage-list.component';
import { createCar } from '../service/api-service';


export class CarCreationComponent extends MPComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createCarCreationBlock();
  }

  createCarCreationBlock(): void {
    this.template = `
    <div class="create-car">
      <input class="input-car-name" type="text" required>
      <input  class="color-picker" type="color" value="#000000">
      <button class="button add-car">Add car</button>
    </div>
    `;
  }

  public events(): Record<string, string> {
    return {
      'click .add-car': 'addCar',
    };
  }

  private async addCar(event: Event): Promise<void> {
    const targetEl = event.target as HTMLElement;
    const carColor: string = (document.querySelector('.color-picker') as HTMLInputElement).value;
    const carName: string = (document.querySelector('.input-car-name') as HTMLInputElement).value;
    const car: CarObj = { name: `${carName}`, color: `${carColor}` };
    if (targetEl && carName !== '') {
      await createCar(car);
      await garageListComponent.createList();
    }
  }
}

export const carCreationComponent = new CarCreationComponent({
  selector: 'app-car-creation',
  template: '',
  childComponents: [],
});
