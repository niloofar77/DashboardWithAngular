import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { userReducer } from './features/settings/state/user.reducer';
// import { UserEffects } from './features/settings/state/user.effects';
import { provideHttpClient } from '@angular/common/http'; // جایگزین HttpClientModule

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(),             
    provideStore({ users: userReducer }),
  ]
}).catch(err => console.error(err));
