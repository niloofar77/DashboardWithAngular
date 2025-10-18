import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideStore } from '@ngrx/store';
import { userReducer } from './features/settings/state/user.reducer';
import { HttpClient, provideHttpClient } from '@angular/common/http'; 



bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(),             
    provideStore({ users: userReducer }),
  ]
}).catch(err => console.error(err));

