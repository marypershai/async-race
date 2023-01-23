import { CarObj, WinnerObj } from '../../framework/tools/interfaces';

const serverURL = 'http://localhost:3000';

const garage = `${serverURL}/garage`;
const winners = `${serverURL}/winners`;
const engine = `${serverURL}/engine`;

export const MAX_CARS_ON_GARAGE_PAGE = 7;
export const MAX_CARS_ON_WINNERS_PAGE = 10;

export async function getCars(page: number): Promise<CarObj[]> {
  const response = await fetch(`${garage}?_page=${page}&_limit=${MAX_CARS_ON_GARAGE_PAGE}`);
  const result = await response.json();
  const totalCars: string = response.headers.get('X-Total-Count') ?? '';
  localStorage.setItem('totalCars', totalCars);
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

export async function getAllWinners(page: number, sort: 'id' | 'wins' | 'time', order: 'ASC' | 'DESC'): Promise<WinnerObj[]> {
  const response = await fetch(`${winners}?_page=${page}&_limit=${MAX_CARS_ON_WINNERS_PAGE}&_sort=${sort}s&_order=${order}`);
  const result = await response.json();
  const totalCars: string = response.headers.get('X-Total-Count') ?? '';
  localStorage.setItem('totalWinners', totalCars);
  return result;
}

export async function setWinner(config: WinnerObj): Promise<void> {
  await (await fetch(winners, {
    method: 'POST',
    body: JSON.stringify(config),
    headers: {
      'Content-Type': 'application/json',
    },
  })).json();
}

export async function updateWinner(config: WinnerObj, id: number): Promise<void> {
  await (await fetch(`${winners}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(config),
    headers: {
      'Content-Type': 'application/json',
    },
  })).json();
}

export async function getWinner(id: number): Promise<WinnerObj[]> {
  const response = await fetch(`${winners}?id=${id}`);
  if (response.status !== 200) {
    return [{ 'id': id, 'wins': 0, 'time': 0 }];
  } else {
    const result = await response.json();
    return result;
  }
}

export async function getCar(id: number): Promise<CarObj[]> {
  const response = await fetch(`${garage}?id=${id}`);
  const result = await response.json();
  return result;
}

export async function getAllWinnersCounter(): Promise<number> {
  const response = await fetch(`${winners}`);
  const result = await response.json();
  return result.length;
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

export async function deleteCar(id: number): Promise<number> {
  const response = await fetch(`${garage}/${id}`, { method: 'DELETE' });
  const result = await response.json();
  return result;
}

export async function  updateCar(id: number, config: CarObj): Promise<void> {
  await (await fetch(`${garage}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(config),
    headers: {
      'Content-Type': 'application/json',
    },
  })).json();
}

export async function startEngine(id: number) {
  const response = await fetch(`${engine}?id=${id}&status=started`, { method: 'PATCH' });
  if (response.status == 200) {
    const result = await response.json();
    return result;
  }
  throw new Error(`${response.status}`);
}

export async function stopEngine(id: string) {
  const response = await fetch(`${engine}?id=${id}&status=stopped`, { method: 'PATCH' });
  if (response.status == 200) {
    const result = await response.json();
    return result;
  }
  throw new Error(`${response.status}`);
}

export async function driveEngine(id: number): Promise<{ success: boolean }> {
  const response = await fetch(`${engine}?id=${id}&status=drive`, { method: 'PATCH' }).catch();
  return response.status !== 200 ? { success: false } : { ...(await response.json()) };
}