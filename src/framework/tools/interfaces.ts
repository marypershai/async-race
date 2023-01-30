import { AppComponent } from '../../app/app.component';
export type Components = AppComponent;

export interface ComponentConfig {
  template: string;
  selector: string;
  childComponents: Components[];
}

export interface ModuleConfig {
  components: Components[];
  bootstrap: AppComponent;
  routes: RoutesObj[];
}

export interface RoutesObj {
  path: string;
  component: Components;
}

export interface CarObj {
  name: string,
  color: string,
  id?: number
}

export interface WinnerObj {
  id: number,
  wins: number,
  time: number
}

export interface EngineObj {
  velocity: number,
  distance: number,
}