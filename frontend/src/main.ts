import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

<<<<<<< HEAD
import { AppRoutingModule } from './app/app-routing.module';
=======
import { AppModule } from './app/app.module';
>>>>>>> d85ecb19aa8aea7b81a2dfc35bdeb9875e00d89d
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppRoutingModule)
=======
platformBrowserDynamic().bootstrapModule(AppModule)
>>>>>>> d85ecb19aa8aea7b81a2dfc35bdeb9875e00d89d
  .catch(err => console.error(err));
