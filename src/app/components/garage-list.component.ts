import { CarObj, ComponentConfig, WinnerObj } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';
import {
  createCar,
  deleteCar,
  driveEngine,
  getAllCarsCounter,
  getCar,
  getCars, getWinner, setWinner,
  startEngine,
  stopEngine, updateWinner,
} from '../service/api-service';
import { createCarUI, gerCurrentCarInfo, getCarControls } from '../service/car-service';
import { storage } from '../service/localStorage-service';
import { animation, getDistanceBetweenElements } from '../service/animation-service';
import { generateRandomCars } from '../service/random-service';
import { winnersListComponent } from './winners-list.component';
import { elementRemoveDisabled, elementSetDisabled } from '../service/element-service';


export class GarageListComponent extends MPComponent {

  constructor(config: ComponentConfig) {
    super(config);
    this.createList();
  }

  public async createList(): Promise<void> {
    let storagePage: number = +storage.getCurrentPage('garagePage');
    if (storagePage <= 0) {
      localStorage.setItem('garagePage', '1');
      storagePage = 1;
    }
    const carList: CarObj[] = await getCars(+storagePage);
    const totalCars: number = await getAllCarsCounter();
    this.template = `
      <div>
          <h1>Garage list (${totalCars})</h1>
          <h3>Page #${storagePage}</h3>
          <button class="button button--create">Create 100 cars</button>
          <button class="button button--race">Race</button>
          <button class="button button--reset">Reset</button>
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
      'click .button--create': 'createCars',
      'click .button--race': 'race',
      'click .button--reset': 'reset',
    };
  }

  private async editCar(event: Event): Promise<void> {
    const target = event.target as HTMLElement;
    const carEl = target.closest('.car') as HTMLElement;
    const carID: string | null = carEl.getAttribute('data-id');
    if (carID && target.closest('.button--edit')) {
      localStorage.setItem('editCarID', carID);
      const car: CarObj[] = await getCar(+carID);
      const editInput = document.querySelector('.input-car-name-edit') as HTMLInputElement;
      elementRemoveDisabled(editInput);
      editInput.value = car[0].name;
      const editColorInput = document.querySelector('.color-picker-edit') as HTMLInputElement;
      elementRemoveDisabled(editColorInput);
      editColorInput.value = car[0].color;
      const updateCarButton = document.querySelector('.update-car') as HTMLElement;
      elementSetDisabled(updateCarButton);
    }

  }

  private async removeCar(event: Event): Promise<void> {
    const target = event.target as HTMLElement;
    const carID: number | undefined = gerCurrentCarInfo(event);
    if (carID && target.classList.contains('button--remove')) {
      await deleteCar(+carID);
      await this.createList();
    }
  }

  private async startCar(event: Event): Promise<void> {
    const carID: number | undefined = gerCurrentCarInfo(event);
    if (carID) {
      const { startButton } = getCarControls(+carID);
      if (startButton.classList.contains('button--start')) {
        await this.startDrive(+carID);
      }
    }
  }

  private async stopCar(event: Event): Promise<void> {
    const carID: number | undefined = gerCurrentCarInfo(event);
    if (carID) {
      const { stopButton } = getCarControls(+carID);
      if (stopButton.classList.contains('button--stop')) {
        await this.stopDrive(+carID);
      }
    }
  }

  public createCars() {
    const arrNewCars: CarObj[] = generateRandomCars(100);
    arrNewCars.forEach(async (newCar) => {
      await createCar(newCar);
    });
    this.createList();
  }

  private async startDrive(id: number):Promise<{ success: boolean, time: number, id: number }> {
    const { carEl, startButton, stopButton } = getCarControls(id);
    startButton.setAttribute('disabled', '');
    elementSetDisabled(stopButton);

    const { velocity, distance } = await startEngine(id);
    const time: number = Math.round(distance / velocity);

    const car = carEl.querySelector('.car-img') as HTMLElement;
    const flag = carEl.querySelector('.flag') as HTMLElement;

    const htmlDistance = Math.floor(getDistanceBetweenElements(car, flag)) + flag.offsetWidth;

    const animationID: { id: number } = animation(car, htmlDistance, time);
    const { success } = await driveEngine(id);
    window.cancelAnimationFrame(10);
    if (!success) {
      window.cancelAnimationFrame(animationID.id);
    }
    return { success, time, id };
  }

  private async stopDrive(id: number) {
    const { carEl, startButton, stopButton } = getCarControls(id);
    await stopEngine(`${id}`);
    elementSetDisabled(stopButton);
    elementRemoveDisabled(startButton);
    const car = carEl.querySelector('.car-img') as HTMLElement;
    car.style.transform = 'translateX(0)';
    const animationID: string | null = localStorage.getItem('animationID');
    if (animationID) {
      window.cancelAnimationFrame(+animationID);
    }
  }

  private async race() {
    const currentPage: string | null = localStorage.getItem('garagePage');
    if (currentPage) {
      const cars: CarObj[] = await getCars(+currentPage);
      const promises = cars.map((car: CarObj) => {
        if (car.id) return this.startDrive(car.id);
      });
      const success = await  Promise.race(promises);
      if (success) {
        const checkWinner: WinnerObj[] = await getWinner(success.id);
        const finalTime: number = success.time / 1000;
        const winnerCount = 1;
        const winner: WinnerObj = {
          time: finalTime,
          wins: winnerCount,
          id: success.id,
        };
        if (checkWinner.length) {
          winner.wins = checkWinner[0].wins + 1;
          winner.time = success.time / 1000 < checkWinner[0].time ? success.time / 1000 :  checkWinner[0].time;
          await updateWinner(winner, success.id);
        } else {
          await setWinner(winner);
        }
        await winnersListComponent.createList();
      }
    }
  }

  private async reset() {
    const currentPage: string | null = localStorage.getItem('garagePage');
    if (currentPage) {
      const cars = await getCars(+currentPage);
      const promises = cars.map((car: CarObj) => {
        if (car.id) this.stopDrive(car.id);
      });
      await  Promise.all(promises);
    }

  }
}

export const garageListComponent = new GarageListComponent({
  selector: 'app-garage-list',
  template: '',
  childComponents: [],
});
