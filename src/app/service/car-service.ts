import { CarObj } from '../../framework/tools/interfaces';

export function createCarUI(config: CarObj): string {

  const templateCar = `
    <div class='car'>
        <div class="buttons">
            <button class="button button--edit">Edit car</button>
            <button class="button button--remove">Remove car</button>
        </div>
        <div class="car-game">
            <div class="game-controls">
            <button class="button button--start">Start</button>
            <button class="button button--stop">Stop</button>
            </div>
            <div class="car-info">
            <div class="car-title"><h4>${config.name}</h4></div>
            <div class="car-img">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="125" height="95" viewBox="0 0 256 200" xml:space="preserve">
                <defs>
                </defs>
                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${config.color}; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                \t<path d="M 75.099 61.775 c -4.661 0 -8.453 -3.792 -8.453 -8.453 s 3.792 -8.453 8.453 -8.453 s 8.453 3.792 8.453 8.453 S 79.76 61.775 75.099 61.775 z M 75.099 47.869 c -3.007 0 -5.453 2.446 -5.453 5.453 s 2.446 5.453 5.453 5.453 s 5.453 -2.446 5.453 -5.453 S 78.105 47.869 75.099 47.869 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                \t<path d="M 17.819 61.775 c -4.661 0 -8.453 -3.792 -8.453 -8.453 s 3.792 -8.453 8.453 -8.453 c 4.661 0 8.453 3.792 8.453 8.453 S 22.48 61.775 17.819 61.775 z M 17.819 47.869 c -3.006 0 -5.453 2.446 -5.453 5.453 s 2.446 5.453 5.453 5.453 c 3.007 0 5.453 -2.446 5.453 -5.453 S 20.826 47.869 17.819 47.869 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                \t<path d="M 75.1 56.319 c -0.79 0 -1.56 -0.319 -2.12 -0.88 c -0.14 -0.13 -0.27 -0.29 -0.38 -0.449 c -0.1 -0.16 -0.2 -0.341 -0.27 -0.521 c -0.08 -0.18 -0.141 -0.37 -0.17 -0.56 c -0.04 -0.2 -0.061 -0.391 -0.061 -0.591 c 0 -0.189 0.021 -0.39 0.061 -0.579 c 0.029 -0.2 0.09 -0.381 0.17 -0.57 c 0.069 -0.18 0.17 -0.351 0.27 -0.51 c 0.11 -0.17 0.24 -0.32 0.38 -0.46 c 0.13 -0.141 0.29 -0.261 0.45 -0.37 c 0.17 -0.11 0.34 -0.2 0.521 -0.28 c 0.18 -0.07 0.369 -0.13 0.56 -0.17 c 0.39 -0.08 0.79 -0.08 1.18 0 c 0.19 0.04 0.37 0.1 0.561 0.17 c 0.18 0.08 0.35 0.17 0.51 0.28 c 0.17 0.109 0.32 0.229 0.46 0.37 c 0.14 0.14 0.26 0.29 0.37 0.46 c 0.11 0.159 0.2 0.33 0.28 0.51 c 0.069 0.189 0.13 0.37 0.17 0.57 c 0.04 0.189 0.06 0.39 0.06 0.579 c 0 0.2 -0.02 0.391 -0.06 0.591 c -0.04 0.189 -0.101 0.38 -0.17 0.56 c -0.08 0.18 -0.17 0.35 -0.28 0.521 c -0.11 0.159 -0.23 0.319 -0.37 0.449 c -0.14 0.141 -0.29 0.271 -0.46 0.38 c -0.16 0.101 -0.33 0.2 -0.51 0.271 c -0.19 0.08 -0.37 0.14 -0.561 0.17 C 75.49 56.3 75.29 56.319 75.1 56.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                \t<path d="M 17.82 56.319 c -0.2 0 -0.39 -0.02 -0.59 -0.06 c -0.19 -0.04 -0.38 -0.09 -0.56 -0.17 c -0.18 -0.07 -0.35 -0.17 -0.52 -0.271 c -0.16 -0.109 -0.31 -0.239 -0.45 -0.38 c -0.56 -0.56 -0.88 -1.33 -0.88 -2.12 c 0 -0.189 0.02 -0.39 0.06 -0.579 c 0.04 -0.19 0.09 -0.381 0.17 -0.561 c 0.07 -0.189 0.17 -0.36 0.27 -0.52 c 0.11 -0.17 0.24 -0.32 0.38 -0.46 c 0.14 -0.141 0.29 -0.261 0.45 -0.37 c 0.17 -0.11 0.34 -0.2 0.52 -0.28 c 0.18 -0.07 0.37 -0.13 0.56 -0.17 c 0.39 -0.08 0.79 -0.08 1.17 0 c 0.2 0.04 0.38 0.1 0.57 0.17 c 0.18 0.08 0.35 0.17 0.51 0.28 c 0.17 0.109 0.32 0.229 0.46 0.37 c 0.14 0.14 0.26 0.29 0.37 0.46 c 0.11 0.159 0.2 0.33 0.28 0.52 c 0.07 0.18 0.13 0.37 0.17 0.561 c 0.04 0.189 0.06 0.39 0.06 0.579 c 0 0.79 -0.32 1.57 -0.88 2.12 c -0.14 0.141 -0.29 0.271 -0.46 0.38 c -0.16 0.101 -0.33 0.2 -0.51 0.271 c -0.18 0.08 -0.37 0.13 -0.57 0.17 C 18.21 56.3 18.01 56.319 17.82 56.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                \t<path d="M 79.759 40.867 l -14.705 -3.771 l -7.009 -4.067 c -5.417 -3.143 -11.59 -4.805 -17.852 -4.805 h -7.28 c -0.005 0 -0.009 0 -0.014 0 h -3.284 c -6.824 0 -13.343 2.551 -18.355 7.183 c -0.719 0.665 -1.654 1.03 -2.634 1.03 H 6.388 c -2.718 0 -5.013 2.035 -5.339 4.734 l -1.013 8.413 c -0.277 2.305 1.053 4.468 3.235 5.262 l 4.599 1.67 c -0.324 -1.008 -0.504 -2.08 -0.504 -3.195 c 0 -5.764 4.689 -10.453 10.453 -10.453 s 10.453 4.689 10.453 10.453 c 0 1.581 -0.363 3.075 -0.994 4.42 H 65.64 c -0.631 -1.345 -0.994 -2.839 -0.994 -4.42 c 0 -5.764 4.689 -10.453 10.453 -10.453 s 10.453 4.689 10.453 10.453 c 0 1.379 -0.275 2.693 -0.762 3.899 l 2.915 -0.466 c 1.33 -0.212 2.295 -1.344 2.295 -2.69 C 90 47.841 85.788 42.414 79.759 40.867 z M 26.937 39.164 c -1.307 0 -2.492 -0.61 -3.251 -1.673 c -0.76 -1.063 -0.953 -2.382 -0.529 -3.618 l 0.656 -1.916 c 1.883 -0.467 3.825 -0.732 5.803 -0.732 h 2.299 l 3.366 7.939 H 26.937 z M 56.358 39.164 H 38.539 l -3.366 -7.939 h 5.02 c 5.734 0 11.386 1.521 16.346 4.399 l 4.582 2.658 C 59.595 38.856 58 39.164 56.358 39.164 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${config.color}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                </g>
              </svg>
            </div>
        </div>
        </div>   
    </div>
  `;

  return templateCar;
}