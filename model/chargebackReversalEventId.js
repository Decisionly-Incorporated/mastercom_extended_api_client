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
exports.ChargebackReversalEventId = void 0;
var ChargebackReversalEventId = /** @class */ (function () {
    function ChargebackReversalEventId() {
    }
    ChargebackReversalEventId.getAttributeTypeMap = function () {
        return ChargebackReversalEventId.attributeTypeMap;
    };
    ChargebackReversalEventId.discriminator = undefined;
    ChargebackReversalEventId.attributeTypeMap = [
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "string"
        }
    ];
    return ChargebackReversalEventId;
}());
exports.ChargebackReversalEventId = ChargebackReversalEventId;