import { CarObj } from '../../framework/tools/interfaces';

export function createCarImg(color: string): string {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="85" height="60" viewBox="0 0 252.9 176" xml:space="preserve">
      <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
      \t<path d="M 75.099 61.775 c -4.661 0 -8.453 -3.792 -8.453 -8.453 s 3.792 -8.453 8.453 -8.453 s 8.453 3.792 8.453 8.453 S 79.76 61.775 75.099 61.775 z M 75.099 47.869 c -3.007 0 -5.453 2.446 -5.453 5.453 s 2.446 5.453 5.453 5.453 s 5.453 -2.446 5.453 -5.453 S 78.105 47.869 75.099 47.869 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      \t<path d="M 17.819 61.775 c -4.661 0 -8.453 -3.792 -8.453 -8.453 s 3.792 -8.453 8.453 -8.453 c 4.661 0 8.453 3.792 8.453 8.453 S 22.48 61.775 17.819 61.775 z M 17.819 47.869 c -3.006 0 -5.453 2.446 -5.453 5.453 s 2.446 5.453 5.453 5.453 c 3.007 0 5.453 -2.446 5.453 -5.453 S 20.826 47.869 17.819 47.869 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      \t<path d="M 75.1 56.319 c -0.79 0 -1.56 -0.319 -2.12 -0.88 c -0.14 -0.13 -0.27 -0.29 -0.38 -0.449 c -0.1 -0.16 -0.2 -0.341 -0.27 -0.521 c -0.08 -0.18 -0.141 -0.37 -0.17 -0.56 c -0.04 -0.2 -0.061 -0.391 -0.061 -0.591 c 0 -0.189 0.021 -0.39 0.061 -0.579 c 0.029 -0.2 0.09 -0.381 0.17 -0.57 c 0.069 -0.18 0.17 -0.351 0.27 -0.51 c 0.11 -0.17 0.24 -0.32 0.38 -0.46 c 0.13 -0.141 0.29 -0.261 0.45 -0.37 c 0.17 -0.11 0.34 -0.2 0.521 -0.28 c 0.18 -0.07 0.369 -0.13 0.56 -0.17 c 0.39 -0.08 0.79 -0.08 1.18 0 c 0.19 0.04 0.37 0.1 0.561 0.17 c 0.18 0.08 0.35 0.17 0.51 0.28 c 0.17 0.109 0.32 0.229 0.46 0.37 c 0.14 0.14 0.26 0.29 0.37 0.46 c 0.11 0.159 0.2 0.33 0.28 0.51 c 0.069 0.189 0.13 0.37 0.17 0.57 c 0.04 0.189 0.06 0.39 0.06 0.579 c 0 0.2 -0.02 0.391 -0.06 0.591 c -0.04 0.189 -0.101 0.38 -0.17 0.56 c -0.08 0.18 -0.17 0.35 -0.28 0.521 c -0.11 0.159 -0.23 0.319 -0.37 0.449 c -0.14 0.141 -0.29 0.271 -0.46 0.38 c -0.16 0.101 -0.33 0.2 -0.51 0.271 c -0.19 0.08 -0.37 0.14 -0.561 0.17 C 75.49 56.3 75.29 56.319 75.1 56.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      \t<path d="M 17.82 56.319 c -0.2 0 -0.39 -0.02 -0.59 -0.06 c -0.19 -0.04 -0.38 -0.09 -0.56 -0.17 c -0.18 -0.07 -0.35 -0.17 -0.52 -0.271 c -0.16 -0.109 -0.31 -0.239 -0.45 -0.38 c -0.56 -0.56 -0.88 -1.33 -0.88 -2.12 c 0 -0.189 0.02 -0.39 0.06 -0.579 c 0.04 -0.19 0.09 -0.381 0.17 -0.561 c 0.07 -0.189 0.17 -0.36 0.27 -0.52 c 0.11 -0.17 0.24 -0.32 0.38 -0.46 c 0.14 -0.141 0.29 -0.261 0.45 -0.37 c 0.17 -0.11 0.34 -0.2 0.52 -0.28 c 0.18 -0.07 0.37 -0.13 0.56 -0.17 c 0.39 -0.08 0.79 -0.08 1.17 0 c 0.2 0.04 0.38 0.1 0.57 0.17 c 0.18 0.08 0.35 0.17 0.51 0.28 c 0.17 0.109 0.32 0.229 0.46 0.37 c 0.14 0.14 0.26 0.29 0.37 0.46 c 0.11 0.159 0.2 0.33 0.28 0.52 c 0.07 0.18 0.13 0.37 0.17 0.561 c 0.04 0.189 0.06 0.39 0.06 0.579 c 0 0.79 -0.32 1.57 -0.88 2.12 c -0.14 0.141 -0.29 0.271 -0.46 0.38 c -0.16 0.101 -0.33 0.2 -0.51 0.271 c -0.18 0.08 -0.37 0.13 -0.57 0.17 C 18.21 56.3 18.01 56.319 17.82 56.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      \t<path d="M 79.759 40.867 l -14.705 -3.771 l -7.009 -4.067 c -5.417 -3.143 -11.59 -4.805 -17.852 -4.805 h -7.28 c -0.005 0 -0.009 0 -0.014 0 h -3.284 c -6.824 0 -13.343 2.551 -18.355 7.183 c -0.719 0.665 -1.654 1.03 -2.634 1.03 H 6.388 c -2.718 0 -5.013 2.035 -5.339 4.734 l -1.013 8.413 c -0.277 2.305 1.053 4.468 3.235 5.262 l 4.599 1.67 c -0.324 -1.008 -0.504 -2.08 -0.504 -3.195 c 0 -5.764 4.689 -10.453 10.453 -10.453 s 10.453 4.689 10.453 10.453 c 0 1.581 -0.363 3.075 -0.994 4.42 H 65.64 c -0.631 -1.345 -0.994 -2.839 -0.994 -4.42 c 0 -5.764 4.689 -10.453 10.453 -10.453 s 10.453 4.689 10.453 10.453 c 0 1.379 -0.275 2.693 -0.762 3.899 l 2.915 -0.466 c 1.33 -0.212 2.295 -1.344 2.295 -2.69 C 90 47.841 85.788 42.414 79.759 40.867 z M 26.937 39.164 c -1.307 0 -2.492 -0.61 -3.251 -1.673 c -0.76 -1.063 -0.953 -2.382 -0.529 -3.618 l 0.656 -1.916 c 1.883 -0.467 3.825 -0.732 5.803 -0.732 h 2.299 l 3.366 7.939 H 26.937 z M 56.358 39.164 H 38.539 l -3.366 -7.939 h 5.02 c 5.734 0 11.386 1.521 16.346 4.399 l 4.582 2.658 C 59.595 38.856 58 39.164 56.358 39.164 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      </g>
     </svg>  
  `;
}

export function createCarUI(config: CarObj): string {

  const templateCar = `
        <div class="buttons">
            <button class="button button--edit">Edit car</button>
            <button class="button button--remove">Remove car</button>
        </div>
        <div class="car-game">
            <div class="game-controls">
            <button class="button button--start">Start</button>
            <button class="button button--stop" disabled>Stop</button>
            </div>
            <div class="car-info">
            <div class="car-title"><h4>${config.name}</h4></div>
            <div class="car-block">
              <div class="car-img">
                ${createCarImg(config.color)}
              </div>
              <div class="flag">
              <svg fill="#000000" width="60" height="60" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 464.551 464.551" xml:space="preserve">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                    <g> <path d="M388.347,68.092c0.059,0.029,0.117,0.053,0.177,0.08c-0.213-0.127-0.407-0.237-0.614-0.358 c-0.958-0.624-20.782-15.102-57.523-15.43v-0.006c-0.013,0-0.03,0-0.042,0c-0.041,0-0.077,0-0.112,0v0.015 c-62.914,4.9-117.94,69.724-188.16,18.985c0,61.502,0,123.009,0,184.511c22.768,16.455,43.935,20.74,64.303,18.879 c0-0.012,0-0.012,0-0.023c14.325-2.164,41.053-10.628,40.906-10.557c46.647-17.845,91.746-47.425,145.883-8.299 c0-61.508,0-123.009,0-184.511C391.55,70.217,389.942,69.132,388.347,68.092z M330.386,54.698 c24.328-0.322,35.417,4.43,55.892,13.728c1.413,1.306,2.837,1.398,4.345,2.894c0,24.089,0,36.138,0,60.233 c-24.087-23.962-36.145-25.487-60.23-22.304C330.386,87.139,330.386,75.132,330.386,54.698z M329.629,233.629 c0-24.184,0-41.349,0-65.53c-24.601,3.494-36.907,11.523-61.508,24.539c0,24.178,0,36.266,0,60.438l-16.408,7.519 c0,0-29.119,10.722-45.338,12.265c0-20.823,0-32.894,0-55.266c-24.606,3.721-36.91,2.479-61.513-21.84c0,24.181,0,36.274,0,60.45 c-0.104-0.101-0.151-0.154-0.254-0.255c0.006-39.734,0-79.464,0-119.208c24.604,24.471,36.901,25.774,61.504,22.13 c0-24.095,0-41.026,0-65.122c25.109-3.715,37.669-7.238,62.772-20.516c0,24.095,0,36.138,0,60.233 c24.347-12.88,36.522-20.735,60.875-24.148c0,24.604,0,36.904,0,61.507c24.347-3.414,36.517-2.003,60.869,22.212 c0,23.085,0,34.62,0,57.698C368.25,234.262,353.213,231.583,329.629,233.629z M206.487,158.828 c24.601-3.766,36.904-11.857,61.504-24.879c0,24.604,0,36.904,0,61.508c-24.595,13.013-36.898,21.119-61.504,24.875 C206.487,195.723,206.487,183.432,206.487,158.828z M142.071,35.352c0,12.005-6,22.597-15.144,28.986v380.015 c0,11.153-9.043,20.197-20.2,20.197c-11.153,0-20.197-9.044-20.197-20.197V64.333c-9.144-6.389-15.144-16.976-15.144-28.986 C71.387,15.82,87.216,0,106.734,0C126.242,0.006,142.071,15.829,142.071,35.352z"></path> </g>
                </g>
               </svg>
              </div>
            </div>
            
        </div>
        </div>   
  `;

  return templateCar;
}

export function getCarNameColor(edit?: boolean): CarObj {
  const editFlag: string = edit ? '-edit' : '';
  const carName: string = (document.querySelector(`.input-car-name${editFlag}`) as HTMLInputElement).value;
  const carColor: string = (document.querySelector(`.color-picker${editFlag}`) as HTMLInputElement).value;
  return { name: `${carName}`, color: `${carColor}` };
}

export function gerCurrentCarInfo(elem: Event): number | undefined {
  const target = elem.target as HTMLElement;
  const carEl = target.closest('.car') as HTMLElement;
  const carID: string | null = carEl.getAttribute('data-id');
  return carID ? +carID : undefined;
}

export function getCarControls(carId: number):{ carEl: HTMLElement, startButton: HTMLElement, stopButton: HTMLElement } {
  const carEl = document.querySelector(`[data-id = '${carId}']`) as HTMLElement;
  const startButton = carEl.querySelector('.button--start') as HTMLElement;
  const stopButton = carEl.querySelector('.button--stop') as HTMLElement;
  return { carEl, startButton, stopButton };
}
