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
exports.ChargebackStatusResponseStructure = void 0;
var ChargebackStatusResponseStructure = /** @class */ (function () {
    function ChargebackStatusResponseStructure() {
    }
    ChargebackStatusResponseStructure.getAttributeTypeMap = function () {
        return ChargebackStatusResponseStructure.attributeTypeMap;
    };
    ChargebackStatusResponseStructure.discriminator = undefined;
    ChargebackStatusResponseStructure.attributeTypeMap = [
        {
            "name": "chargebackId",
            "baseName": "chargebackId",
            "type": "string"
        },
        {
            "name": "claimId",
            "baseName": "claimId",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }
    ];
    return ChargebackStatusResponseStructure;
}());
exports.ChargebackStatusResponseStructure = ChargebackStatusResponseStructure;