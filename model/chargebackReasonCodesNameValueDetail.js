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
exports.ChargebackReasonCodesNameValueDetail = void 0;
var ChargebackReasonCodesNameValueDetail = /** @class */ (function () {
    function ChargebackReasonCodesNameValueDetail() {
    }
    ChargebackReasonCodesNameValueDetail.getAttributeTypeMap = function () {
        return ChargebackReasonCodesNameValueDetail.attributeTypeMap;
    };
    ChargebackReasonCodesNameValueDetail.discriminator = undefined;
    ChargebackReasonCodesNameValueDetail.attributeTypeMap = [
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
    return ChargebackReasonCodesNameValueDetail;
}());
exports.ChargebackReasonCodesNameValueDetail = ChargebackReasonCodesNameValueDetail;
