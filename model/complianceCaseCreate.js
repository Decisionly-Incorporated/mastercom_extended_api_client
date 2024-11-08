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
exports.ComplianceCaseCreate = void 0;
var ComplianceCaseCreate = /** @class */ (function () {
    function ComplianceCaseCreate() {
    }
    ComplianceCaseCreate.getAttributeTypeMap = function () {
        return ComplianceCaseCreate.attributeTypeMap;
    };
    ComplianceCaseCreate.discriminator = undefined;
    ComplianceCaseCreate.attributeTypeMap = [
        {
            "name": "claimId",
            "baseName": "claimId",
            "type": "string"
        },
        {
            "name": "documentUploadedId",
            "baseName": "documentUploadedId",
            "type": "string"
        },
        {
            "name": "customerFilingNumber",
            "baseName": "customerFilingNumber",
            "type": "string"
        },
        {
            "name": "caseDisputeAmount",
            "baseName": "caseDisputeAmount",
            "type": "string"
        },
        {
            "name": "caseDisputeAmountAlphaCurrencyCode",
            "baseName": "caseDisputeAmountAlphaCurrencyCode",
            "type": "string"
        },
        {
            "name": "caseDisputeAmountNumericCurrencyCode",
            "baseName": "caseDisputeAmountNumericCurrencyCode",
            "type": "string"
        },
        {
            "name": "filingAs",
            "baseName": "filingAs",
            "type": "ComplianceCaseCreate.FilingAsEnum"
        },
        {
            "name": "filingIca",
            "baseName": "filingIca",
            "type": "string"
        },
        {
            "name": "filedAgainstIca",
            "baseName": "filedAgainstIca",
            "type": "string"
        },
        {
            "name": "violationCode",
            "baseName": "violationCode",
            "type": "ComplianceCaseCreate.ViolationCodeEnum"
        },
        {
            "name": "violationDate",
            "baseName": "violationDate",
            "type": "string"
        },
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string"
        }
    ];
    return ComplianceCaseCreate;
}());
exports.ComplianceCaseCreate = ComplianceCaseCreate;
(function (ComplianceCaseCreate) {
    var FilingAsEnum;
    (function (FilingAsEnum) {
        FilingAsEnum[FilingAsEnum["Issuer"] = 'ISSUER'] = "Issuer";
        FilingAsEnum[FilingAsEnum["Acquirer"] = 'ACQUIRER'] = "Acquirer";
    })(FilingAsEnum = ComplianceCaseCreate.FilingAsEnum || (ComplianceCaseCreate.FilingAsEnum = {}));
    var ViolationCodeEnum;
    (function (ViolationCodeEnum) {
        ViolationCodeEnum[ViolationCodeEnum["AcqStmtRequest"] = 'ACQ_STMT_REQUEST'] = "AcqStmtRequest";
        ViolationCodeEnum[ViolationCodeEnum["AtmDcc"] = 'ATM_DCC'] = "AtmDcc";
        ViolationCodeEnum[ViolationCodeEnum["CbExceedsTimeframe"] = 'CB_EXCEEDS_TIMEFRAME'] = "CbExceedsTimeframe";
        ViolationCodeEnum[ViolationCodeEnum["ChinaAdjReturn"] = 'CHINA_ADJ_RETURN'] = "ChinaAdjReturn";
        ViolationCodeEnum[ViolationCodeEnum["FeeCollection"] = 'FEE_COLLECTION'] = "FeeCollection";
        ViolationCodeEnum[ViolationCodeEnum["InaccurateAuth"] = 'INACCURATE_AUTH'] = "InaccurateAuth";
        ViolationCodeEnum[ViolationCodeEnum["InaccurateClearing"] = 'INACCURATE_CLEARING'] = "InaccurateClearing";
        ViolationCodeEnum[ViolationCodeEnum["Interchange"] = 'INTERCHANGE'] = "Interchange";
        ViolationCodeEnum[ViolationCodeEnum["InvSubFirstPresent"] = 'INV_SUB_FIRST_PRESENT'] = "InvSubFirstPresent";
        ViolationCodeEnum[ViolationCodeEnum["Match"] = 'MATCH'] = "Match";
        ViolationCodeEnum[ViolationCodeEnum["MpqrMcqr"] = 'MPQR_MCQR'] = "MpqrMcqr";
        ViolationCodeEnum[ViolationCodeEnum["NonMcMaestroCnp"] = 'NON_MC_MAESTRO_CNP'] = "NonMcMaestroCnp";
        ViolationCodeEnum[ViolationCodeEnum["RefundCorrection"] = 'REFUND_CORRECTION'] = "RefundCorrection";
        ViolationCodeEnum[ViolationCodeEnum["SameDayProcessing"] = 'SAME_DAY_PROCESSING'] = "SameDayProcessing";
        ViolationCodeEnum[ViolationCodeEnum["SendOi"] = 'SEND_OI'] = "SendOi";
        ViolationCodeEnum[ViolationCodeEnum["SendRiPayment"] = 'SEND_RI_PAYMENT'] = "SendRiPayment";
        ViolationCodeEnum[ViolationCodeEnum["ThirdPartyAllOther"] = 'THIRD_PARTY_ALL_OTHER'] = "ThirdPartyAllOther";
        ViolationCodeEnum[ViolationCodeEnum["UnspentGiftCard"] = 'UNSPENT_GIFT_CARD'] = "UnspentGiftCard";
        ViolationCodeEnum[ViolationCodeEnum["AllOther"] = 'ALL_OTHER'] = "AllOther";
    })(ViolationCodeEnum = ComplianceCaseCreate.ViolationCodeEnum || (ComplianceCaseCreate.ViolationCodeEnum = {}));
})(ComplianceCaseCreate || (exports.ComplianceCaseCreate = ComplianceCaseCreate = {}));