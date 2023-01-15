import { CarObj } from '../../framework/tools/interfaces';

const serverURL = 'http://localhost:3000';

const garage = `${serverURL}/garage`;

export async function getCars(): Promise<CarObj[]> {
  const response = await fetch(`${garage}`);
  return response.json();
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