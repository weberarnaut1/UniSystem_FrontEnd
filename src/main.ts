import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1JEaF5cXmRCeUx1RXxbf1x1ZFRHalxYTnRaUiweQnxTdEBjX3xecXZVR2RVVEF1VkleYw==');

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
