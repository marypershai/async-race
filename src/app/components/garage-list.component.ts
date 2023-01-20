import { CarObj, ComponentConfig } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';
import { deleteCar, getAllCarsCounter, getCar, getCars } from '../service/api-service';
import { createCarUI } from '../service/car-service';
import { storage } from '../service/localStorage-service';


export class GarageListComponent extends MPComponent {

  constructor(config: ComponentConfig) {
    super(config);
    this.createList();
  }

  public async createList(): Promise<void> {
    const storagePage = +storage.getCurrentPage('garagePage');
    const currentPage =  storagePage > 0 ? storagePage : localStorage.setItem('garagePage', '1'); 
    const carList: CarObj[] = await getCars(+currentPage);
    const totalCars: number = await getAllCarsCounter();
    this.template = `
      <div>
          <h1>Garage list (${totalCars})</h1>
      </div>
      <div class="buttons--edit buttons--remove">
    `;
    carList.forEach((car: CarObj) => {
      this.template += `
      <div class='car' data-id="${car.id}">
        ${createCarUI(car)}
      </div>`;
    });
    this.template += '</div>';
    const tag = document.querySelector('app-garage-list') as HTMLElement;
    if (tag) {
      this.render();
    }
  }

  public events(): Record<string, string> {
    return {
      'click .buttons--edit': 'editCar',
      'click .buttons--remove': 'removeCar',
    };
  }

  private async editCar(event: Event): Promise<void> {
    const target = event.target as HTMLElement;
    const carEl = target.closest('.car') as HTMLElement;
    const carID: string | null = carEl.getAttribute('data-id');
    if (carID && target.closest('.button--edit')) {
      localStorage.setItem('editCarID', carID);
      const car: CarObj[] = await getCar(+carID);
      const editInput = document.querySelector('.input-edit-car-name') as HTMLInputElement;
      editInput.removeAttribute('disabled');
      editInput.value = car[0].name;
      const editColorInput = document.querySelector('.color-picker-edit') as HTMLInputElement;
      editColorInput.removeAttribute('disabled');
      editColorInput.value = car[0].color;
      const updateCarButton = document.querySelector('.update-car') as HTMLElement;
      updateCarButton.removeAttribute('disabled');
    }

  }

  private async removeCar(event: Event): Promise<void> {
    console.log('target');
    const target = event.target as HTMLElement;
    const carEl = target.closest('.car') as HTMLElement;
    const carID: string | null = carEl.getAttribute('data-id');
    console.log(target.closest('.button--remove'));
    console.log(carID);
    if (carID) {
      await deleteCar(+carID);
      console.log('delete');
      await this.createList();
    }
  }
}

export const garageListComponent = new GarageListComponent({
  selector: 'app-garage-list',
  template: '',
  childComponents: [],
});
