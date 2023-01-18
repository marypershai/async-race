import { CarObj, ComponentConfig } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';
import { getAllCarsCounter, getCars } from '../service/api-service';
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
    this.template = `<div><h1>Garage list (${totalCars})</h1></div>`;
    carList.forEach((car: CarObj) => {
      this.template += `${createCarUI(car)}`;
    });
    this.render();
  }
}

export const garageListComponent = new GarageListComponent({
  selector: 'app-garage-list',
  template: '',
  childComponents: [],
});
