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
exports.FraudResponse = void 0;
var FraudResponse = /** @class */ (function () {
    function FraudResponse() {
    }
    FraudResponse.getAttributeTypeMap = function () {
        return FraudResponse.attributeTypeMap;
    };
    FraudResponse.discriminator = undefined;
    FraudResponse.attributeTypeMap = [
        {
            "name": "fraudId",
            "baseName": "fraudId",
            "type": "string"
        }
    ];
    return FraudResponse;
}());
exports.FraudResponse = FraudResponse;
