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
exports.ReportDefinition = void 0;
var ReportDefinition = /** @class */ (function () {
    function ReportDefinition() {
    }
    ReportDefinition.getAttributeTypeMap = function () {
        return ReportDefinition.attributeTypeMap;
    };
    ReportDefinition.discriminator = undefined;
    ReportDefinition.attributeTypeMap = [
        {
            "name": "reportDefinitionId",
            "baseName": "reportDefinitionId",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "reportName",
            "baseName": "reportName",
            "type": "string"
        },
        {
            "name": "criteria",
            "baseName": "criteria",
            "type": "Array<ReportDefinitionCriteria>"
        },
        {
            "name": "formats",
            "baseName": "formats",
            "type": "Array<string>"
        }
    ];
    return ReportDefinition;
}());
exports.ReportDefinition = ReportDefinition;
