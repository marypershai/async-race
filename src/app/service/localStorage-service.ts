import { CarObj } from '../../framework/tools/interfaces';

export const storage = {
  getCurrentPage(currentView: string): string {
    return localStorage.getItem(`${currentView}`) ?? '';
  },

  setCurrentPage(currentView: string, pageNumber: number): void {
    localStorage.setItem(`${currentView}`, `${pageNumber}`);
  },

  setToLocalStorage(item: string, value: {}): void {
    localStorage.setItem(item, JSON.stringify(value));
  },

  getCarFromLocalStorage(): CarObj {
    const data: string | null = localStorage.getItem('addCar');
    return data ? JSON.parse(data) : { name: '', color: '#000000' };
  },

};
