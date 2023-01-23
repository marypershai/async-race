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
    if (storagePage <= 0) {
      localStorage.setItem('winnersPage', '1');
    }
    const currentPage: string =  storage.getCurrentPage('winnersPage');
    const storageSort: string | null = localStorage.getItem('sorting');
    let currentSort: { sort: string, order: string } = { sort: 'time', order: 'ASC' };
    if (storageSort) {
      currentSort = JSON.parse(storageSort);
    }
    const winnersList: WinnerObj[] = await getAllWinners(+currentPage, currentSort.sort, currentSort.order);
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
              <th class="sort-wins ${currentSort.order}">Wins</th>
              <th class="sort-time ${currentSort.order}">Best Time</th>
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

  public events(): Record<string, string> {
    return {
      'click .sort-wins': 'sortWins',
      'click .sort-time': 'sortTime',
    };
  }

  private async sortWins(event: Event): Promise<void> {
    const target = event.currentTarget as HTMLElement;
    const currentPage: string | null = localStorage.getItem('winnersPage');
    if (currentPage) {
      const sorting = { sort: 'wins', order: 'ASC' };
      if (target.classList.contains('ASC')) {
        target.classList.remove('ASC');
        target.classList.add('DESC');
        sorting.order = 'DESC';
        localStorage.setItem('sorting', JSON.stringify(sorting));
        await this.createList();
      } else {
        target.classList.remove('DESC');
        target.classList.add('ASC');
        sorting.order = 'ASC';
        localStorage.setItem('sorting', JSON.stringify(sorting));
        await this.createList();
      }
    }
  }

  private async sortTime(event: Event): Promise<void> {
    const target = event.currentTarget as HTMLElement;
    const currentPage: string | null = localStorage.getItem('winnersPage');
    if (currentPage) {
      const sorting = { sort: 'time', order: 'ASC' };
      if (target.classList.contains('ASC')) {
        target.classList.remove('ASC');
        target.classList.add('DESC');
        sorting.order = 'DESC';
        localStorage.setItem('sorting', JSON.stringify(sorting));
        await this.createList();
      } else {
        target.classList.remove('DESC');
        target.classList.add('ASC');
        sorting.order = 'ASC';
        localStorage.setItem('sorting', JSON.stringify(sorting));
        await this.createList();
      }
    }
  }
}

export const winnersListComponent = new WinnersListComponent({
  selector: 'app-winners-list',
  template: '',
  childComponents: [],
});
