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
exports.ClaimSearch = void 0;
var ClaimSearch = /** @class */ (function () {
    function ClaimSearch() {
        /**
        * Context type associated to the context ID from the transaction search response.  CONDITIONAL: Cannot be used in conjunction with switchSerialNumber or primaryAccountNumber.
        */
        this['contextType'] = ClaimSearch.ContextTypeEnum.Transaction;
        /**
        * Number of claimsData items the list should be limited to.
        */
        this['limit'] = 25;
        /**
        * Specifies the number of items to offset the start of the list.
        */
        this['offset'] = 0;
    }
    ClaimSearch.getAttributeTypeMap = function () {
        return ClaimSearch.attributeTypeMap;
    };
    ClaimSearch.discriminator = undefined;
    ClaimSearch.attributeTypeMap = [
        {
            "name": "contextId",
            "baseName": "contextId",
            "type": "string"
        },
        {
            "name": "contextType",
            "baseName": "contextType",
            "type": "ClaimSearch.ContextTypeEnum"
        },
        {
            "name": "primaryAccountNumber",
            "baseName": "primaryAccountNumber",
            "type": "string"
        },
        {
            "name": "switchSerialNumber",
            "baseName": "switchSerialNumber",
            "type": "string"
        },
        {
            "name": "startDateTime",
            "baseName": "startDateTime",
            "type": "Date"
        },
        {
            "name": "endDateTime",
            "baseName": "endDateTime",
            "type": "Date"
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
        }
    ];
    return ClaimSearch;
}());
exports.ClaimSearch = ClaimSearch;
(function (ClaimSearch) {
    var ContextTypeEnum;
    (function (ContextTypeEnum) {
        ContextTypeEnum[ContextTypeEnum["Transaction"] = 'TRANSACTION'] = "Transaction";
    })(ContextTypeEnum = ClaimSearch.ContextTypeEnum || (ClaimSearch.ContextTypeEnum = {}));
})(ClaimSearch || (exports.ClaimSearch = ClaimSearch = {}));