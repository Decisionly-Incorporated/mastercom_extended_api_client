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
exports.ClaimsList = void 0;
var ClaimsList = /** @class */ (function () {
    function ClaimsList() {
    }
    ClaimsList.getAttributeTypeMap = function () {
        return ClaimsList.attributeTypeMap;
    };
    ClaimsList.discriminator = undefined;
    ClaimsList.attributeTypeMap = [
        {
            "name": "claimsData",
            "baseName": "claimsData",
            "type": "Array<Claim>"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        }
    ];
    return ClaimsList;
}());
exports.ClaimsList = ClaimsList;
