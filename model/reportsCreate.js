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
exports.ReportsCreate = void 0;
var ReportsCreate = /** @class */ (function () {
    function ReportsCreate() {
    }
    ReportsCreate.getAttributeTypeMap = function () {
        return ReportsCreate.attributeTypeMap;
    };
    ReportsCreate.discriminator = undefined;
    ReportsCreate.attributeTypeMap = [
        {
            "name": "reportDefinitionId",
            "baseName": "reportDefinitionId",
            "type": "string"
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "ReportsCreate.FormatEnum"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<ReportFilter>"
        }
    ];
    return ReportsCreate;
}());
exports.ReportsCreate = ReportsCreate;
(function (ReportsCreate) {
    var FormatEnum;
    (function (FormatEnum) {
        FormatEnum[FormatEnum["Csv"] = 'CSV'] = "Csv";
    })(FormatEnum = ReportsCreate.FormatEnum || (ReportsCreate.FormatEnum = {}));
})(ReportsCreate || (exports.ReportsCreate = ReportsCreate = {}));
