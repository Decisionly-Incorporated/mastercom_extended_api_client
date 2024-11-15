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
exports.ArbitrationCaseCreate = void 0;
var ArbitrationCaseCreate = /** @class */ (function () {
    function ArbitrationCaseCreate() {
    }
    ArbitrationCaseCreate.getAttributeTypeMap = function () {
        return ArbitrationCaseCreate.attributeTypeMap;
    };
    ArbitrationCaseCreate.discriminator = undefined;
    ArbitrationCaseCreate.attributeTypeMap = [
        {
            "name": "claimId",
            "baseName": "claimId",
            "type": "string"
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string"
        },
        {
            "name": "documentUploadedId",
            "baseName": "documentUploadedId",
            "type": "string"
        },
        {
            "name": "customerFilingNumber",
            "baseName": "customerFilingNumber",
            "type": "string"
        },
        {
            "name": "caseDisputeAmount",
            "baseName": "caseDisputeAmount",
            "type": "string"
        },
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string"
        }
    ];
    return ArbitrationCaseCreate;
}());
exports.ArbitrationCaseCreate = ArbitrationCaseCreate;
