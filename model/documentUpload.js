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
exports.DocumentUpload = void 0;
var DocumentUpload = /** @class */ (function () {
    function DocumentUpload() {
    }
    DocumentUpload.getAttributeTypeMap = function () {
        return DocumentUpload.attributeTypeMap;
    };
    DocumentUpload.discriminator = undefined;
    DocumentUpload.attributeTypeMap = [
        {
            "name": "documentUploadedId",
            "baseName": "documentUploadedId",
            "type": "string"
        }
    ];
    return DocumentUpload;
}());
exports.DocumentUpload = DocumentUpload;
