import { MPModule } from '../framework/index';
import { appComponent } from './app.component';
import { ModuleConfig } from '../framework/tools/interfaces';
import { appRoutes } from './app.routes';

class AppModule extends MPModule {
  constructor(config: ModuleConfig) {
    super(config);
  }
}

export const appModule = new AppModule({
  components: [
    appComponent,
  ],
  routes: appRoutes,
  bootstrap: appComponent,
});