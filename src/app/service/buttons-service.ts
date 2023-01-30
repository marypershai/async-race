export function getButtonStatus(button: string, totalCarsPagesCounter: number, currentPage: number): string {
  if (totalCarsPagesCounter > 1) {
    if (button === 'prev') {
      return currentPage > 1 ? '' : 'disabled';
    } else return totalCarsPagesCounter === currentPage ? 'disabled' : '';
  } else {
    return 'disabled';
  }
}