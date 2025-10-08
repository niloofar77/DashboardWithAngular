import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

declare global {
  interface Window {
    ENV_BASE_URL?: string;
    ENV_LOGIN_URL?: string;
    ENV_GET_HEADER_URL?: string;
    ENV_GET_REFRESH_TOKEN?: string;
    ENV_ELASTIC_APM_SERVER_URL?: string;
    ENV_ELASTIC_APM_STATUS?: boolean;
    ENV_SUPER_WEB_NAV_SCRIPT_URL?: string;
    ENV_SUPER_WEB_NAV_CSS_URL?: string;
  }
}

@Injectable({ providedIn: 'root' })
export class EnvService {

  // -------------------------
  // URLs
  // -------------------------
  get BASE_URL(): string {
    return window.ENV_BASE_URL ?? environment.baseUrl;
  }   

//   get LOGIN_URL(): string {
//     return window.ENV_LOGIN_URL ?? environment.loginUrl;
//   }

  // -------------------------
  // API Endpoints
  // -------------------------
//   get GET_HEADER_URL(): string {
//     return window.ENV_GET_HEADER_URL ?? environment.getHeaderUrl;
//   }

//   get GET_REFRESH_TOKEN(): string {
//     return window.ENV_GET_REFRESH_TOKEN ?? environment.getRefreshToken;
//   }
 
  // External Services
  // -------------------------
//   get ELASTIC_APM_SERVER_URL(): string {
//     return window.ENV_ELASTIC_APM_SERVER_URL ?? environment.elasticApmServerUrl;
//   }

  get ENV_ELASTIC_APM_STATUS(): boolean {
    return window.ENV_ELASTIC_APM_STATUS ?? environment.elasticApmStatus;
  }

//   get SUPER_WEB_NAV_SCRIPT_URL(): string {
//     return window.ENV_SUPER_WEB_NAV_SCRIPT_URL ?? environment.navScriptUrl;
//   }

//   get SUPER_WEB_NAV_CSS_URL(): string {
//     return window.ENV_SUPER_WEB_NAV_CSS_URL ?? environment.navCssUrl;
//   }
}
