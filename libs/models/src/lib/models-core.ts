import { InjectionToken } from "@angular/core"
// export function modelsCore(): string {
//   return 'models-core';
// }
export interface ConfigModel {
  production:  boolean;
  baseUrl?: string;
}

export const APP_CONFIG = new InjectionToken<ConfigModel>('APP_CONFIG')
