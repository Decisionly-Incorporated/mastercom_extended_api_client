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
exports.SingleMessageSummaryDetails = void 0;
var SingleMessageSummaryDetails = /** @class */ (function () {
    function SingleMessageSummaryDetails() {
    }
    SingleMessageSummaryDetails.getAttributeTypeMap = function () {
        return SingleMessageSummaryDetails.attributeTypeMap;
    };
    SingleMessageSummaryDetails.discriminator = undefined;
    SingleMessageSummaryDetails.attributeTypeMap = [
        {
            "name": "authTransaction",
            "baseName": "authTransaction",
            "type": "SingleMessageSummary"
        },
        {
            "name": "clearingTransaction",
            "baseName": "clearingTransaction",
            "type": "SingleMessageSummary"
        }
    ];
    return SingleMessageSummaryDetails;
}());
exports.SingleMessageSummaryDetails = SingleMessageSummaryDetails;