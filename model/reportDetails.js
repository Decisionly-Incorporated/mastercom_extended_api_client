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
exports.ReportDetails = void 0;
/**
* List of report details.
*/
var ReportDetails = /** @class */ (function () {
    function ReportDetails() {
    }
    ReportDetails.getAttributeTypeMap = function () {
        return ReportDetails.attributeTypeMap;
    };
    ReportDetails.discriminator = undefined;
    ReportDetails.attributeTypeMap = [
        {
            "name": "reportRequestId",
            "baseName": "reportRequestId",
            "type": "string"
        },
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
    return ReportDetails;
}());
exports.ReportDetails = ReportDetails;
