import { ComponentConfig } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';
import { garageListComponent } from './garage-list.component';
import { getGaragePagesCounter } from '../service/api-service';
import { storage } from '../service/localStorage-service';
import { elementRemoveDisabled, elementSetDisabled } from '../service/element-service';
import { getButtonStatus } from '../service/buttons-service';


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
    return getButtonStatus(button, totalCarsPagesCounter, currentPage);
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
        const prevButton = document.querySelector('.button--prev') as HTMLElement;
        elementSetDisabled(prevButton);
      }
      if (currentPage < totalCarsPagesCounter) {
        const nextButton = document.querySelector('.button--next') as HTMLElement;
        elementRemoveDisabled(nextButton);
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
      const prevButton = document.querySelector('.button--prev') as HTMLElement;
      elementRemoveDisabled(prevButton);
      if (totalCarsPagesCounter === nextPage) {
        const nextButton = document.querySelector('.button--next') as HTMLElement;
        elementSetDisabled(nextButton);
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
