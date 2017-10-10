import { NgModule } from '@angular/core';
import 'azure-mobile-apps-client';

import { AzureMobileAppServicesClientService } from './service';

@NgModule({providers: [ AzureMobileAppServicesClientService ]})
export class AzureMobileAppServicesClientModule {}