import { storage } from './localStorage-service';

export function setSorting(type: string, element: HTMLElement, sort: string) {
  const currentOrder: string = type === 'ASC' ? 'ASC' : 'DESC';
  const sorting = { sort: `${sort}`, order: 'ASC' };
  element.classList.remove(`${type}`);
  element.classList.add(`${currentOrder}`);
  sorting.order = `${currentOrder}`;
  storage.setToLocalStorage('sorting', sorting);
}