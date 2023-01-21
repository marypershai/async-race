import { CarObj, ComponentConfig } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';
import {
  deleteCar,
  driveEngine,
  getAllCarsCounter,
  getCar,
  getCars,
  startEngine,
  stopEngine,
} from '../service/api-service';
import { createCarUI } from '../service/car-service';
import { storage } from '../service/localStorage-service';
import { animation, getDistanceBetweenElements } from '../service/animation-service';


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
      <div class="buttons--edit buttons--remove buttons--start buttons--stop">
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
      'click .buttons--start': 'startCar',
      'click .buttons--stop': 'stopCar',
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
    const target = event.target as HTMLElement;
    const carEl = target.closest('.car') as HTMLElement;
    const carID: string | null = carEl.getAttribute('data-id');
    if (carID && target.classList.contains('button--remove')) {
      await deleteCar(+carID);
      await this.createList();
    }
  }

  private async startCar(event: Event): Promise<void> {
    const startButton = event.target as HTMLInputElement;
    const carEl = startButton.closest('.car') as HTMLElement;

    const carID: string | null = carEl.getAttribute('data-id');

    if (carID && startButton.classList.contains('button--start')) {
      startButton.setAttribute('disabled', '');
      const stopButton = carEl.querySelector('.button--stop') as HTMLElement;
      stopButton.removeAttribute('disabled');
      const { velocity, distance } = await startEngine(+carID);
      const time: number = Math.round(distance / velocity);

      const car = carEl.querySelector('.car-img') as HTMLElement;
      const flag = carEl.querySelector('.flag') as HTMLElement;

      const htmlDistance = Math.floor(getDistanceBetweenElements(car, flag)) + 120;

      const animationID: { id: number } = animation(car, htmlDistance, time);
      const { success } = await driveEngine(+carID);
      window.cancelAnimationFrame(10);
      if (!success) {
        window.cancelAnimationFrame(animationID.id);
      }
    }
  }

  private async stopCar(event: Event): Promise<void> {
    const stopButton = event.target as HTMLInputElement;
    const carEl = stopButton.closest('.car') as HTMLElement;
    const startButton = carEl.querySelector('.button--start') as HTMLElement;
    const carID: string | null = carEl.getAttribute('data-id');
    if (carID && stopButton.classList.contains('button--stop')) {
      await stopEngine(carID);
      stopButton.setAttribute('disabled', '');
      startButton.removeAttribute('disabled');
      const car = carEl.querySelector('.car-img') as HTMLElement;
      car.style.transform = 'translateX(0)';
      const animationID = localStorage.getItem('animationID');
      if (animationID) {
        window.cancelAnimationFrame(+animationID);
      }
    }
  }
}

export const garageListComponent = new GarageListComponent({
  selector: 'app-garage-list',
  template: '',
  childComponents: [],
});
