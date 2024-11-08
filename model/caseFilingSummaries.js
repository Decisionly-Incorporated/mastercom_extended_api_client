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
exports.CaseFilingSummaries = void 0;
/**
* Descriptive case filing summary object.
*/
var CaseFilingSummaries = /** @class */ (function () {
    function CaseFilingSummaries() {
    }
    CaseFilingSummaries.getAttributeTypeMap = function () {
        return CaseFilingSummaries.attributeTypeMap;
    };
    CaseFilingSummaries.discriminator = undefined;
    CaseFilingSummaries.attributeTypeMap = [
        {
            "name": "caseId",
            "baseName": "caseId",
            "type": "string"
        },
        {
            "name": "caseStatus",
            "baseName": "caseStatus",
            "type": "string"
        }
    ];
    return CaseFilingSummaries;
}());
exports.CaseFilingSummaries = CaseFilingSummaries;