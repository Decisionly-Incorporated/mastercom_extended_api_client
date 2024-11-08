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
exports.Documents = void 0;
var Documents = /** @class */ (function () {
    function Documents() {
    }
    Documents.getAttributeTypeMap = function () {
        return Documents.attributeTypeMap;
    };
    Documents.discriminator = undefined;
    Documents.attributeTypeMap = [
        {
            "name": "documentMemo",
            "baseName": "documentMemo",
            "type": "string"
        },
        {
            "name": "documentUploadedId",
            "baseName": "documentUploadedId",
            "type": "string"
        }
    ];
    return Documents;
}());
exports.Documents = Documents;