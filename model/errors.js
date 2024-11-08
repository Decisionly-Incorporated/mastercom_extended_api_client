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
exports.Errors = void 0;
/**
* Object that contains the list of errors
*/
var Errors = /** @class */ (function () {
    function Errors() {
    }
    Errors.getAttributeTypeMap = function () {
        return Errors.attributeTypeMap;
    };
    Errors.discriminator = undefined;
    Errors.attributeTypeMap = [
        {
            "name": "error",
            "baseName": "Error",
            "type": "Array<Error>"
        }
    ];
    return Errors;
}());
exports.Errors = Errors;
