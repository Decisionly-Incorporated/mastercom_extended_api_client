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
exports.TransactionList = void 0;
var TransactionList = /** @class */ (function () {
    function TransactionList() {
    }
    TransactionList.getAttributeTypeMap = function () {
        return TransactionList.attributeTypeMap;
    };
    TransactionList.discriminator = undefined;
    TransactionList.attributeTypeMap = [
        {
            "name": "transactionsData",
            "baseName": "transactionsData",
            "type": "TransactionData"
        }
    ];
    return TransactionList;
}());
exports.TransactionList = TransactionList;