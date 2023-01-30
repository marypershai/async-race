import { carValue } from '../../framework/tools/types';

export function animation(car: HTMLElement, distance: number, animationTime: number): { id: number } {

  let start: number | null = null;
  const state:{ id: number } = { id: 0 };

  function step(timestamp: number): void {
    if (!start) start = timestamp;

    const time: number = timestamp - start;
    const passed: number = Math.round((time * distance / animationTime));

    car.style.transform = `translateX(${Math.min(passed, distance)}px)`;

    if (passed < distance) {
      state.id = window.requestAnimationFrame(step);
      localStorage.setItem('animationID', `${state.id}`);
    }
  }
  state.id = window.requestAnimationFrame(step);
  return state;
}

function getElementCenter(element: HTMLElement): { x: number, y: number } {
  const { top, left, width, height }: carValue = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}

export function getDistanceBetweenElements(a: HTMLElement, b: HTMLElement):number {
  const aPosition: { x: number, y: number } = getElementCenter(a);
  const bPosition: { x: number, y: number } = getElementCenter(b);

  return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
}

