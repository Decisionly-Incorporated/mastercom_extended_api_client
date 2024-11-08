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
exports.CaseDocumentAttributes = void 0;
var CaseDocumentAttributes = /** @class */ (function () {
    function CaseDocumentAttributes() {
    }
    CaseDocumentAttributes.getAttributeTypeMap = function () {
        return CaseDocumentAttributes.attributeTypeMap;
    };
    CaseDocumentAttributes.discriminator = undefined;
    CaseDocumentAttributes.attributeTypeMap = [
        {
            "name": "caseId",
            "baseName": "caseId",
            "type": "string"
        },
        {
            "name": "documentStatus",
            "baseName": "documentStatus",
            "type": "string"
        }
    ];
    return CaseDocumentAttributes;
}());
exports.CaseDocumentAttributes = CaseDocumentAttributes;
