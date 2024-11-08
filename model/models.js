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
__exportStar(require("./adjustmentDetails"), exports);
__exportStar(require("./adjustmentReversalDetails"), exports);
__exportStar(require("./amountDetails"), exports);
__exportStar(require("./arbitrationCaseCreate"), exports);
__exportStar(require("./caseActionHistory"), exports);
__exportStar(require("./caseCreateCaseId"), exports);
__exportStar(require("./caseDetails"), exports);
__exportStar(require("./caseDocumentAttributes"), exports);
__exportStar(require("./caseFilingSummaries"), exports);
__exportStar(require("./caseTakeActionArbitration"), exports);
__exportStar(require("./caseTakeActionCompliance"), exports);
__exportStar(require("./caseTakeActionDocumentRetry"), exports);
__exportStar(require("./casesDocumentAttributes"), exports);
__exportStar(require("./chargebackDetails"), exports);
__exportStar(require("./chargebackReversal"), exports);
__exportStar(require("./chargebackReversalDetails"), exports);
__exportStar(require("./chargebackReversalEventId"), exports);
__exportStar(require("./chargebackSingleMessage"), exports);
__exportStar(require("./chargebackSingleMessageReversal"), exports);
__exportStar(require("./chargebackUpdate"), exports);
__exportStar(require("./claim"), exports);
__exportStar(require("./claimCollaborationDetails"), exports);
__exportStar(require("./claimCreateId"), exports);
__exportStar(require("./claimDetails"), exports);
__exportStar(require("./claimSearch"), exports);
__exportStar(require("./claimTransactionDetails"), exports);
__exportStar(require("./claimTransactionSingleMessage"), exports);
__exportStar(require("./claimValidActions"), exports);
__exportStar(require("./claimsList"), exports);
__exportStar(require("./completedDocumentAttributes"), exports);
__exportStar(require("./complianceCaseCreate"), exports);
__exportStar(require("./createClaim"), exports);
__exportStar(require("./createdReportDetails"), exports);
__exportStar(require("./disputesCreateEventId"), exports);
__exportStar(require("./document"), exports);
__exportStar(require("./documentAttributes"), exports);
__exportStar(require("./documentAttributesList"), exports);
__exportStar(require("./documentRetrieve"), exports);
__exportStar(require("./documentUpload"), exports);
__exportStar(require("./documents"), exports);
__exportStar(require("./errorWrapper"), exports);
__exportStar(require("./errors"), exports);
__exportStar(require("./initiateDispute"), exports);
__exportStar(require("./modelError"), exports);
__exportStar(require("./queue"), exports);
__exportStar(require("./queueDefinition"), exports);
__exportStar(require("./queueDefinitionsList"), exports);
__exportStar(require("./queueDetails"), exports);
__exportStar(require("./queueField"), exports);
__exportStar(require("./queueFieldNameValue"), exports);
__exportStar(require("./report"), exports);
__exportStar(require("./reportDefinition"), exports);
__exportStar(require("./reportDefinitionCriteria"), exports);
__exportStar(require("./reportDefinitionList"), exports);
__exportStar(require("./reportDetails"), exports);
__exportStar(require("./reportFilter"), exports);
__exportStar(require("./reportList"), exports);
__exportStar(require("./reportSearch"), exports);
__exportStar(require("./reportsCreate"), exports);
__exportStar(require("./reportsStatus"), exports);
__exportStar(require("./representmentCreate"), exports);
__exportStar(require("./representmentCreateEventId"), exports);
__exportStar(require("./representmentDetails"), exports);
__exportStar(require("./representmentDetailsSingleMessage"), exports);
__exportStar(require("./representmentReversal"), exports);
__exportStar(require("./representmentReversalDetails"), exports);
__exportStar(require("./representmentReversalDetailsSingleMessage"), exports);
__exportStar(require("./representmentReversalEventId"), exports);
__exportStar(require("./representmentSingleMessage"), exports);
__exportStar(require("./representmentSingleMessageReversal"), exports);
__exportStar(require("./representmentUpdate"), exports);
__exportStar(require("./singleMessageChargebackDetails"), exports);
__exportStar(require("./singleMessageReversalDetails"), exports);
__exportStar(require("./singleMessageSummary"), exports);
__exportStar(require("./transactionData"), exports);
__exportStar(require("./transactionList"), exports);
__exportStar(require("./transactionSearch"), exports);
__exportStar(require("./transactionSingleMessage"), exports);
__exportStar(require("./validActionReasonCodes"), exports);
var adjustmentDetails_1 = require("./adjustmentDetails");
var adjustmentReversalDetails_1 = require("./adjustmentReversalDetails");
var amountDetails_1 = require("./amountDetails");
var arbitrationCaseCreate_1 = require("./arbitrationCaseCreate");
var caseActionHistory_1 = require("./caseActionHistory");
var caseCreateCaseId_1 = require("./caseCreateCaseId");
var caseDetails_1 = require("./caseDetails");
var caseDocumentAttributes_1 = require("./caseDocumentAttributes");
var caseFilingSummaries_1 = require("./caseFilingSummaries");
var caseTakeActionArbitration_1 = require("./caseTakeActionArbitration");
var caseTakeActionCompliance_1 = require("./caseTakeActionCompliance");
var caseTakeActionDocumentRetry_1 = require("./caseTakeActionDocumentRetry");
var casesDocumentAttributes_1 = require("./casesDocumentAttributes");
var chargebackDetails_1 = require("./chargebackDetails");
var chargebackReversal_1 = require("./chargebackReversal");
var chargebackReversalDetails_1 = require("./chargebackReversalDetails");
var chargebackReversalEventId_1 = require("./chargebackReversalEventId");
var chargebackSingleMessage_1 = require("./chargebackSingleMessage");
var chargebackSingleMessageReversal_1 = require("./chargebackSingleMessageReversal");
var chargebackUpdate_1 = require("./chargebackUpdate");
var claim_1 = require("./claim");
var claimCollaborationDetails_1 = require("./claimCollaborationDetails");
var claimCreateId_1 = require("./claimCreateId");
var claimDetails_1 = require("./claimDetails");
var claimSearch_1 = require("./claimSearch");
var claimTransactionDetails_1 = require("./claimTransactionDetails");
var claimTransactionSingleMessage_1 = require("./claimTransactionSingleMessage");
var claimValidActions_1 = require("./claimValidActions");
var claimsList_1 = require("./claimsList");
var completedDocumentAttributes_1 = require("./completedDocumentAttributes");
var complianceCaseCreate_1 = require("./complianceCaseCreate");
var createClaim_1 = require("./createClaim");
var createdReportDetails_1 = require("./createdReportDetails");
var disputesCreateEventId_1 = require("./disputesCreateEventId");
var document_1 = require("./document");
var documentAttributes_1 = require("./documentAttributes");
var documentAttributesList_1 = require("./documentAttributesList");
var documentRetrieve_1 = require("./documentRetrieve");
var documentUpload_1 = require("./documentUpload");
var documents_1 = require("./documents");
var errorWrapper_1 = require("./errorWrapper");
var errors_1 = require("./errors");
var initiateDispute_1 = require("./initiateDispute");
var modelError_1 = require("./modelError");
var queue_1 = require("./queue");
var queueDefinition_1 = require("./queueDefinition");
var queueDefinitionsList_1 = require("./queueDefinitionsList");
var queueDetails_1 = require("./queueDetails");
var queueField_1 = require("./queueField");
var queueFieldNameValue_1 = require("./queueFieldNameValue");
var report_1 = require("./report");
var reportDefinition_1 = require("./reportDefinition");
var reportDefinitionCriteria_1 = require("./reportDefinitionCriteria");
var reportDefinitionList_1 = require("./reportDefinitionList");
var reportDetails_1 = require("./reportDetails");
var reportFilter_1 = require("./reportFilter");
var reportList_1 = require("./reportList");
var reportSearch_1 = require("./reportSearch");
var reportsCreate_1 = require("./reportsCreate");
var reportsStatus_1 = require("./reportsStatus");
var representmentCreate_1 = require("./representmentCreate");
var representmentCreateEventId_1 = require("./representmentCreateEventId");
var representmentDetails_1 = require("./representmentDetails");
var representmentDetailsSingleMessage_1 = require("./representmentDetailsSingleMessage");
var representmentReversal_1 = require("./representmentReversal");
var representmentReversalDetails_1 = require("./representmentReversalDetails");
var representmentReversalDetailsSingleMessage_1 = require("./representmentReversalDetailsSingleMessage");
var representmentReversalEventId_1 = require("./representmentReversalEventId");
var representmentSingleMessage_1 = require("./representmentSingleMessage");
var representmentSingleMessageReversal_1 = require("./representmentSingleMessageReversal");
var representmentUpdate_1 = require("./representmentUpdate");
var singleMessageChargebackDetails_1 = require("./singleMessageChargebackDetails");
var singleMessageReversalDetails_1 = require("./singleMessageReversalDetails");
var singleMessageSummary_1 = require("./singleMessageSummary");
var transactionData_1 = require("./transactionData");
var transactionList_1 = require("./transactionList");
var transactionSearch_1 = require("./transactionSearch");
var transactionSingleMessage_1 = require("./transactionSingleMessage");
var validActionReasonCodes_1 = require("./validActionReasonCodes");
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
    "CaseTakeActionArbitration.ActionEnum": caseTakeActionArbitration_1.CaseTakeActionArbitration.ActionEnum,
    "CaseTakeActionCompliance.ActionEnum": caseTakeActionCompliance_1.CaseTakeActionCompliance.ActionEnum,
    "CaseTakeActionCompliance.RebuttalPartyEnum": caseTakeActionCompliance_1.CaseTakeActionCompliance.RebuttalPartyEnum,
    "CaseTakeActionDocumentRetry.RebuttalPartyEnum": caseTakeActionDocumentRetry_1.CaseTakeActionDocumentRetry.RebuttalPartyEnum,
    "ChargebackSingleMessage.NoShowReasonEnum": chargebackSingleMessage_1.ChargebackSingleMessage.NoShowReasonEnum,
    "ChargebackSingleMessage.NoShowCodeEnum": chargebackSingleMessage_1.ChargebackSingleMessage.NoShowCodeEnum,
    "ClaimSearch.ContextTypeEnum": claimSearch_1.ClaimSearch.ContextTypeEnum,
    "ComplianceCaseCreate.FilingAsEnum": complianceCaseCreate_1.ComplianceCaseCreate.FilingAsEnum,
    "ComplianceCaseCreate.ViolationCodeEnum": complianceCaseCreate_1.ComplianceCaseCreate.ViolationCodeEnum,
    "CreateClaim.ContextTypeEnum": createClaim_1.CreateClaim.ContextTypeEnum,
    "ReportFilter.FilterNameEnum": reportFilter_1.ReportFilter.FilterNameEnum,
    "ReportSearch.ReportStatusEnum": reportSearch_1.ReportSearch.ReportStatusEnum,
    "ReportSearch.SortKeyEnum": reportSearch_1.ReportSearch.SortKeyEnum,
    "ReportSearch.SortOrderEnum": reportSearch_1.ReportSearch.SortOrderEnum,
    "ReportsCreate.FormatEnum": reportsCreate_1.ReportsCreate.FormatEnum,
};
var typeMap = {
    "AdjustmentDetails": adjustmentDetails_1.AdjustmentDetails,
    "AdjustmentReversalDetails": adjustmentReversalDetails_1.AdjustmentReversalDetails,
    "AmountDetails": amountDetails_1.AmountDetails,
    "ArbitrationCaseCreate": arbitrationCaseCreate_1.ArbitrationCaseCreate,
    "CaseActionHistory": caseActionHistory_1.CaseActionHistory,
    "CaseCreateCaseId": caseCreateCaseId_1.CaseCreateCaseId,
    "CaseDetails": caseDetails_1.CaseDetails,
    "CaseDocumentAttributes": caseDocumentAttributes_1.CaseDocumentAttributes,
    "CaseFilingSummaries": caseFilingSummaries_1.CaseFilingSummaries,
    "CaseTakeActionArbitration": caseTakeActionArbitration_1.CaseTakeActionArbitration,
    "CaseTakeActionCompliance": caseTakeActionCompliance_1.CaseTakeActionCompliance,
    "CaseTakeActionDocumentRetry": caseTakeActionDocumentRetry_1.CaseTakeActionDocumentRetry,
    "CasesDocumentAttributes": casesDocumentAttributes_1.CasesDocumentAttributes,
    "ChargebackDetails": chargebackDetails_1.ChargebackDetails,
    "ChargebackReversal": chargebackReversal_1.ChargebackReversal,
    "ChargebackReversalDetails": chargebackReversalDetails_1.ChargebackReversalDetails,
    "ChargebackReversalEventId": chargebackReversalEventId_1.ChargebackReversalEventId,
    "ChargebackSingleMessage": chargebackSingleMessage_1.ChargebackSingleMessage,
    "ChargebackSingleMessageReversal": chargebackSingleMessageReversal_1.ChargebackSingleMessageReversal,
    "ChargebackUpdate": chargebackUpdate_1.ChargebackUpdate,
    "Claim": claim_1.Claim,
    "ClaimCollaborationDetails": claimCollaborationDetails_1.ClaimCollaborationDetails,
    "ClaimCreateId": claimCreateId_1.ClaimCreateId,
    "ClaimDetails": claimDetails_1.ClaimDetails,
    "ClaimSearch": claimSearch_1.ClaimSearch,
    "ClaimTransactionDetails": claimTransactionDetails_1.ClaimTransactionDetails,
    "ClaimTransactionSingleMessage": claimTransactionSingleMessage_1.ClaimTransactionSingleMessage,
    "ClaimValidActions": claimValidActions_1.ClaimValidActions,
    "ClaimsList": claimsList_1.ClaimsList,
    "CompletedDocumentAttributes": completedDocumentAttributes_1.CompletedDocumentAttributes,
    "ComplianceCaseCreate": complianceCaseCreate_1.ComplianceCaseCreate,
    "CreateClaim": createClaim_1.CreateClaim,
    "CreatedReportDetails": createdReportDetails_1.CreatedReportDetails,
    "DisputesCreateEventId": disputesCreateEventId_1.DisputesCreateEventId,
    "Document": document_1.Document,
    "DocumentAttributes": documentAttributes_1.DocumentAttributes,
    "DocumentAttributesList": documentAttributesList_1.DocumentAttributesList,
    "DocumentRetrieve": documentRetrieve_1.DocumentRetrieve,
    "DocumentUpload": documentUpload_1.DocumentUpload,
    "Documents": documents_1.Documents,
    "ErrorWrapper": errorWrapper_1.ErrorWrapper,
    "Errors": errors_1.Errors,
    "InitiateDispute": initiateDispute_1.InitiateDispute,
    "ModelError": modelError_1.ModelError,
    "Queue": queue_1.Queue,
    "QueueDefinition": queueDefinition_1.QueueDefinition,
    "QueueDefinitionsList": queueDefinitionsList_1.QueueDefinitionsList,
    "QueueDetails": queueDetails_1.QueueDetails,
    "QueueField": queueField_1.QueueField,
    "QueueFieldNameValue": queueFieldNameValue_1.QueueFieldNameValue,
    "Report": report_1.Report,
    "ReportDefinition": reportDefinition_1.ReportDefinition,
    "ReportDefinitionCriteria": reportDefinitionCriteria_1.ReportDefinitionCriteria,
    "ReportDefinitionList": reportDefinitionList_1.ReportDefinitionList,
    "ReportDetails": reportDetails_1.ReportDetails,
    "ReportFilter": reportFilter_1.ReportFilter,
    "ReportList": reportList_1.ReportList,
    "ReportSearch": reportSearch_1.ReportSearch,
    "ReportsCreate": reportsCreate_1.ReportsCreate,
    "ReportsStatus": reportsStatus_1.ReportsStatus,
    "RepresentmentCreate": representmentCreate_1.RepresentmentCreate,
    "RepresentmentCreateEventId": representmentCreateEventId_1.RepresentmentCreateEventId,
    "RepresentmentDetails": representmentDetails_1.RepresentmentDetails,
    "RepresentmentDetailsSingleMessage": representmentDetailsSingleMessage_1.RepresentmentDetailsSingleMessage,
    "RepresentmentReversal": representmentReversal_1.RepresentmentReversal,
    "RepresentmentReversalDetails": representmentReversalDetails_1.RepresentmentReversalDetails,
    "RepresentmentReversalDetailsSingleMessage": representmentReversalDetailsSingleMessage_1.RepresentmentReversalDetailsSingleMessage,
    "RepresentmentReversalEventId": representmentReversalEventId_1.RepresentmentReversalEventId,
    "RepresentmentSingleMessage": representmentSingleMessage_1.RepresentmentSingleMessage,
    "RepresentmentSingleMessageReversal": representmentSingleMessageReversal_1.RepresentmentSingleMessageReversal,
    "RepresentmentUpdate": representmentUpdate_1.RepresentmentUpdate,
    "SingleMessageChargebackDetails": singleMessageChargebackDetails_1.SingleMessageChargebackDetails,
    "SingleMessageReversalDetails": singleMessageReversalDetails_1.SingleMessageReversalDetails,
    "SingleMessageSummary": singleMessageSummary_1.SingleMessageSummary,
    "TransactionData": transactionData_1.TransactionData,
    "TransactionList": transactionList_1.TransactionList,
    "TransactionSearch": transactionSearch_1.TransactionSearch,
    "TransactionSingleMessage": transactionSingleMessage_1.TransactionSingleMessage,
    "ValidActionReasonCodes": validActionReasonCodes_1.ValidActionReasonCodes,
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
