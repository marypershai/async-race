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
  // dynamicRoutes: (id: string) => void;
}