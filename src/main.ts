import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


// declare const require: any;

// const context = require.context('./app/angularjs', true, /\.js$/);

// context.keys().forEach((file: any) => {
//     try {
//         context(file);
//     } catch (err) {
//         console.log(err, file);
//     }
// });

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
