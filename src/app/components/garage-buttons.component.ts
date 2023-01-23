import { ComponentConfig } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';
import { garageListComponent } from './garage-list.component';
import { getGaragePagesCounter } from '../service/api-service';
import { storage } from '../service/localStorage-service';


export class GarageButtonsComponent extends MPComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createButtonsBlock();
  }

  public async createButtonsBlock(): Promise<void> {
    const buttonPrev: string = await this.checkButtonStatus('prev');
    const buttonNext: string = await this.checkButtonStatus('next');
    this.template = `
    <div class="buttons">
        <button class="button button--prev" ${buttonPrev}>Prev</button>
        <button class="button button--next" ${buttonNext}>Next</button>
    </div> 
    `;
    const tag = document.querySelector('app-garage-buttons') as HTMLElement;
    if (tag) {
      this.render();
    }
  }

  private async checkButtonStatus(button: string): Promise<string> {
    const totalCarsPagesCounter: number = await getGaragePagesCounter();
    const currentPage: number = +storage.getCurrentPage('garagePage');
    if (totalCarsPagesCounter > 1) {
      if (button === 'prev') {
        if (currentPage > 1) {
          return '';
        } else return 'disabled';
      } else if (totalCarsPagesCounter === currentPage) {
        return 'disabled';
      } else return '';
    } else {
      return 'disabled';
    }
  }

  public events(): Record<string, string> {
    return {
      'click .button--prev': 'getPreviousPage',
      'click .button--next': 'getNextPage',
    };
  }

  private async getPreviousPage():Promise<void> {
    const totalCarsPagesCounter: number = await getGaragePagesCounter();
    if (totalCarsPagesCounter > 1 ) {
      const currentPage: number = +storage.getCurrentPage('garagePage');
      const prevPage: number = currentPage - 1;
      storage.setCurrentPage('garagePage', prevPage);
      await garageListComponent.createList();
      if (prevPage === 1) {
        (document.querySelector('.button--prev') as HTMLElement).setAttribute('disabled', '');
      }
      if (currentPage < totalCarsPagesCounter) {
        (document.querySelector('.button--next') as HTMLElement).removeAttribute('disabled');
      }
    }
  }

  private async getNextPage(): Promise<void> {
    const totalCarsPagesCounter: number = await getGaragePagesCounter();
    if (totalCarsPagesCounter > 1 ) {
      const currentPage: number = +storage.getCurrentPage('garagePage');
      const nextPage: number = currentPage + 1;
      storage.setCurrentPage('garagePage', nextPage);
      await garageListComponent.createList();
      (document.querySelector('.button--prev') as HTMLElement).removeAttribute('disabled');
      if (totalCarsPagesCounter === nextPage) {
        (document.querySelector('.button--next') as HTMLElement).setAttribute('disabled', '');
      }
    }
  }
}

export const garageButtonsComponent = new GarageButtonsComponent({
  selector: 'app-garage-buttons',
  template: `
    <div class="buttons">
          <button class="button button--prev">Prev</button>
          <button class="button button--next">Next</button>
    </div> 
  `,
  childComponents: [],
});
