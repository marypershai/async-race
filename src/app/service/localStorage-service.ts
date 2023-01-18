export const storage = {
  getCurrentPage(currentView: string): string {
    return localStorage.getItem(`${currentView}`) ?? '';
  },

  setCurrentPage(currentView: string, pageNumber: number): void {
    localStorage.setItem(`${currentView}`, `${pageNumber}`);
  },

};
