import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { userReducer } from './features/settings/state/user.reducer';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideStore({ users: userReducer })  
  ]
})
.catch(err => console.error(err));
