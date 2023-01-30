import { CarObj, ComponentConfig } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';
import { updateCar } from '../service/api-service';
import { garageListComponent } from './garage-list.component';
import { winnersListComponent } from './winners-list.component';
import { getCarNameColor } from '../service/car-service';
import { elementSetDisabled } from '../service/element-service';


export class CarEditComponent extends MPComponent {

  constructor(config: ComponentConfig) {
    super(config);
    this.createCarEditBlock();
  }

  public createCarEditBlock(): void {
    this.template = `
    <div class="create-car">
      <input class="input-car-name-edit" type="text" required disabled>
      <input  class="color-picker-edit" type="color" value="#000000" disabled>
      <button class="button update-car" disabled>Update car</button>
    </div>
    `;
  }

  public events(): Record<string, string> {
    return {
      'click .update-car': 'editCar',
    };
  }

  private async editCar(): Promise<void> {
    const carID: string | null = localStorage.getItem('editCarID');

    if (carID) {
      const editInput = document.querySelector('.input-car-name-edit') as HTMLInputElement;
      const editColorInput = document.querySelector('.color-picker-edit') as HTMLInputElement;
      const carForUpdate: CarObj = getCarNameColor(true);
      await updateCar(+carID, carForUpdate);
      localStorage.removeItem('editCarID');
      editInput.value = '';
      elementSetDisabled(editInput);
      elementSetDisabled(editColorInput);
      const updateCarButton = document.querySelector('.update-car') as HTMLElement;
      elementSetDisabled(updateCarButton);
      await garageListComponent.createList();
      await winnersListComponent.createList();
      winnersListComponent.render();
    }
  }
}

export const carEditComponent = new CarEditComponent({
  selector: 'app-car-edit',
  template: '',
  childComponents: [],
});
