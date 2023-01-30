import { CarObj, ComponentConfig } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';
import { garageListComponent } from './garage-list.component';
import { createCar } from '../service/api-service';
import { garageButtonsComponent } from './garage-buttons.component';
import { storage } from '../service/localStorage-service';
import { getCarNameColor } from '../service/car-service';


export class CarCreationComponent extends MPComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createCarCreationBlock();
  }

  public createCarCreationBlock(): void {
    const carInfo: CarObj = storage.getCarFromLocalStorage();
    this.template = `
        <div class="create-car">
          <input class="input-car-name" type="text" required value="${carInfo.name}">
          <input  class="color-picker" type="color" value="${carInfo.color}">
          <button class="button add-car">Add car</button>
        </div>
    `;
  }

  public events(): Record<string, string> {
    return {
      'click .add-car': 'addCar',
      'keyup .input-car-name': 'saveData',
      'change .color-picker': 'saveData',
    };
  }

  private async addCar(event: Event): Promise<void> {
    const targetEl = event.target as HTMLElement;
    const car: CarObj = getCarNameColor();
    storage.setToLocalStorage('addCar', car);
    if (targetEl && car.name !== '') {
      await createCar(car);
      await garageListComponent.createList();
      await garageButtonsComponent.createButtonsBlock();
    }
  }

  private saveData(): void {
    const car: CarObj = getCarNameColor();
    storage.setToLocalStorage('addCar', car);
    this.createCarCreationBlock();
  }
}

export const carCreationComponent = new CarCreationComponent({
  selector: 'app-car-creation',
  template: '',
  childComponents: [],
});
