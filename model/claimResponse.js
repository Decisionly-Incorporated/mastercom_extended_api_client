"use strict";
/**
 * MasterCom
 * MasterCom
 *
 * The version of the OpenAPI document: v6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimResponse = void 0;
var ClaimResponse = /** @class */ (function () {
    function ClaimResponse() {
    }
    ClaimResponse.getAttributeTypeMap = function () {
        return ClaimResponse.attributeTypeMap;
    };
    ClaimResponse.discriminator = undefined;
    ClaimResponse.attributeTypeMap = [
        {
            "name": "claimId",
            "baseName": "claimId",
            "type": "string"
        }
    ];
    return ClaimResponse;
}());
exports.ClaimResponse = ClaimResponse;