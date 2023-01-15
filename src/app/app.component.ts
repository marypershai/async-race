import { MPComponent } from '../framework/index';
import { ComponentConfig } from '../framework/tools/interfaces';
import { appHeader } from './common/app.header';

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
  childComponents: [appHeader],
});
