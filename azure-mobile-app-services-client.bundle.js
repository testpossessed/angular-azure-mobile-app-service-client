(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global['azure-mobile-app-services-client'] = {}),global.core));
}(this, (function (exports,core) { 'use strict';

var AzureMobileAppServicesClientService = /** @class */ (function () {
    function AzureMobileAppServicesClientService() {
    }
    AzureMobileAppServicesClientService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    AzureMobileAppServicesClientService.ctorParameters = function () { return []; };
    return AzureMobileAppServicesClientService;
}());

var AzureMobileAppServicesClientModule = /** @class */ (function () {
    function AzureMobileAppServicesClientModule() {
    }
    AzureMobileAppServicesClientModule.decorators = [
        { type: core.NgModule, args: [{ providers: [AzureMobileAppServicesClientService] },] },
    ];
    /** @nocollapse */
    AzureMobileAppServicesClientModule.ctorParameters = function () { return []; };
    return AzureMobileAppServicesClientModule;
}());

exports.AzureMobileAppServicesClientModule = AzureMobileAppServicesClientModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
