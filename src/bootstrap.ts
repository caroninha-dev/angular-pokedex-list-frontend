import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import 'zone.js'

import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

declare const require: any;
const ngVersion = require('../package.json').dependencies['@angular/core'];
(window as any).plattform = (window as any).plattform || {};
let platform = (window as any).plattform[ngVersion];
if (!platform) {
  platform = platformBrowser();
  (window as any).plattform[ngVersion] = platform;
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
