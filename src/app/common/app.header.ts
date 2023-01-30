import { ComponentConfig } from '../../framework/tools/interfaces';
import { MPComponent } from '../../framework/index';


export class AppHeader extends MPComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }

}

export const appHeader = new AppHeader({
  selector: 'app-header',
  template: `
        <header class="menu">
          <a href="#" class="menu-item">Garage</a>
          <a href="#winners" class="menu-item">Winners</a>
        </header>
    `,
  childComponents: [],
});
