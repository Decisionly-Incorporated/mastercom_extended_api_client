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
exports.FeeMessageTextsNameValueDetail = void 0;
var FeeMessageTextsNameValueDetail = /** @class */ (function () {
    function FeeMessageTextsNameValueDetail() {
    }
    FeeMessageTextsNameValueDetail.getAttributeTypeMap = function () {
        return FeeMessageTextsNameValueDetail.attributeTypeMap;
    };
    FeeMessageTextsNameValueDetail.discriminator = undefined;
    FeeMessageTextsNameValueDetail.attributeTypeMap = [
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
    return FeeMessageTextsNameValueDetail;
}());
exports.FeeMessageTextsNameValueDetail = FeeMessageTextsNameValueDetail;
