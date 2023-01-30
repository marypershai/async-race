import { CarObj, EngineObj, WinnerObj } from '../../framework/tools/interfaces';
import { allWinnersInfo } from '../../framework/tools/types';

const serverURL = 'http://localhost:3000';

const garage = `${serverURL}/garage`;
const winners = `${serverURL}/winners`;
const engine = `${serverURL}/engine`;

export const MAX_CARS_ON_GARAGE_PAGE = 7;
export const MAX_CARS_ON_WINNERS_PAGE = 10;

function getConfigObj(method: string, config: WinnerObj | CarObj): RequestInit {
  return {
    method: `${method}`,
    body: JSON.stringify(config),
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

export async function getCars(page: number): Promise<CarObj[]> {
  const response: Response = await fetch(`${garage}?_page=${page}&_limit=${MAX_CARS_ON_GARAGE_PAGE}`);
  const result: Promise<CarObj[]> = await response.json();
  const totalCars: string = response.headers.get('X-Total-Count') ?? '';
  localStorage.setItem('totalCars', totalCars);
  return result;
}

export async function getAllCarsCounter(): Promise<number> {
  const response: Response = await fetch(`${garage}`);
  const result: CarObj[] = await response.json();
  return result.length;
}

export  async function getGaragePagesCounter(): Promise<number> {
  const totalCars: number = await getAllCarsCounter();
  return Math.ceil(totalCars / MAX_CARS_ON_GARAGE_PAGE);
}

export async function getAllWinners(allWinners: allWinnersInfo): Promise<WinnerObj[]> {
  const response: Response = await fetch(`${winners}?_page=${allWinners.page}&_limit=${MAX_CARS_ON_WINNERS_PAGE}&_sort=${allWinners.sort}&_order=${allWinners.order}`);
  const result: WinnerObj[] = await response.json();
  const totalCars: string = response.headers.get('X-Total-Count') ?? '';
  localStorage.setItem('totalWinners', totalCars);
  return result;
}

export async function setWinner(config: WinnerObj): Promise<void> {
  await (await fetch(winners, getConfigObj('POST', config))).json();
}

export async function updateWinner(config: WinnerObj, id: number): Promise<void> {
  await (await fetch(`${winners}/${id}`, getConfigObj('PUT', config))).json();
}

export async function getWinner(id: number): Promise<WinnerObj[]> {
  const response: Response = await fetch(`${winners}?id=${id}`);
  if (response.status !== 200) {
    return [{ 'id': id, 'wins': 0, 'time': 0 }];
  } else {
    const result: WinnerObj[] = await response.json();
    return result;
  }
}

export async function getCar(id: number): Promise<CarObj[]> {
  const response: Response = await fetch(`${garage}?id=${id}`);
  const result: CarObj[] = await response.json();
  return result;
}

export async function getAllWinnersCounter(): Promise<number> {
  const response: Response = await fetch(`${winners}`);
  const result: WinnerObj[] = await response.json();
  return result.length;
}

export async function  createCar(config: CarObj): Promise<void> {
  await (await fetch(garage, getConfigObj('POST', config))).json();
}

export async function deleteCar(id: number): Promise<number> {
  const response: Response = await fetch(`${garage}/${id}`, { method: 'DELETE' });
  const result: number = await response.json();
  return result;
}

export async function  updateCar(id: number, config: CarObj): Promise<void> {
  await (await fetch(`${garage}/${id}`, getConfigObj('PUT', config))).json();
}

export async function startEngine(id: number): Promise<EngineObj> {
  const response: Response = await fetch(`${engine}?id=${id}&status=started`, { method: 'PATCH' });
  if (response.status == 200) {
    const result: EngineObj = await response.json();
    return result;
  }
  throw new Error(`${response.status}`);
}

export async function stopEngine(id: string): Promise<EngineObj> {
  const response: Response = await fetch(`${engine}?id=${id}&status=stopped`, { method: 'PATCH' });
  if (response.status == 200) {
    const result: EngineObj = await response.json();
    return result;
  }
  throw new Error(`${response.status}`);
}

export async function driveEngine(id: number): Promise<{ success: boolean }> {
  const response = await fetch(`${engine}?id=${id}&status=drive`, { method: 'PATCH' }).catch();
  return response.status !== 200 ? { success: false } : { ...(await response.json()) };
}

