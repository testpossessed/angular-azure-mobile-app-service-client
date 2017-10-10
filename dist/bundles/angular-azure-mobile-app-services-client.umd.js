(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.angularAzureMobileAppServicesClient = global.angularAzureMobileAppServicesClient || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var AzureMobileAppServicesClientService = /** @class */ (function () {
    function AzureMobileAppServicesClientService() {
    }
    AzureMobileAppServicesClientService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /**
     * @nocollapse
     */
    AzureMobileAppServicesClientService.ctorParameters = function () { return []; };
    return AzureMobileAppServicesClientService;
}());

var AzureMobileAppServicesClientModule = /** @class */ (function () {
    function AzureMobileAppServicesClientModule() {
    }
    AzureMobileAppServicesClientModule.decorators = [
        { type: _angular_core.NgModule, args: [{ providers: [AzureMobileAppServicesClientService] },] },
    ];
    /**
     * @nocollapse
     */
    AzureMobileAppServicesClientModule.ctorParameters = function () { return []; };
    return AzureMobileAppServicesClientModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

exports.AzureMobileAppServicesClientModule = AzureMobileAppServicesClientModule;
exports.AzureMobileAppServicesClientService = AzureMobileAppServicesClientService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-azure-mobile-app-services-client.umd.js.map
