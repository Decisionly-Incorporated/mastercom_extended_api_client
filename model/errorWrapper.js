"use strict";
/**
 * Mastercom Extended API
 * The Mastercom Extended API consists of endpoints used by issuers and acquirers to manage Single Message System disputes.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: apisupport@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorWrapper = void 0;
/**
* A top level object for errors
*/
var ErrorWrapper = /** @class */ (function () {
    function ErrorWrapper() {
    }
    ErrorWrapper.getAttributeTypeMap = function () {
        return ErrorWrapper.attributeTypeMap;
    };
    ErrorWrapper.discriminator = undefined;
    ErrorWrapper.attributeTypeMap = [
        {
            "name": "errors",
            "baseName": "Errors",
            "type": "Errors"
        }
    ];
    return ErrorWrapper;
}());
exports.ErrorWrapper = ErrorWrapper;
