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
exports.ChargebackReversal = void 0;
var ChargebackReversal = /** @class */ (function () {
    function ChargebackReversal() {
    }
    ChargebackReversal.getAttributeTypeMap = function () {
        return ChargebackReversal.attributeTypeMap;
    };
    ChargebackReversal.discriminator = undefined;
    ChargebackReversal.attributeTypeMap = [
        {
            "name": "reasonCode",
            "baseName": "reasonCode",
            "type": "string"
        },
        {
            "name": "singleMessage",
            "baseName": "singleMessage",
            "type": "ChargebackSingleMessageReversal"
        }
    ];
    return ChargebackReversal;
}());
exports.ChargebackReversal = ChargebackReversal;
