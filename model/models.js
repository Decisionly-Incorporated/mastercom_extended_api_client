"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./acquirerFulfillmentRequest"), exports);
__exportStar(require("./acquirerFulfillmentResponse"), exports);
__exportStar(require("./authorizationDetail"), exports);
__exportStar(require("./authorizationSummary"), exports);
__exportStar(require("./cardholderDisputeChargebackDrfDocumentStructure"), exports);
__exportStar(require("./cardholderVerificationMethodStructure"), exports);
__exportStar(require("./caseFilingClaim"), exports);
__exportStar(require("./caseFilingClaimsRequest"), exports);
__exportStar(require("./caseFilingClaimsResponse"), exports);
__exportStar(require("./caseFilingDetails"), exports);
__exportStar(require("./caseFilingEbdfStructure"), exports);
__exportStar(require("./caseFilingIdSourceRequest"), exports);
__exportStar(require("./caseFilingImageStatusRequest"), exports);
__exportStar(require("./caseFilingImageStatusResponse"), exports);
__exportStar(require("./caseFilingImageStatusResponseStructure"), exports);
__exportStar(require("./caseFilingLifeCycle"), exports);
__exportStar(require("./caseFilingRespHistory"), exports);
__exportStar(require("./caseFilingResponse"), exports);
__exportStar(require("./caseFilingStatusRequest"), exports);
__exportStar(require("./caseFilingStatusRequestStructure"), exports);
__exportStar(require("./caseFilingStatusResponse"), exports);
__exportStar(require("./caseFilingStatusResponseStructure"), exports);
__exportStar(require("./chargebackAmountNameValueDetail"), exports);
__exportStar(require("./chargebackDetails"), exports);
__exportStar(require("./chargebackDocIndicatorsNameValueDetail"), exports);
__exportStar(require("./chargebackEbdfStructure"), exports);
__exportStar(require("./chargebackImageStatusRequest"), exports);
__exportStar(require("./chargebackImageStatusResponse"), exports);
__exportStar(require("./chargebackImageStatusResponseStructure"), exports);
__exportStar(require("./chargebackMarkProcessedRequest"), exports);
__exportStar(require("./chargebackMarkProcessedRequestStructure"), exports);
__exportStar(require("./chargebackMarkProcessedResponse"), exports);
__exportStar(require("./chargebackMarkProcessedResponseStructure"), exports);
__exportStar(require("./chargebackMessageTextsNameValueDetail"), exports);
__exportStar(require("./chargebackReasonCodesNameValueDetail"), exports);
__exportStar(require("./chargebackResponse"), exports);
__exportStar(require("./chargebackStatusRequest"), exports);
__exportStar(require("./chargebackStatusRequestStructure"), exports);
__exportStar(require("./chargebackStatusResponse"), exports);
__exportStar(require("./chargebackStatusResponseStructure"), exports);
__exportStar(require("./claimDetail"), exports);
__exportStar(require("./claimResponse"), exports);
__exportStar(require("./claimSummary"), exports);
__exportStar(require("./clearingDetail"), exports);
__exportStar(require("./clearingSummary"), exports);
__exportStar(require("./createCaseRequest"), exports);
__exportStar(require("./createChargebackRequest"), exports);
__exportStar(require("./createChargebackSingleRequest"), exports);
__exportStar(require("./createChargebackSingleReversalRequest"), exports);
__exportStar(require("./createClaimRequest"), exports);
__exportStar(require("./createFeeRequest"), exports);
__exportStar(require("./createFeeRequestSingle"), exports);
__exportStar(require("./createFraudMasterCardRequest"), exports);
__exportStar(require("./createRetrievalRequest"), exports);
__exportStar(require("./createRetrievalRequestSingle"), exports);
__exportStar(require("./createRetrievalResponse"), exports);
__exportStar(require("./currenciesNameValueDetail"), exports);
__exportStar(require("./cycle"), exports);
__exportStar(require("./documentResponseStructure"), exports);
__exportStar(require("./documentStructure"), exports);
__exportStar(require("./documentStructureResp"), exports);
__exportStar(require("./errorDetail"), exports);
__exportStar(require("./errors"), exports);
__exportStar(require("./expeditedBillingDrfDocumentStructure"), exports);
__exportStar(require("./feeCountryCodesNameValueDetail"), exports);
__exportStar(require("./feeDetails"), exports);
__exportStar(require("./feeMessageTextsNameValueDetail"), exports);
__exportStar(require("./feeReasonCodesNameValueDetail"), exports);
__exportStar(require("./feeResponse"), exports);
__exportStar(require("./feeSingleResponse"), exports);
__exportStar(require("./fraudAcctDeviceTypesNameValueDetail"), exports);
__exportStar(require("./fraudAcctStatusesNameValueDetail"), exports);
__exportStar(require("./fraudCardValidCodesNameValueDetail"), exports);
__exportStar(require("./fraudDrfDocumentStructure"), exports);
__exportStar(require("./fraudResponse"), exports);
__exportStar(require("./fraudSubTypesNameValueDetail"), exports);
__exportStar(require("./getQueueContentRequest"), exports);
__exportStar(require("./healthCheckResponse"), exports);
__exportStar(require("./installmentParameters"), exports);
__exportStar(require("./issuerFulfillmentRequest"), exports);
__exportStar(require("./loadDataForChargebackResponse"), exports);
__exportStar(require("./loadDataForChargebacksRequest"), exports);
__exportStar(require("./loadDataForFeeResponse"), exports);
__exportStar(require("./loadDataForFeesRequest"), exports);
__exportStar(require("./loadDataForFraudResponse"), exports);
__exportStar(require("./loadDataForRetrievalResponse"), exports);
__exportStar(require("./modelError"), exports);
__exportStar(require("./originalInformationInstallments"), exports);
__exportStar(require("./pointOfInteractionErrorsDrfDocumentStructure"), exports);
__exportStar(require("./queue"), exports);
__exportStar(require("./queueContentSummary"), exports);
__exportStar(require("./reconReportDataAcknowledgeRequest"), exports);
__exportStar(require("./reconReportDataAcknowledgeResponse"), exports);
__exportStar(require("./reconReportDataRetrivalResponse"), exports);
__exportStar(require("./retrievalDocNeededNameValueDetail"), exports);
__exportStar(require("./retrievalReasonCodesNameValueDetail"), exports);
__exportStar(require("./retrievalResponse"), exports);
__exportStar(require("./retrievalStatusRequest"), exports);
__exportStar(require("./retrievalStatusRequestStructure"), exports);
__exportStar(require("./retrievalStatusResponse"), exports);
__exportStar(require("./retrievalStatusResponseStructure"), exports);
__exportStar(require("./retrievalSummary"), exports);
__exportStar(require("./retrievalsImageStatusRequest"), exports);
__exportStar(require("./retrievalsImageStatusResponse"), exports);
__exportStar(require("./retrievalsImageStatusResponseStructure"), exports);
__exportStar(require("./singleMessageDetail"), exports);
__exportStar(require("./singleMessageSummary"), exports);
__exportStar(require("./singleMessageSummaryDetails"), exports);
__exportStar(require("./smsLinkedCaseFilingDrfDocumentStructure"), exports);
__exportStar(require("./transactionInformationEbdfStructure"), exports);
__exportStar(require("./transactionSearchRequest"), exports);
__exportStar(require("./transactionSingleMessageDetail"), exports);
__exportStar(require("./transactionSingleMessageSummary"), exports);
__exportStar(require("./transactionSingleMessageSummaryList"), exports);
__exportStar(require("./transactionSingleSearchRequest"), exports);
__exportStar(require("./transactionSummary"), exports);
__exportStar(require("./updateCaseRequest"), exports);
__exportStar(require("./updateChargebackRequest"), exports);
__exportStar(require("./updateClaimRequest"), exports);
var acquirerFulfillmentRequest_1 = require("./acquirerFulfillmentRequest");
var acquirerFulfillmentResponse_1 = require("./acquirerFulfillmentResponse");
var authorizationDetail_1 = require("./authorizationDetail");
var authorizationSummary_1 = require("./authorizationSummary");
var cardholderDisputeChargebackDrfDocumentStructure_1 = require("./cardholderDisputeChargebackDrfDocumentStructure");
var cardholderVerificationMethodStructure_1 = require("./cardholderVerificationMethodStructure");
var caseFilingClaim_1 = require("./caseFilingClaim");
var caseFilingClaimsRequest_1 = require("./caseFilingClaimsRequest");
var caseFilingClaimsResponse_1 = require("./caseFilingClaimsResponse");
var caseFilingDetails_1 = require("./caseFilingDetails");
var caseFilingEbdfStructure_1 = require("./caseFilingEbdfStructure");
var caseFilingIdSourceRequest_1 = require("./caseFilingIdSourceRequest");
var caseFilingImageStatusRequest_1 = require("./caseFilingImageStatusRequest");
var caseFilingImageStatusResponse_1 = require("./caseFilingImageStatusResponse");
var caseFilingImageStatusResponseStructure_1 = require("./caseFilingImageStatusResponseStructure");
var caseFilingLifeCycle_1 = require("./caseFilingLifeCycle");
var caseFilingRespHistory_1 = require("./caseFilingRespHistory");
var caseFilingResponse_1 = require("./caseFilingResponse");
var caseFilingStatusRequest_1 = require("./caseFilingStatusRequest");
var caseFilingStatusRequestStructure_1 = require("./caseFilingStatusRequestStructure");
var caseFilingStatusResponse_1 = require("./caseFilingStatusResponse");
var caseFilingStatusResponseStructure_1 = require("./caseFilingStatusResponseStructure");
var chargebackAmountNameValueDetail_1 = require("./chargebackAmountNameValueDetail");
var chargebackDetails_1 = require("./chargebackDetails");
var chargebackDocIndicatorsNameValueDetail_1 = require("./chargebackDocIndicatorsNameValueDetail");
var chargebackEbdfStructure_1 = require("./chargebackEbdfStructure");
var chargebackImageStatusRequest_1 = require("./chargebackImageStatusRequest");
var chargebackImageStatusResponse_1 = require("./chargebackImageStatusResponse");
var chargebackImageStatusResponseStructure_1 = require("./chargebackImageStatusResponseStructure");
var chargebackMarkProcessedRequest_1 = require("./chargebackMarkProcessedRequest");
var chargebackMarkProcessedRequestStructure_1 = require("./chargebackMarkProcessedRequestStructure");
var chargebackMarkProcessedResponse_1 = require("./chargebackMarkProcessedResponse");
var chargebackMarkProcessedResponseStructure_1 = require("./chargebackMarkProcessedResponseStructure");
var chargebackMessageTextsNameValueDetail_1 = require("./chargebackMessageTextsNameValueDetail");
var chargebackReasonCodesNameValueDetail_1 = require("./chargebackReasonCodesNameValueDetail");
var chargebackResponse_1 = require("./chargebackResponse");
var chargebackStatusRequest_1 = require("./chargebackStatusRequest");
var chargebackStatusRequestStructure_1 = require("./chargebackStatusRequestStructure");
var chargebackStatusResponse_1 = require("./chargebackStatusResponse");
var chargebackStatusResponseStructure_1 = require("./chargebackStatusResponseStructure");
var claimDetail_1 = require("./claimDetail");
var claimResponse_1 = require("./claimResponse");
var claimSummary_1 = require("./claimSummary");
var clearingDetail_1 = require("./clearingDetail");
var clearingSummary_1 = require("./clearingSummary");
var createCaseRequest_1 = require("./createCaseRequest");
var createChargebackRequest_1 = require("./createChargebackRequest");
var createChargebackSingleRequest_1 = require("./createChargebackSingleRequest");
var createChargebackSingleReversalRequest_1 = require("./createChargebackSingleReversalRequest");
var createClaimRequest_1 = require("./createClaimRequest");
var createFeeRequest_1 = require("./createFeeRequest");
var createFeeRequestSingle_1 = require("./createFeeRequestSingle");
var createFraudMasterCardRequest_1 = require("./createFraudMasterCardRequest");
var createRetrievalRequest_1 = require("./createRetrievalRequest");
var createRetrievalRequestSingle_1 = require("./createRetrievalRequestSingle");
var createRetrievalResponse_1 = require("./createRetrievalResponse");
var currenciesNameValueDetail_1 = require("./currenciesNameValueDetail");
var cycle_1 = require("./cycle");
var documentResponseStructure_1 = require("./documentResponseStructure");
var documentStructure_1 = require("./documentStructure");
var documentStructureResp_1 = require("./documentStructureResp");
var errorDetail_1 = require("./errorDetail");
var errors_1 = require("./errors");
var expeditedBillingDrfDocumentStructure_1 = require("./expeditedBillingDrfDocumentStructure");
var feeCountryCodesNameValueDetail_1 = require("./feeCountryCodesNameValueDetail");
var feeDetails_1 = require("./feeDetails");
var feeMessageTextsNameValueDetail_1 = require("./feeMessageTextsNameValueDetail");
var feeReasonCodesNameValueDetail_1 = require("./feeReasonCodesNameValueDetail");
var feeResponse_1 = require("./feeResponse");
var feeSingleResponse_1 = require("./feeSingleResponse");
var fraudAcctDeviceTypesNameValueDetail_1 = require("./fraudAcctDeviceTypesNameValueDetail");
var fraudAcctStatusesNameValueDetail_1 = require("./fraudAcctStatusesNameValueDetail");
var fraudCardValidCodesNameValueDetail_1 = require("./fraudCardValidCodesNameValueDetail");
var fraudDrfDocumentStructure_1 = require("./fraudDrfDocumentStructure");
var fraudResponse_1 = require("./fraudResponse");
var fraudSubTypesNameValueDetail_1 = require("./fraudSubTypesNameValueDetail");
var getQueueContentRequest_1 = require("./getQueueContentRequest");
var healthCheckResponse_1 = require("./healthCheckResponse");
var installmentParameters_1 = require("./installmentParameters");
var issuerFulfillmentRequest_1 = require("./issuerFulfillmentRequest");
var loadDataForChargebackResponse_1 = require("./loadDataForChargebackResponse");
var loadDataForChargebacksRequest_1 = require("./loadDataForChargebacksRequest");
var loadDataForFeeResponse_1 = require("./loadDataForFeeResponse");
var loadDataForFeesRequest_1 = require("./loadDataForFeesRequest");
var loadDataForFraudResponse_1 = require("./loadDataForFraudResponse");
var loadDataForRetrievalResponse_1 = require("./loadDataForRetrievalResponse");
var modelError_1 = require("./modelError");
var originalInformationInstallments_1 = require("./originalInformationInstallments");
var pointOfInteractionErrorsDrfDocumentStructure_1 = require("./pointOfInteractionErrorsDrfDocumentStructure");
var queue_1 = require("./queue");
var queueContentSummary_1 = require("./queueContentSummary");
var reconReportDataAcknowledgeRequest_1 = require("./reconReportDataAcknowledgeRequest");
var reconReportDataAcknowledgeResponse_1 = require("./reconReportDataAcknowledgeResponse");
var reconReportDataRetrivalResponse_1 = require("./reconReportDataRetrivalResponse");
var retrievalDocNeededNameValueDetail_1 = require("./retrievalDocNeededNameValueDetail");
var retrievalReasonCodesNameValueDetail_1 = require("./retrievalReasonCodesNameValueDetail");
var retrievalResponse_1 = require("./retrievalResponse");
var retrievalStatusRequest_1 = require("./retrievalStatusRequest");
var retrievalStatusRequestStructure_1 = require("./retrievalStatusRequestStructure");
var retrievalStatusResponse_1 = require("./retrievalStatusResponse");
var retrievalStatusResponseStructure_1 = require("./retrievalStatusResponseStructure");
var retrievalSummary_1 = require("./retrievalSummary");
var retrievalsImageStatusRequest_1 = require("./retrievalsImageStatusRequest");
var retrievalsImageStatusResponse_1 = require("./retrievalsImageStatusResponse");
var retrievalsImageStatusResponseStructure_1 = require("./retrievalsImageStatusResponseStructure");
var singleMessageDetail_1 = require("./singleMessageDetail");
var singleMessageSummary_1 = require("./singleMessageSummary");
var singleMessageSummaryDetails_1 = require("./singleMessageSummaryDetails");
var smsLinkedCaseFilingDrfDocumentStructure_1 = require("./smsLinkedCaseFilingDrfDocumentStructure");
var transactionInformationEbdfStructure_1 = require("./transactionInformationEbdfStructure");
var transactionSearchRequest_1 = require("./transactionSearchRequest");
var transactionSingleMessageDetail_1 = require("./transactionSingleMessageDetail");
var transactionSingleMessageSummary_1 = require("./transactionSingleMessageSummary");
var transactionSingleMessageSummaryList_1 = require("./transactionSingleMessageSummaryList");
var transactionSingleSearchRequest_1 = require("./transactionSingleSearchRequest");
var transactionSummary_1 = require("./transactionSummary");
var updateCaseRequest_1 = require("./updateCaseRequest");
var updateChargebackRequest_1 = require("./updateChargebackRequest");
var updateClaimRequest_1 = require("./updateClaimRequest");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "AcquirerFulfillmentRequest.AcquirerResponseCdEnum": acquirerFulfillmentRequest_1.AcquirerFulfillmentRequest.AcquirerResponseCdEnum,
    "CardholderDisputeChargebackDrfDocumentStructure.TypeEnum": cardholderDisputeChargebackDrfDocumentStructure_1.CardholderDisputeChargebackDrfDocumentStructure.TypeEnum,
    "ChargebackDetails.ChargebackTypeEnum": chargebackDetails_1.ChargebackDetails.ChargebackTypeEnum,
    "ChargebackImageStatusRequest.StatusEnum": chargebackImageStatusRequest_1.ChargebackImageStatusRequest.StatusEnum,
    "CreateCaseRequest.CaseTypeEnum": createCaseRequest_1.CreateCaseRequest.CaseTypeEnum,
    "CreateCaseRequest.FilingAsEnum": createCaseRequest_1.CreateCaseRequest.FilingAsEnum,
    "CreateCaseRequest.UpdatedChargebackReasonCodeEnum": createCaseRequest_1.CreateCaseRequest.UpdatedChargebackReasonCodeEnum,
    "CreateCaseRequest.ChargebackReasonCodeEnum": createCaseRequest_1.CreateCaseRequest.ChargebackReasonCodeEnum,
    "CreateChargebackRequest.ChargebackTypeEnum": createChargebackRequest_1.CreateChargebackRequest.ChargebackTypeEnum,
    "CreateChargebackSingleRequest.BrandEnum": createChargebackSingleRequest_1.CreateChargebackSingleRequest.BrandEnum,
    "CreateChargebackSingleRequest.UsageCodeEnum": createChargebackSingleRequest_1.CreateChargebackSingleRequest.UsageCodeEnum,
    "CreateChargebackSingleRequest.ChargebackTypeEnum": createChargebackSingleRequest_1.CreateChargebackSingleRequest.ChargebackTypeEnum,
    "CreateChargebackSingleRequest.DataRecordTextEnum": createChargebackSingleRequest_1.CreateChargebackSingleRequest.DataRecordTextEnum,
    "CreateChargebackSingleRequest.DocumentIndicatorEnum": createChargebackSingleRequest_1.CreateChargebackSingleRequest.DocumentIndicatorEnum,
    "CreateChargebackSingleRequest.DocumentTypeEnum": createChargebackSingleRequest_1.CreateChargebackSingleRequest.DocumentTypeEnum,
    "CreateChargebackSingleRequest.IllegibleItemCdEnum": createChargebackSingleRequest_1.CreateChargebackSingleRequest.IllegibleItemCdEnum,
    "CreateChargebackSingleRequest.ProgramEnum": createChargebackSingleRequest_1.CreateChargebackSingleRequest.ProgramEnum,
    "CreateChargebackSingleReversalRequest.ReversalReasonCodeEnum": createChargebackSingleReversalRequest_1.CreateChargebackSingleReversalRequest.ReversalReasonCodeEnum,
    "CreateClaimRequest.ClaimTypeEnum": createClaimRequest_1.CreateClaimRequest.ClaimTypeEnum,
    "CreateFeeRequestSingle.ConditionIndicatorEnum": createFeeRequestSingle_1.CreateFeeRequestSingle.ConditionIndicatorEnum,
    "CreateFeeRequestSingle.FunctionCodeEnum": createFeeRequestSingle_1.CreateFeeRequestSingle.FunctionCodeEnum,
    "CreateFeeRequestSingle.ReasonCodeEnum": createFeeRequestSingle_1.CreateFeeRequestSingle.ReasonCodeEnum,
    "CreateFraudMasterCardRequest.AcctStatusEnum": createFraudMasterCardRequest_1.CreateFraudMasterCardRequest.AcctStatusEnum,
    "CreateFraudMasterCardRequest.ChgbkIndicatorEnum": createFraudMasterCardRequest_1.CreateFraudMasterCardRequest.ChgbkIndicatorEnum,
    "CreateFraudMasterCardRequest.CvcInvalidIndicatorEnum": createFraudMasterCardRequest_1.CreateFraudMasterCardRequest.CvcInvalidIndicatorEnum,
    "CreateFraudMasterCardRequest.DeviceTypeEnum": createFraudMasterCardRequest_1.CreateFraudMasterCardRequest.DeviceTypeEnum,
    "CreateFraudMasterCardRequest.FraudTypeEnum": createFraudMasterCardRequest_1.CreateFraudMasterCardRequest.FraudTypeEnum,
    "CreateFraudMasterCardRequest.SubTypeEnum": createFraudMasterCardRequest_1.CreateFraudMasterCardRequest.SubTypeEnum,
    "CreateRetrievalRequest.RetrievalRequestReasonEnum": createRetrievalRequest_1.CreateRetrievalRequest.RetrievalRequestReasonEnum,
    "CreateRetrievalRequest.DocNeededEnum": createRetrievalRequest_1.CreateRetrievalRequest.DocNeededEnum,
    "CreateRetrievalRequestSingle.DocumentTypeEnum": createRetrievalRequestSingle_1.CreateRetrievalRequestSingle.DocumentTypeEnum,
    "CreateRetrievalRequestSingle.UsageCodeEnum": createRetrievalRequestSingle_1.CreateRetrievalRequestSingle.UsageCodeEnum,
    "Cycle": cycle_1.Cycle,
    "FraudDrfDocumentStructure.CardIssuerRegionEnum": fraudDrfDocumentStructure_1.FraudDrfDocumentStructure.CardIssuerRegionEnum,
    "IssuerFulfillmentRequest.IssuerResponseCdEnum": issuerFulfillmentRequest_1.IssuerFulfillmentRequest.IssuerResponseCdEnum,
    "IssuerFulfillmentRequest.RejectReasonCdEnum": issuerFulfillmentRequest_1.IssuerFulfillmentRequest.RejectReasonCdEnum,
    "LoadDataForChargebacksRequest.ChargebackTypeEnum": loadDataForChargebacksRequest_1.LoadDataForChargebacksRequest.ChargebackTypeEnum,
    "PointOfInteractionErrorsDrfDocumentStructure.TypeEnum": pointOfInteractionErrorsDrfDocumentStructure_1.PointOfInteractionErrorsDrfDocumentStructure.TypeEnum,
    "RetrievalsImageStatusRequest.StatusEnum": retrievalsImageStatusRequest_1.RetrievalsImageStatusRequest.StatusEnum,
    "UpdateCaseRequest.ActionEnum": updateCaseRequest_1.UpdateCaseRequest.ActionEnum,
    "UpdateCaseRequest.RebuttedAsEnum": updateCaseRequest_1.UpdateCaseRequest.RebuttedAsEnum,
    "UpdateCaseRequest.DocRetryAsEnum": updateCaseRequest_1.UpdateCaseRequest.DocRetryAsEnum,
    "UpdateClaimRequest.ActionEnum": updateClaimRequest_1.UpdateClaimRequest.ActionEnum,
    "UpdateClaimRequest.CloseClaimReasonCodeEnum": updateClaimRequest_1.UpdateClaimRequest.CloseClaimReasonCodeEnum,
};
var typeMap = {
    "AcquirerFulfillmentRequest": acquirerFulfillmentRequest_1.AcquirerFulfillmentRequest,
    "AcquirerFulfillmentResponse": acquirerFulfillmentResponse_1.AcquirerFulfillmentResponse,
    "AuthorizationDetail": authorizationDetail_1.AuthorizationDetail,
    "AuthorizationSummary": authorizationSummary_1.AuthorizationSummary,
    "CardholderDisputeChargebackDrfDocumentStructure": cardholderDisputeChargebackDrfDocumentStructure_1.CardholderDisputeChargebackDrfDocumentStructure,
    "CardholderVerificationMethodStructure": cardholderVerificationMethodStructure_1.CardholderVerificationMethodStructure,
    "CaseFilingClaim": caseFilingClaim_1.CaseFilingClaim,
    "CaseFilingClaimsRequest": caseFilingClaimsRequest_1.CaseFilingClaimsRequest,
    "CaseFilingClaimsResponse": caseFilingClaimsResponse_1.CaseFilingClaimsResponse,
    "CaseFilingDetails": caseFilingDetails_1.CaseFilingDetails,
    "CaseFilingEbdfStructure": caseFilingEbdfStructure_1.CaseFilingEbdfStructure,
    "CaseFilingIdSourceRequest": caseFilingIdSourceRequest_1.CaseFilingIdSourceRequest,
    "CaseFilingImageStatusRequest": caseFilingImageStatusRequest_1.CaseFilingImageStatusRequest,
    "CaseFilingImageStatusResponse": caseFilingImageStatusResponse_1.CaseFilingImageStatusResponse,
    "CaseFilingImageStatusResponseStructure": caseFilingImageStatusResponseStructure_1.CaseFilingImageStatusResponseStructure,
    "CaseFilingLifeCycle": caseFilingLifeCycle_1.CaseFilingLifeCycle,
    "CaseFilingRespHistory": caseFilingRespHistory_1.CaseFilingRespHistory,
    "CaseFilingResponse": caseFilingResponse_1.CaseFilingResponse,
    "CaseFilingStatusRequest": caseFilingStatusRequest_1.CaseFilingStatusRequest,
    "CaseFilingStatusRequestStructure": caseFilingStatusRequestStructure_1.CaseFilingStatusRequestStructure,
    "CaseFilingStatusResponse": caseFilingStatusResponse_1.CaseFilingStatusResponse,
    "CaseFilingStatusResponseStructure": caseFilingStatusResponseStructure_1.CaseFilingStatusResponseStructure,
    "ChargebackAmountNameValueDetail": chargebackAmountNameValueDetail_1.ChargebackAmountNameValueDetail,
    "ChargebackDetails": chargebackDetails_1.ChargebackDetails,
    "ChargebackDocIndicatorsNameValueDetail": chargebackDocIndicatorsNameValueDetail_1.ChargebackDocIndicatorsNameValueDetail,
    "ChargebackEbdfStructure": chargebackEbdfStructure_1.ChargebackEbdfStructure,
    "ChargebackImageStatusRequest": chargebackImageStatusRequest_1.ChargebackImageStatusRequest,
    "ChargebackImageStatusResponse": chargebackImageStatusResponse_1.ChargebackImageStatusResponse,
    "ChargebackImageStatusResponseStructure": chargebackImageStatusResponseStructure_1.ChargebackImageStatusResponseStructure,
    "ChargebackMarkProcessedRequest": chargebackMarkProcessedRequest_1.ChargebackMarkProcessedRequest,
    "ChargebackMarkProcessedRequestStructure": chargebackMarkProcessedRequestStructure_1.ChargebackMarkProcessedRequestStructure,
    "ChargebackMarkProcessedResponse": chargebackMarkProcessedResponse_1.ChargebackMarkProcessedResponse,
    "ChargebackMarkProcessedResponseStructure": chargebackMarkProcessedResponseStructure_1.ChargebackMarkProcessedResponseStructure,
    "ChargebackMessageTextsNameValueDetail": chargebackMessageTextsNameValueDetail_1.ChargebackMessageTextsNameValueDetail,
    "ChargebackReasonCodesNameValueDetail": chargebackReasonCodesNameValueDetail_1.ChargebackReasonCodesNameValueDetail,
    "ChargebackResponse": chargebackResponse_1.ChargebackResponse,
    "ChargebackStatusRequest": chargebackStatusRequest_1.ChargebackStatusRequest,
    "ChargebackStatusRequestStructure": chargebackStatusRequestStructure_1.ChargebackStatusRequestStructure,
    "ChargebackStatusResponse": chargebackStatusResponse_1.ChargebackStatusResponse,
    "ChargebackStatusResponseStructure": chargebackStatusResponseStructure_1.ChargebackStatusResponseStructure,
    "ClaimDetail": claimDetail_1.ClaimDetail,
    "ClaimResponse": claimResponse_1.ClaimResponse,
    "ClaimSummary": claimSummary_1.ClaimSummary,
    "ClearingDetail": clearingDetail_1.ClearingDetail,
    "ClearingSummary": clearingSummary_1.ClearingSummary,
    "CreateCaseRequest": createCaseRequest_1.CreateCaseRequest,
    "CreateChargebackRequest": createChargebackRequest_1.CreateChargebackRequest,
    "CreateChargebackSingleRequest": createChargebackSingleRequest_1.CreateChargebackSingleRequest,
    "CreateChargebackSingleReversalRequest": createChargebackSingleReversalRequest_1.CreateChargebackSingleReversalRequest,
    "CreateClaimRequest": createClaimRequest_1.CreateClaimRequest,
    "CreateFeeRequest": createFeeRequest_1.CreateFeeRequest,
    "CreateFeeRequestSingle": createFeeRequestSingle_1.CreateFeeRequestSingle,
    "CreateFraudMasterCardRequest": createFraudMasterCardRequest_1.CreateFraudMasterCardRequest,
    "CreateRetrievalRequest": createRetrievalRequest_1.CreateRetrievalRequest,
    "CreateRetrievalRequestSingle": createRetrievalRequestSingle_1.CreateRetrievalRequestSingle,
    "CreateRetrievalResponse": createRetrievalResponse_1.CreateRetrievalResponse,
    "CurrenciesNameValueDetail": currenciesNameValueDetail_1.CurrenciesNameValueDetail,
    "DocumentResponseStructure": documentResponseStructure_1.DocumentResponseStructure,
    "DocumentStructure": documentStructure_1.DocumentStructure,
    "DocumentStructureResp": documentStructureResp_1.DocumentStructureResp,
    "ErrorDetail": errorDetail_1.ErrorDetail,
    "Errors": errors_1.Errors,
    "ExpeditedBillingDrfDocumentStructure": expeditedBillingDrfDocumentStructure_1.ExpeditedBillingDrfDocumentStructure,
    "FeeCountryCodesNameValueDetail": feeCountryCodesNameValueDetail_1.FeeCountryCodesNameValueDetail,
    "FeeDetails": feeDetails_1.FeeDetails,
    "FeeMessageTextsNameValueDetail": feeMessageTextsNameValueDetail_1.FeeMessageTextsNameValueDetail,
    "FeeReasonCodesNameValueDetail": feeReasonCodesNameValueDetail_1.FeeReasonCodesNameValueDetail,
    "FeeResponse": feeResponse_1.FeeResponse,
    "FeeSingleResponse": feeSingleResponse_1.FeeSingleResponse,
    "FraudAcctDeviceTypesNameValueDetail": fraudAcctDeviceTypesNameValueDetail_1.FraudAcctDeviceTypesNameValueDetail,
    "FraudAcctStatusesNameValueDetail": fraudAcctStatusesNameValueDetail_1.FraudAcctStatusesNameValueDetail,
    "FraudCardValidCodesNameValueDetail": fraudCardValidCodesNameValueDetail_1.FraudCardValidCodesNameValueDetail,
    "FraudDrfDocumentStructure": fraudDrfDocumentStructure_1.FraudDrfDocumentStructure,
    "FraudResponse": fraudResponse_1.FraudResponse,
    "FraudSubTypesNameValueDetail": fraudSubTypesNameValueDetail_1.FraudSubTypesNameValueDetail,
    "GetQueueContentRequest": getQueueContentRequest_1.GetQueueContentRequest,
    "HealthCheckResponse": healthCheckResponse_1.HealthCheckResponse,
    "InstallmentParameters": installmentParameters_1.InstallmentParameters,
    "IssuerFulfillmentRequest": issuerFulfillmentRequest_1.IssuerFulfillmentRequest,
    "LoadDataForChargebackResponse": loadDataForChargebackResponse_1.LoadDataForChargebackResponse,
    "LoadDataForChargebacksRequest": loadDataForChargebacksRequest_1.LoadDataForChargebacksRequest,
    "LoadDataForFeeResponse": loadDataForFeeResponse_1.LoadDataForFeeResponse,
    "LoadDataForFeesRequest": loadDataForFeesRequest_1.LoadDataForFeesRequest,
    "LoadDataForFraudResponse": loadDataForFraudResponse_1.LoadDataForFraudResponse,
    "LoadDataForRetrievalResponse": loadDataForRetrievalResponse_1.LoadDataForRetrievalResponse,
    "ModelError": modelError_1.ModelError,
    "OriginalInformationInstallments": originalInformationInstallments_1.OriginalInformationInstallments,
    "PointOfInteractionErrorsDrfDocumentStructure": pointOfInteractionErrorsDrfDocumentStructure_1.PointOfInteractionErrorsDrfDocumentStructure,
    "Queue": queue_1.Queue,
    "QueueContentSummary": queueContentSummary_1.QueueContentSummary,
    "ReconReportDataAcknowledgeRequest": reconReportDataAcknowledgeRequest_1.ReconReportDataAcknowledgeRequest,
    "ReconReportDataAcknowledgeResponse": reconReportDataAcknowledgeResponse_1.ReconReportDataAcknowledgeResponse,
    "ReconReportDataRetrivalResponse": reconReportDataRetrivalResponse_1.ReconReportDataRetrivalResponse,
    "RetrievalDocNeededNameValueDetail": retrievalDocNeededNameValueDetail_1.RetrievalDocNeededNameValueDetail,
    "RetrievalReasonCodesNameValueDetail": retrievalReasonCodesNameValueDetail_1.RetrievalReasonCodesNameValueDetail,
    "RetrievalResponse": retrievalResponse_1.RetrievalResponse,
    "RetrievalStatusRequest": retrievalStatusRequest_1.RetrievalStatusRequest,
    "RetrievalStatusRequestStructure": retrievalStatusRequestStructure_1.RetrievalStatusRequestStructure,
    "RetrievalStatusResponse": retrievalStatusResponse_1.RetrievalStatusResponse,
    "RetrievalStatusResponseStructure": retrievalStatusResponseStructure_1.RetrievalStatusResponseStructure,
    "RetrievalSummary": retrievalSummary_1.RetrievalSummary,
    "RetrievalsImageStatusRequest": retrievalsImageStatusRequest_1.RetrievalsImageStatusRequest,
    "RetrievalsImageStatusResponse": retrievalsImageStatusResponse_1.RetrievalsImageStatusResponse,
    "RetrievalsImageStatusResponseStructure": retrievalsImageStatusResponseStructure_1.RetrievalsImageStatusResponseStructure,
    "SingleMessageDetail": singleMessageDetail_1.SingleMessageDetail,
    "SingleMessageSummary": singleMessageSummary_1.SingleMessageSummary,
    "SingleMessageSummaryDetails": singleMessageSummaryDetails_1.SingleMessageSummaryDetails,
    "SmsLinkedCaseFilingDrfDocumentStructure": smsLinkedCaseFilingDrfDocumentStructure_1.SmsLinkedCaseFilingDrfDocumentStructure,
    "TransactionInformationEbdfStructure": transactionInformationEbdfStructure_1.TransactionInformationEbdfStructure,
    "TransactionSearchRequest": transactionSearchRequest_1.TransactionSearchRequest,
    "TransactionSingleMessageDetail": transactionSingleMessageDetail_1.TransactionSingleMessageDetail,
    "TransactionSingleMessageSummary": transactionSingleMessageSummary_1.TransactionSingleMessageSummary,
    "TransactionSingleMessageSummaryList": transactionSingleMessageSummaryList_1.TransactionSingleMessageSummaryList,
    "TransactionSingleSearchRequest": transactionSingleSearchRequest_1.TransactionSingleSearchRequest,
    "TransactionSummary": transactionSummary_1.TransactionSummary,
    "UpdateCaseRequest": updateCaseRequest_1.UpdateCaseRequest,
    "UpdateChargebackRequest": updateChargebackRequest_1.UpdateChargebackRequest,
    "UpdateClaimRequest": updateClaimRequest_1.UpdateClaimRequest,
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = /** @class */ (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = /** @class */ (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = /** @class */ (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = /** @class */ (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = /** @class */ (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
