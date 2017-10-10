import { Injectable } from '@angular/core';

declare var WindowsAzure: any;

@Injectable()
export class AzureMobileAppServicesClientService {
    private client: any;

    public init(url: string): void {
        this.client = new WindowsAzure.MobileServiceClient(url);
    }
}
