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
exports.ChargebackDocIndicatorsNameValueDetail = void 0;
var ChargebackDocIndicatorsNameValueDetail = /** @class */ (function () {
    function ChargebackDocIndicatorsNameValueDetail() {
    }
    ChargebackDocIndicatorsNameValueDetail.getAttributeTypeMap = function () {
        return ChargebackDocIndicatorsNameValueDetail.attributeTypeMap;
    };
    ChargebackDocIndicatorsNameValueDetail.discriminator = undefined;
    ChargebackDocIndicatorsNameValueDetail.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }
    ];
    return ChargebackDocIndicatorsNameValueDetail;
}());
exports.ChargebackDocIndicatorsNameValueDetail = ChargebackDocIndicatorsNameValueDetail;
