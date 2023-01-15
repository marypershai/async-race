import { AppComponent } from '../../app/app.component';
import { Components, ModuleConfig } from '../tools/interfaces';

export class Module {
  private components: Components[];

  private bootstrapComponent: AppComponent;

  constructor(private config: ModuleConfig) {
    this.components = config.components;
    this.bootstrapComponent = this.config.bootstrap;
  }

  start() {
    this.initComponents();
  }

  private initComponents(): void {
    this.bootstrapComponent.render();
    this.components.forEach(this.renderComponent.bind(this));
  }

  private renderComponent(component: Components): void {
    component.render();
  }
}