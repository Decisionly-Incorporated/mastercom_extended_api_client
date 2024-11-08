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
exports.SingleMessageChargebackDetails = void 0;
var SingleMessageChargebackDetails = /** @class */ (function () {
    function SingleMessageChargebackDetails() {
    }
    SingleMessageChargebackDetails.getAttributeTypeMap = function () {
        return SingleMessageChargebackDetails.attributeTypeMap;
    };
    SingleMessageChargebackDetails.discriminator = undefined;
    SingleMessageChargebackDetails.attributeTypeMap = [
        {
            "name": "controlNumber",
            "baseName": "controlNumber",
            "type": "string"
        },
        {
            "name": "program",
            "baseName": "program",
            "type": "string"
        },
        {
            "name": "securityBulletinNumber",
            "baseName": "securityBulletinNumber",
            "type": "string"
        },
        {
            "name": "noShowReason",
            "baseName": "noShowReason",
            "type": "string"
        },
        {
            "name": "noShowCode",
            "baseName": "noShowCode",
            "type": "string"
        },
        {
            "name": "cancelNumber",
            "baseName": "cancelNumber",
            "type": "string"
        },
        {
            "name": "settlementDate",
            "baseName": "settlementDate",
            "type": "string"
        },
        {
            "name": "issuerSettlementAmount",
            "baseName": "issuerSettlementAmount",
            "type": "AmountDetails"
        },
        {
            "name": "issuerSettlementAmountIndicator",
            "baseName": "issuerSettlementAmountIndicator",
            "type": "string"
        },
        {
            "name": "acquirerSettlementAmount",
            "baseName": "acquirerSettlementAmount",
            "type": "AmountDetails"
        },
        {
            "name": "acquirerSettlementAmountIndicator",
            "baseName": "acquirerSettlementAmountIndicator",
            "type": "string"
        }
    ];
    return SingleMessageChargebackDetails;
}());
exports.SingleMessageChargebackDetails = SingleMessageChargebackDetails;
