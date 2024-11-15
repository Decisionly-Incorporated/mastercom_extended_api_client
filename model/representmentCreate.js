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
exports.RepresentmentCreate = void 0;
var RepresentmentCreate = /** @class */ (function () {
    function RepresentmentCreate() {
    }
    RepresentmentCreate.getAttributeTypeMap = function () {
        return RepresentmentCreate.attributeTypeMap;
    };
    RepresentmentCreate.discriminator = undefined;
    RepresentmentCreate.attributeTypeMap = [
        {
            "name": "disputeAmount",
            "baseName": "disputeAmount",
            "type": "string"
        },
        {
            "name": "reasonCode",
            "baseName": "reasonCode",
            "type": "string"
        },
        {
            "name": "documentIndicator",
            "baseName": "documentIndicator",
            "type": "boolean"
        },
        {
            "name": "documentMemo",
            "baseName": "documentMemo",
            "type": "string"
        },
        {
            "name": "documentUploadedId",
            "baseName": "documentUploadedId",
            "type": "string"
        },
        {
            "name": "additionalInformation",
            "baseName": "additionalInformation",
            "type": "string"
        },
        {
            "name": "singleMessage",
            "baseName": "singleMessage",
            "type": "RepresentmentSingleMessage"
        }
    ];
    return RepresentmentCreate;
}());
exports.RepresentmentCreate = RepresentmentCreate;
