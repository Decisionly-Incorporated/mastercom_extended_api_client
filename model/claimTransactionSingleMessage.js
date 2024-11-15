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
exports.ClaimTransactionSingleMessage = void 0;
var ClaimTransactionSingleMessage = /** @class */ (function () {
    function ClaimTransactionSingleMessage() {
    }
    ClaimTransactionSingleMessage.getAttributeTypeMap = function () {
        return ClaimTransactionSingleMessage.attributeTypeMap;
    };
    ClaimTransactionSingleMessage.discriminator = undefined;
    ClaimTransactionSingleMessage.attributeTypeMap = [
        {
            "name": "acceptorCountryCode",
            "baseName": "acceptorCountryCode",
            "type": "string"
        },
        {
            "name": "acceptorStreetAddress",
            "baseName": "acceptorStreetAddress",
            "type": "string"
        },
        {
            "name": "cardAcceptorCity",
            "baseName": "cardAcceptorCity",
            "type": "string"
        },
        {
            "name": "acquirerInstitutionIdCode",
            "baseName": "acquirerInstitutionIdCode",
            "type": "string"
        },
        {
            "name": "financialNetworkCode",
            "baseName": "financialNetworkCode",
            "type": "string"
        },
        {
            "name": "acceptorIdentification",
            "baseName": "acceptorIdentification",
            "type": "string"
        },
        {
            "name": "forwardingInstitutionIdCode",
            "baseName": "forwardingInstitutionIdCode",
            "type": "string"
        },
        {
            "name": "acquirerSettlementAmount",
            "baseName": "acquirerSettlementAmount",
            "type": "AmountDetails"
        },
        {
            "name": "acquirerSettlementConversionRate",
            "baseName": "acquirerSettlementConversionRate",
            "type": "string"
        },
        {
            "name": "banknetReferenceNumber",
            "baseName": "banknetReferenceNumber",
            "type": "string"
        },
        {
            "name": "cashBackAmount",
            "baseName": "cashBackAmount",
            "type": "AmountDetails"
        },
        {
            "name": "cardholderActivatedTerminalLevel",
            "baseName": "cardholderActivatedTerminalLevel",
            "type": "string"
        },
        {
            "name": "chipFlag",
            "baseName": "chipFlag",
            "type": "string"
        },
        {
            "name": "extendedConditionCodesPosData",
            "baseName": "extendedConditionCodesPosData",
            "type": "string"
        },
        {
            "name": "crossBorderTransactionIndicator",
            "baseName": "crossBorderTransactionIndicator",
            "type": "string"
        },
        {
            "name": "currencyConversionAssessmentAmount",
            "baseName": "currencyConversionAssessmentAmount",
            "type": "AmountDetails"
        },
        {
            "name": "cvc2ValidationProgramIndicator",
            "baseName": "cvc2ValidationProgramIndicator",
            "type": "string"
        },
        {
            "name": "authorizingAgentInstitutionId",
            "baseName": "authorizingAgentInstitutionId",
            "type": "string"
        },
        {
            "name": "receivingInstitutionIdentificationCode",
            "baseName": "receivingInstitutionIdentificationCode",
            "type": "string"
        },
        {
            "name": "issuerSettlementAmount",
            "baseName": "issuerSettlementAmount",
            "type": "AmountDetails"
        },
        {
            "name": "issuerSettlementConversionRate",
            "baseName": "issuerSettlementConversionRate",
            "type": "string"
        },
        {
            "name": "cardAcceptorType",
            "baseName": "cardAcceptorType",
            "type": "string"
        },
        {
            "name": "cardholderBillingAmount",
            "baseName": "cardholderBillingAmount",
            "type": "AmountDetails"
        },
        {
            "name": "pointOfServiceAmount",
            "baseName": "pointOfServiceAmount",
            "type": "AmountDetails"
        },
        {
            "name": "pointOfServiceTerminalAttendance",
            "baseName": "pointOfServiceTerminalAttendance",
            "type": "string"
        },
        {
            "name": "pointOfServiceTerminalLocation",
            "baseName": "pointOfServiceTerminalLocation",
            "type": "string"
        },
        {
            "name": "pointOfServiceCardholderPresence",
            "baseName": "pointOfServiceCardholderPresence",
            "type": "string"
        },
        {
            "name": "pointOfServiceCardPresence",
            "baseName": "pointOfServiceCardPresence",
            "type": "string"
        },
        {
            "name": "pointOfServiceCardRetention",
            "baseName": "pointOfServiceCardRetention",
            "type": "string"
        },
        {
            "name": "pointOfServiceTransactionStatus",
            "baseName": "pointOfServiceTransactionStatus",
            "type": "string"
        },
        {
            "name": "pointOfServiceTransactionSecurity",
            "baseName": "pointOfServiceTransactionSecurity",
            "type": "string"
        },
        {
            "name": "pointOfServiceCardDataTerminalInputCapability",
            "baseName": "pointOfServiceCardDataTerminalInputCapability",
            "type": "string"
        },
        {
            "name": "pointOfServiceAuthorizationLifeCycle",
            "baseName": "pointOfServiceAuthorizationLifeCycle",
            "type": "string"
        },
        {
            "name": "pointOfServiceCountryCode",
            "baseName": "pointOfServiceCountryCode",
            "type": "string"
        },
        {
            "name": "acceptorPostalCode",
            "baseName": "acceptorPostalCode",
            "type": "string"
        },
        {
            "name": "pointOfServiceEntryMode",
            "baseName": "pointOfServiceEntryMode",
            "type": "string"
        },
        {
            "name": "cardSequenceNumber",
            "baseName": "cardSequenceNumber",
            "type": "string"
        },
        {
            "name": "processingCode",
            "baseName": "processingCode",
            "type": "string"
        },
        {
            "name": "programParticipationIndicatorQpsContactlessChargebackEligibility",
            "baseName": "programParticipationIndicatorQpsContactlessChargebackEligibility",
            "type": "string"
        },
        {
            "name": "responseCode",
            "baseName": "responseCode",
            "type": "string"
        },
        {
            "name": "trackTwoDataExtendedServiceCode",
            "baseName": "trackTwoDataExtendedServiceCode",
            "type": "number"
        },
        {
            "name": "mastercardMerchantDataServicesServiceLevelIndicator",
            "baseName": "mastercardMerchantDataServicesServiceLevelIndicator",
            "type": "number"
        },
        {
            "name": "settlementDate",
            "baseName": "settlementDate",
            "type": "string"
        },
        {
            "name": "settlementServiceData",
            "baseName": "settlementServiceData",
            "type": "string"
        },
        {
            "name": "surchargeFreeIndicator",
            "baseName": "surchargeFreeIndicator",
            "type": "string"
        },
        {
            "name": "switchSerialNumber",
            "baseName": "switchSerialNumber",
            "type": "string"
        },
        {
            "name": "cardAcceptorTerminalId",
            "baseName": "cardAcceptorTerminalId",
            "type": "string"
        },
        {
            "name": "systemsTraceAuditNumber",
            "baseName": "systemsTraceAuditNumber",
            "type": "string"
        },
        {
            "name": "transactionDateTime",
            "baseName": "transactionDateTime",
            "type": "string"
        },
        {
            "name": "transitProgram",
            "baseName": "transitProgram",
            "type": "string"
        },
        {
            "name": "interchangeRateIndicator",
            "baseName": "interchangeRateIndicator",
            "type": "string"
        },
        {
            "name": "universalCardholderAuthenticationField",
            "baseName": "universalCardholderAuthenticationField",
            "type": "string"
        }
    ];
    return ClaimTransactionSingleMessage;
}());
exports.ClaimTransactionSingleMessage = ClaimTransactionSingleMessage;
