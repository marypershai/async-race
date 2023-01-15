import { MPComponent } from '../framework/index';
import { ComponentConfig } from '../framework/tools/interfaces';

export class AppComponent extends MPComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const appComponent = new AppComponent({
  selector: 'app-root',
  template: `
        <app-header></app-header>
        <main>
        <router-outlet></router-outlet>
        </main>
        <app-footer></app-footer>
    `,
  childComponents: [],
});
