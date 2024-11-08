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
exports.CaseCreateCaseId = void 0;
var CaseCreateCaseId = /** @class */ (function () {
    function CaseCreateCaseId() {
    }
    CaseCreateCaseId.getAttributeTypeMap = function () {
        return CaseCreateCaseId.attributeTypeMap;
    };
    CaseCreateCaseId.discriminator = undefined;
    CaseCreateCaseId.attributeTypeMap = [
        {
            "name": "caseId",
            "baseName": "caseId",
            "type": "string"
        }
    ];
    return CaseCreateCaseId;
}());
exports.CaseCreateCaseId = CaseCreateCaseId;