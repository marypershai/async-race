import { CarObj, ComponentConfig } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';
import { garageListComponent } from './garage-list.component';
import { createCar } from '../service/api-service';
import { garageButtonsComponent } from './garage-buttons.component';


export class CarCreationComponent extends MPComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createCarCreationBlock();
  }

  public createCarCreationBlock(): void {
    const data: string | null = localStorage.getItem('addCar');
    let carInfo: CarObj;
    console.log(data);
    if (data) {
      carInfo = JSON.parse(data);
    } else {
      carInfo = {
        name: '',
        color: '#000000',
      };
    }
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
    const carColor: string = (document.querySelector('.color-picker') as HTMLInputElement).value;
    const carName: string = (document.querySelector('.input-car-name') as HTMLInputElement).value;
    const car: CarObj = { name: `${carName}`, color: `${carColor}` };
    localStorage.setItem('addCar', JSON.stringify(car));
    if (targetEl && carName !== '') {
      await createCar(car);
      await garageListComponent.createList();
      await garageButtonsComponent.createButtonsBlock();
    }
  }

  private saveData() {
    const carName: string = (document.querySelector('.input-car-name') as HTMLInputElement).value;
    const carColor: string = (document.querySelector('.color-picker') as HTMLInputElement).value;
    const car: CarObj = { name: `${carName}`, color: `${carColor}` };
    localStorage.setItem('addCar', JSON.stringify(car));
    this.createCarCreationBlock();
  }
}

export const carCreationComponent = new CarCreationComponent({
  selector: 'app-car-creation',
  template: '',
  childComponents: [],
});
