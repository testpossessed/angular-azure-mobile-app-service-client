import { Injectable } from '@angular/core';
export class AzureMobileAppServicesClientService {
    /**
     * @param {?} url
     * @return {?}
     */
    init(url) {
        this.client = new WindowsAzure.MobileServiceClient(url);
    }
}
AzureMobileAppServicesClientService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
AzureMobileAppServicesClientService.ctorParameters = () => [];
function AzureMobileAppServicesClientService_tsickle_Closure_declarations() {
    /** @type {?} */
    AzureMobileAppServicesClientService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    AzureMobileAppServicesClientService.ctorParameters;
    /** @type {?} */
    AzureMobileAppServicesClientService.prototype.client;
}
//# sourceMappingURL=service.js.map