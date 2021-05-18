import { Component, Inject } from '@angular/core';
import { APP_CONFIG, ConfigModel } from '@tiq-soft/models';

@Component({
  template: `
    <p class="bg-red-500">
      mychurch-admin works!
    </p>
    <pre>{{ appConfig | json}}</pre>
  `,
  styles: [
  ]
})
export class MychurchAdminComponent {

  constructor(@Inject(APP_CONFIG) public appConfig: ConfigModel) {  }


}
