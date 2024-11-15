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
exports.TransactionData = void 0;
/**
* Root element for a list of transaction details.
*/
var TransactionData = /** @class */ (function () {
    function TransactionData() {
    }
    TransactionData.getAttributeTypeMap = function () {
        return TransactionData.attributeTypeMap;
    };
    TransactionData.discriminator = undefined;
    TransactionData.attributeTypeMap = [
        {
            "name": "singleMessages",
            "baseName": "singleMessages",
            "type": "Array<TransactionSingleMessage>"
        }
    ];
    return TransactionData;
}());
exports.TransactionData = TransactionData;
