import { CarObj } from '../../framework/tools/interfaces';

const serverURL = 'http://localhost:3000';

const garage = `${serverURL}/garage`;

export const MAX_CARS_ON_GARAGE_PAGE = 2;

export async function getCars(page: number): Promise<CarObj[]> {
  const response = await fetch(`${garage}?_page=${page}&_limit=${MAX_CARS_ON_GARAGE_PAGE}`);
  const result = await response.json();
  const totalCars: string = response.headers.get('X-Total-Count') ?? '';
  localStorage.setItem('totalCars', totalCars);
  console.log(`${garage}?_page=${page}&_limit=${MAX_CARS_ON_GARAGE_PAGE}`);
  return result;
}

export async function getAllCarsCounter(): Promise<number> {
  const response = await fetch(`${garage}`);
  const result = await response.json();
  return result.length;
}

export  async function getGaragePagesCounter(): Promise<number> {
  const totalCars = await getAllCarsCounter();
  return Math.ceil(totalCars / MAX_CARS_ON_GARAGE_PAGE);
}

export async function  createCar(config: CarObj): Promise<void> {
  await (await fetch(garage, {
    method: 'POST',
    body: JSON.stringify(config),
    headers: {
      'Content-Type': 'application/json',
    },
  })).json();
}