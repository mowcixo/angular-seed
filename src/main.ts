// import '@angular/compiler';
// import { ɵrenderComponent } from '@angular/core';
// import { AppComponent } from './app/app.component';

// ɵrenderComponent(AppComponent);
import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
