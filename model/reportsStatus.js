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
exports.ReportsStatus = void 0;
var ReportsStatus = /** @class */ (function () {
    function ReportsStatus() {
    }
    ReportsStatus.getAttributeTypeMap = function () {
        return ReportsStatus.attributeTypeMap;
    };
    ReportsStatus.discriminator = undefined;
    ReportsStatus.attributeTypeMap = [
        {
            "name": "reportDefinitionId",
            "baseName": "reportDefinitionId",
            "type": "string"
        },
        {
            "name": "reportDefinitionName",
            "baseName": "reportDefinitionName",
            "type": "string"
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "string"
        },
        {
            "name": "reportStatus",
            "baseName": "reportStatus",
            "type": "string"
        },
        {
            "name": "requestCreatedDateTime",
            "baseName": "requestCreatedDateTime",
            "type": "string"
        },
        {
            "name": "requestCompletedDateTime",
            "baseName": "requestCompletedDateTime",
            "type": "string"
        },
        {
            "name": "reportCompletedId",
            "baseName": "reportCompletedId",
            "type": "string"
        },
        {
            "name": "reportCompletedName",
            "baseName": "reportCompletedName",
            "type": "string"
        },
        {
            "name": "numberOfItems",
            "baseName": "numberOfItems",
            "type": "string"
        }
    ];
    return ReportsStatus;
}());
exports.ReportsStatus = ReportsStatus;