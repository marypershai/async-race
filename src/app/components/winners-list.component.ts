import { CarObj, ComponentConfig, WinnerObj } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';
import { getAllWinners, getAllWinnersCounter, getCar } from '../service/api-service';
import { storage } from '../service/localStorage-service';
import { createCarImg } from '../service/car-service';


export class WinnersListComponent extends MPComponent {

  constructor(config: ComponentConfig) {
    super(config);
    this.createList();
  }

  public async createList(): Promise<void> {
    const storagePage = +storage.getCurrentPage('winnersPage');
    const currentPage =  storagePage > 0 ? storagePage : localStorage.setItem('winnersPage', '1');
    const winnersList: WinnerObj[] = await getAllWinners(+currentPage, 'wins', 'ASC');
    const totalWinners: number = await getAllWinnersCounter();
    this.template = `
        <div>
            <h1>Winners list (${totalWinners})</h1>
            <h3>Page #${currentPage}</h3>
        </div>
    `;
    this.template += `
    <table>
        <thead> 
            <tr>
              <th>№</th>
              <th>Image</th>
              <th>Name</th>
              <th>Wins</th>
              <th>Best Time</th>
            </tr>
        </thead>
    `;
    for (const winner of winnersList) {
      const index: number = winnersList.indexOf(winner);
      const car: CarObj[] = await getCar(winner.id);
      this.template += `
      <tr>
        <th>${index + 1}</th>
        <th>${createCarImg(car[0].color)}</th>
        <th>${car[0].name}</th>
        <th>${winner.wins}</th>
        <th>${winner.time}</th>
      </tr>
      `;
    }
    const tag = document.querySelector('app-winners-list') as HTMLElement;
    if (tag) {
      this.render();
    }

  }
}

export const winnersListComponent = new WinnersListComponent({
  selector: 'app-winners-list',
  template: '',
  childComponents: [],
});
