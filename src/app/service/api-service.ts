import { CarObj } from '../../framework/tools/interfaces';

const serverURL = 'http://localhost:3000';

const garage = `${serverURL}/garage`;

export async function getCars(): Promise<CarObj[]> {
  const response = await fetch(`${garage}`);
  const result = await response.json();
  return result;
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