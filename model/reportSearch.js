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
exports.ReportSearch = void 0;
var ReportSearch = /** @class */ (function () {
    function ReportSearch() {
        /**
        * Number of reportRequest items the list should be limited to.
        */
        this['limit'] = 25;
        /**
        * Specifies the number of items to offset the start of the list.
        */
        this['offset'] = 0;
    }
    ReportSearch.getAttributeTypeMap = function () {
        return ReportSearch.attributeTypeMap;
    };
    ReportSearch.discriminator = undefined;
    ReportSearch.attributeTypeMap = [
        {
            "name": "reportDefinitionIds",
            "baseName": "reportDefinitionIds",
            "type": "Array<string>"
        },
        {
            "name": "startDateTime",
            "baseName": "startDateTime",
            "type": "string"
        },
        {
            "name": "endDateTime",
            "baseName": "endDateTime",
            "type": "string"
        },
        {
            "name": "reportStatus",
            "baseName": "reportStatus",
            "type": "ReportSearch.ReportStatusEnum"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        },
        {
            "name": "sortKey",
            "baseName": "sortKey",
            "type": "ReportSearch.SortKeyEnum"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "ReportSearch.SortOrderEnum"
        }
    ];
    return ReportSearch;
}());
exports.ReportSearch = ReportSearch;
(function (ReportSearch) {
    var ReportStatusEnum;
    (function (ReportStatusEnum) {
        ReportStatusEnum[ReportStatusEnum["Pending"] = 'PENDING'] = "Pending";
        ReportStatusEnum[ReportStatusEnum["Processing"] = 'PROCESSING'] = "Processing";
        ReportStatusEnum[ReportStatusEnum["Completed"] = 'COMPLETED'] = "Completed";
        ReportStatusEnum[ReportStatusEnum["Failure"] = 'FAILURE'] = "Failure";
    })(ReportStatusEnum = ReportSearch.ReportStatusEnum || (ReportSearch.ReportStatusEnum = {}));
    var SortKeyEnum;
    (function (SortKeyEnum) {
        SortKeyEnum[SortKeyEnum["CreatedDateTime"] = 'REQUEST_CREATED_DATE_TIME'] = "CreatedDateTime";
        SortKeyEnum[SortKeyEnum["CompletedDateTime"] = 'REQUEST_COMPLETED_DATE_TIME'] = "CompletedDateTime";
    })(SortKeyEnum = ReportSearch.SortKeyEnum || (ReportSearch.SortKeyEnum = {}));
    var SortOrderEnum;
    (function (SortOrderEnum) {
        SortOrderEnum[SortOrderEnum["Asc"] = 'ASC'] = "Asc";
        SortOrderEnum[SortOrderEnum["Desc"] = 'DESC'] = "Desc";
    })(SortOrderEnum = ReportSearch.SortOrderEnum || (ReportSearch.SortOrderEnum = {}));
})(ReportSearch || (exports.ReportSearch = ReportSearch = {}));
