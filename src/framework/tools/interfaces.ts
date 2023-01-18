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
  // dynamicRoutes: (id: string) => void;
}

export interface RoutesObj {
  path: string;
  component: Components;
}

export interface CarObj {
  name: string,
  color: string
}