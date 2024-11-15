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
exports.ChargebackDetails = void 0;
var ChargebackDetails = /** @class */ (function () {
    function ChargebackDetails() {
        /**
        * Only applicable to reason codes 60 and 75. Doubles the amount of the chargeback if set to True. Used for scenarios in which the merchant attempted to credit a cardholder but accidentally debited the cardholder a second time.
        */
        this['creditPostedAsPurchase'] = false;
    }
    ChargebackDetails.getAttributeTypeMap = function () {
        return ChargebackDetails.attributeTypeMap;
    };
    ChargebackDetails.discriminator = undefined;
    ChargebackDetails.attributeTypeMap = [
        {
            "name": "eventType",
            "baseName": "eventType",
            "type": "string"
        },
        {
            "name": "eventExpiryDateTime",
            "baseName": "eventExpiryDateTime",
            "type": "string"
        },
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "string"
        },
        {
            "name": "eventReferenceId",
            "baseName": "eventReferenceId",
            "type": "string"
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string"
        },
        {
            "name": "disputeAmount",
            "baseName": "disputeAmount",
            "type": "AmountDetails"
        },
        {
            "name": "reasonCode",
            "baseName": "reasonCode",
            "type": "string"
        },
        {
            "name": "clearingStatus",
            "baseName": "clearingStatus",
            "type": "string"
        },
        {
            "name": "rejectCode",
            "baseName": "rejectCode",
            "type": "string"
        },
        {
            "name": "rejectReason",
            "baseName": "rejectReason",
            "type": "string"
        },
        {
            "name": "expirationDate",
            "baseName": "expirationDate",
            "type": "string"
        },
        {
            "name": "creditPostedAsPurchase",
            "baseName": "creditPostedAsPurchase",
            "type": "boolean"
        },
        {
            "name": "documentIndicator",
            "baseName": "documentIndicator",
            "type": "string"
        },
        {
            "name": "documentStatus",
            "baseName": "documentStatus",
            "type": "string"
        },
        {
            "name": "completedDocumentsAttributes",
            "baseName": "completedDocumentsAttributes",
            "type": "Array<CompletedDocumentAttributes>"
        },
        {
            "name": "additionalInformation",
            "baseName": "additionalInformation",
            "type": "string"
        },
        {
            "name": "creationDate",
            "baseName": "creationDate",
            "type": "string"
        },
        {
            "name": "eventLastModifiedBy",
            "baseName": "eventLastModifiedBy",
            "type": "string"
        },
        {
            "name": "lastUpdatedDateTime",
            "baseName": "lastUpdatedDateTime",
            "type": "string"
        },
        {
            "name": "singleMessage",
            "baseName": "singleMessage",
            "type": "SingleMessageChargebackDetails"
        }
    ];
    return ChargebackDetails;
}());
exports.ChargebackDetails = ChargebackDetails;
