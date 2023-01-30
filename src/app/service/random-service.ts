import { CarObj } from '../../framework/tools/interfaces';

const models = ['Tesla', 'BMW', 'Renault', 'Opel', 'Mini', 'Porshe', 'Toyota', 'Lada', 'Volkswagen', 'Audi', 'Lexus'];
const names = ['Model S', 'x5', 'Stepway', 'Zafira', 'Cooper', 'Cayman', 'Camry', 'Kalina', 'Polo', 'Jetta', 'Bora'];

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function getRandomName(): string {
  const model: string = models[getRandomInt(models.length)];
  const name: string = names[getRandomInt(names.length)];
  return `${model} ${name}`;
}

function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  const NUMBER_HEX_LENGTH = 6;
  for (let i = 0; i < NUMBER_HEX_LENGTH; i += 1) {
    color += letters[Math.floor((Math.random() * letters.length))];
  }
  return color;
}

export function generateRandomCars(count: number): CarObj[] {
  const carArr: CarObj[] = new Array(count).fill({ name: 1, color: 1 }).map(() => {
    return { name: getRandomName(), color: getRandomColor() };
  });
  return carArr;
}