import { CarObj } from '../../framework/tools/interfaces';

const models = ['Tesla', 'BMW', 'Renault', 'Opel', 'Mini', 'Porshe', 'Toyota', 'Lada', 'Volkswagen', 'Audi', 'Lexus'];
const names = ['Model S', 'x5', 'Stepway', 'Zafira', 'Cooper', 'Cayman', 'Camry', 'Kalina', 'Polo', 'Jetta', 'Bora'];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandomName(): string {
  const model = models[getRandomInt(models.length)];
  const name = names[getRandomInt(names.length)];
  console.log(getRandomInt(models.length));
  return `${model} ${name}`;
}

function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor((Math.random() * 16))];
  }
  return color;
}

export function generateRandomCars(count: number): CarObj[] {
  const carArr: CarObj[] = new Array(count).fill({ name: 1, color: 1 }).map(() => {
    return { name: getRandomName(), color: getRandomColor() };
  });
  return carArr;
}