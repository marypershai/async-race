import { MPModule } from '../framework/index';
import { appComponent } from './app.component';
import { ModuleConfig } from '../framework/tools/interfaces';

class AppModule extends MPModule {
  constructor(config: ModuleConfig) {
    super(config);
  }
}

export const appModule = new AppModule({
  components: [
    appComponent,
  ],
  bootstrap: appComponent,
});