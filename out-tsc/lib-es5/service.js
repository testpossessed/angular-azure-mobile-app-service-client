import { Injectable } from '@angular/core';
var AzureMobileAppServicesClientService = /** @class */ (function () {
    function AzureMobileAppServicesClientService() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    AzureMobileAppServicesClientService.prototype.init = function (url) {
        this.client = new WindowsAzure.MobileServiceClient(url);
    };
    AzureMobileAppServicesClientService.decorators = [
        { type: Injectable },
    ];
    /**
     * @nocollapse
     */
    AzureMobileAppServicesClientService.ctorParameters = function () { return []; };
    return AzureMobileAppServicesClientService;
}());
export { AzureMobileAppServicesClientService };
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