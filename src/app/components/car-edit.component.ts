import { CarObj, ComponentConfig } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';
import { updateCar } from '../service/api-service';
import { garageListComponent } from './garage-list.component';
import { winnersListComponent } from './winners-list.component';


export class CarEditComponent extends MPComponent {

  constructor(config: ComponentConfig) {
    super(config);
    this.createCarEditBlock();
  }

  public createCarEditBlock(): void {
    this.template = `
    <div class="create-car">
      <input class="input-edit-car-name" type="text" required disabled>
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
      const editInput = document.querySelector('.input-edit-car-name') as HTMLInputElement;
      const editColorInput = document.querySelector('.color-picker-edit') as HTMLInputElement;
      const carForUpdate: CarObj = {
        name: editInput.value,
        color: editColorInput.value,
      };
      await updateCar(+carID, carForUpdate);
      localStorage.removeItem('editCarID');
      editInput.value = '';
      editInput.setAttribute('disabled', '');
      editColorInput.setAttribute('disabled', '');
      const updateCarButton = document.querySelector('.update-car') as HTMLElement;
      updateCarButton.setAttribute('disabled', '');
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
