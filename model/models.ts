import localVarRequest from 'request';

export * from './adjustmentDetails';
export * from './adjustmentReversalDetails';
export * from './amountDetails';
export * from './arbitrationCaseCreate';
export * from './caseActionHistory';
export * from './caseCreateCaseId';
export * from './caseDetails';
export * from './caseDocumentAttributes';
export * from './caseFilingSummaries';
export * from './caseTakeActionArbitration';
export * from './caseTakeActionCompliance';
export * from './caseTakeActionDocumentRetry';
export * from './casesDocumentAttributes';
export * from './chargebackDetails';
export * from './chargebackReversal';
export * from './chargebackReversalDetails';
export * from './chargebackReversalEventId';
export * from './chargebackSingleMessage';
export * from './chargebackSingleMessageReversal';
export * from './chargebackUpdate';
export * from './claim';
export * from './claimCollaborationDetails';
export * from './claimCreateId';
export * from './claimDetails';
export * from './claimSearch';
export * from './claimTransactionDetails';
export * from './claimTransactionSingleMessage';
export * from './claimValidActions';
export * from './claimsList';
export * from './completedDocumentAttributes';
export * from './complianceCaseCreate';
export * from './createClaim';
export * from './createdReportDetails';
export * from './disputesCreateEventId';
export * from './document';
export * from './documentAttributes';
export * from './documentAttributesList';
export * from './documentRetrieve';
export * from './documentUpload';
export * from './documents';
export * from './errorWrapper';
export * from './errors';
export * from './initiateDispute';
export * from './modelError';
export * from './queue';
export * from './queueDefinition';
export * from './queueDefinitionsList';
export * from './queueDetails';
export * from './queueField';
export * from './queueFieldNameValue';
export * from './report';
export * from './reportDefinition';
export * from './reportDefinitionCriteria';
export * from './reportDefinitionList';
export * from './reportDetails';
export * from './reportFilter';
export * from './reportList';
export * from './reportSearch';
export * from './reportsCreate';
export * from './reportsStatus';
export * from './representmentCreate';
export * from './representmentCreateEventId';
export * from './representmentDetails';
export * from './representmentDetailsSingleMessage';
export * from './representmentReversal';
export * from './representmentReversalDetails';
export * from './representmentReversalDetailsSingleMessage';
export * from './representmentReversalEventId';
export * from './representmentSingleMessage';
export * from './representmentSingleMessageReversal';
export * from './representmentUpdate';
export * from './singleMessageChargebackDetails';
export * from './singleMessageReversalDetails';
export * from './singleMessageSummary';
export * from './transactionData';
export * from './transactionList';
export * from './transactionSearch';
export * from './transactionSingleMessage';
export * from './validActionReasonCodes';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AdjustmentDetails } from './adjustmentDetails';
import { AdjustmentReversalDetails } from './adjustmentReversalDetails';
import { AmountDetails } from './amountDetails';
import { ArbitrationCaseCreate } from './arbitrationCaseCreate';
import { CaseActionHistory } from './caseActionHistory';
import { CaseCreateCaseId } from './caseCreateCaseId';
import { CaseDetails } from './caseDetails';
import { CaseDocumentAttributes } from './caseDocumentAttributes';
import { CaseFilingSummaries } from './caseFilingSummaries';
import { CaseTakeActionArbitration } from './caseTakeActionArbitration';
import { CaseTakeActionCompliance } from './caseTakeActionCompliance';
import { CaseTakeActionDocumentRetry } from './caseTakeActionDocumentRetry';
import { CasesDocumentAttributes } from './casesDocumentAttributes';
import { ChargebackDetails } from './chargebackDetails';
import { ChargebackReversal } from './chargebackReversal';
import { ChargebackReversalDetails } from './chargebackReversalDetails';
import { ChargebackReversalEventId } from './chargebackReversalEventId';
import { ChargebackSingleMessage } from './chargebackSingleMessage';
import { ChargebackSingleMessageReversal } from './chargebackSingleMessageReversal';
import { ChargebackUpdate } from './chargebackUpdate';
import { Claim } from './claim';
import { ClaimCollaborationDetails } from './claimCollaborationDetails';
import { ClaimCreateId } from './claimCreateId';
import { ClaimDetails } from './claimDetails';
import { ClaimSearch } from './claimSearch';
import { ClaimTransactionDetails } from './claimTransactionDetails';
import { ClaimTransactionSingleMessage } from './claimTransactionSingleMessage';
import { ClaimValidActions } from './claimValidActions';
import { ClaimsList } from './claimsList';
import { CompletedDocumentAttributes } from './completedDocumentAttributes';
import { ComplianceCaseCreate } from './complianceCaseCreate';
import { CreateClaim } from './createClaim';
import { CreatedReportDetails } from './createdReportDetails';
import { DisputesCreateEventId } from './disputesCreateEventId';
import { Document } from './document';
import { DocumentAttributes } from './documentAttributes';
import { DocumentAttributesList } from './documentAttributesList';
import { DocumentRetrieve } from './documentRetrieve';
import { DocumentUpload } from './documentUpload';
import { Documents } from './documents';
import { ErrorWrapper } from './errorWrapper';
import { Errors } from './errors';
import { InitiateDispute } from './initiateDispute';
import { ModelError } from './modelError';
import { Queue } from './queue';
import { QueueDefinition } from './queueDefinition';
import { QueueDefinitionsList } from './queueDefinitionsList';
import { QueueDetails } from './queueDetails';
import { QueueField } from './queueField';
import { QueueFieldNameValue } from './queueFieldNameValue';
import { Report } from './report';
import { ReportDefinition } from './reportDefinition';
import { ReportDefinitionCriteria } from './reportDefinitionCriteria';
import { ReportDefinitionList } from './reportDefinitionList';
import { ReportDetails } from './reportDetails';
import { ReportFilter } from './reportFilter';
import { ReportList } from './reportList';
import { ReportSearch } from './reportSearch';
import { ReportsCreate } from './reportsCreate';
import { ReportsStatus } from './reportsStatus';
import { RepresentmentCreate } from './representmentCreate';
import { RepresentmentCreateEventId } from './representmentCreateEventId';
import { RepresentmentDetails } from './representmentDetails';
import { RepresentmentDetailsSingleMessage } from './representmentDetailsSingleMessage';
import { RepresentmentReversal } from './representmentReversal';
import { RepresentmentReversalDetails } from './representmentReversalDetails';
import { RepresentmentReversalDetailsSingleMessage } from './representmentReversalDetailsSingleMessage';
import { RepresentmentReversalEventId } from './representmentReversalEventId';
import { RepresentmentSingleMessage } from './representmentSingleMessage';
import { RepresentmentSingleMessageReversal } from './representmentSingleMessageReversal';
import { RepresentmentUpdate } from './representmentUpdate';
import { SingleMessageChargebackDetails } from './singleMessageChargebackDetails';
import { SingleMessageReversalDetails } from './singleMessageReversalDetails';
import { SingleMessageSummary } from './singleMessageSummary';
import { TransactionData } from './transactionData';
import { TransactionList } from './transactionList';
import { TransactionSearch } from './transactionSearch';
import { TransactionSingleMessage } from './transactionSingleMessage';
import { ValidActionReasonCodes } from './validActionReasonCodes';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "CaseTakeActionArbitration.ActionEnum": CaseTakeActionArbitration.ActionEnum,
        "CaseTakeActionCompliance.ActionEnum": CaseTakeActionCompliance.ActionEnum,
        "CaseTakeActionCompliance.RebuttalPartyEnum": CaseTakeActionCompliance.RebuttalPartyEnum,
        "CaseTakeActionDocumentRetry.RebuttalPartyEnum": CaseTakeActionDocumentRetry.RebuttalPartyEnum,
        "ChargebackSingleMessage.NoShowReasonEnum": ChargebackSingleMessage.NoShowReasonEnum,
        "ChargebackSingleMessage.NoShowCodeEnum": ChargebackSingleMessage.NoShowCodeEnum,
        "ClaimSearch.ContextTypeEnum": ClaimSearch.ContextTypeEnum,
        "ComplianceCaseCreate.FilingAsEnum": ComplianceCaseCreate.FilingAsEnum,
        "ComplianceCaseCreate.ViolationCodeEnum": ComplianceCaseCreate.ViolationCodeEnum,
        "CreateClaim.ContextTypeEnum": CreateClaim.ContextTypeEnum,
        "ReportFilter.FilterNameEnum": ReportFilter.FilterNameEnum,
        "ReportSearch.ReportStatusEnum": ReportSearch.ReportStatusEnum,
        "ReportSearch.SortKeyEnum": ReportSearch.SortKeyEnum,
        "ReportSearch.SortOrderEnum": ReportSearch.SortOrderEnum,
        "ReportsCreate.FormatEnum": ReportsCreate.FormatEnum,
}

let typeMap: {[index: string]: any} = {
    "AdjustmentDetails": AdjustmentDetails,
    "AdjustmentReversalDetails": AdjustmentReversalDetails,
    "AmountDetails": AmountDetails,
    "ArbitrationCaseCreate": ArbitrationCaseCreate,
    "CaseActionHistory": CaseActionHistory,
    "CaseCreateCaseId": CaseCreateCaseId,
    "CaseDetails": CaseDetails,
    "CaseDocumentAttributes": CaseDocumentAttributes,
    "CaseFilingSummaries": CaseFilingSummaries,
    "CaseTakeActionArbitration": CaseTakeActionArbitration,
    "CaseTakeActionCompliance": CaseTakeActionCompliance,
    "CaseTakeActionDocumentRetry": CaseTakeActionDocumentRetry,
    "CasesDocumentAttributes": CasesDocumentAttributes,
    "ChargebackDetails": ChargebackDetails,
    "ChargebackReversal": ChargebackReversal,
    "ChargebackReversalDetails": ChargebackReversalDetails,
    "ChargebackReversalEventId": ChargebackReversalEventId,
    "ChargebackSingleMessage": ChargebackSingleMessage,
    "ChargebackSingleMessageReversal": ChargebackSingleMessageReversal,
    "ChargebackUpdate": ChargebackUpdate,
    "Claim": Claim,
    "ClaimCollaborationDetails": ClaimCollaborationDetails,
    "ClaimCreateId": ClaimCreateId,
    "ClaimDetails": ClaimDetails,
    "ClaimSearch": ClaimSearch,
    "ClaimTransactionDetails": ClaimTransactionDetails,
    "ClaimTransactionSingleMessage": ClaimTransactionSingleMessage,
    "ClaimValidActions": ClaimValidActions,
    "ClaimsList": ClaimsList,
    "CompletedDocumentAttributes": CompletedDocumentAttributes,
    "ComplianceCaseCreate": ComplianceCaseCreate,
    "CreateClaim": CreateClaim,
    "CreatedReportDetails": CreatedReportDetails,
    "DisputesCreateEventId": DisputesCreateEventId,
    "Document": Document,
    "DocumentAttributes": DocumentAttributes,
    "DocumentAttributesList": DocumentAttributesList,
    "DocumentRetrieve": DocumentRetrieve,
    "DocumentUpload": DocumentUpload,
    "Documents": Documents,
    "ErrorWrapper": ErrorWrapper,
    "Errors": Errors,
    "InitiateDispute": InitiateDispute,
    "ModelError": ModelError,
    "Queue": Queue,
    "QueueDefinition": QueueDefinition,
    "QueueDefinitionsList": QueueDefinitionsList,
    "QueueDetails": QueueDetails,
    "QueueField": QueueField,
    "QueueFieldNameValue": QueueFieldNameValue,
    "Report": Report,
    "ReportDefinition": ReportDefinition,
    "ReportDefinitionCriteria": ReportDefinitionCriteria,
    "ReportDefinitionList": ReportDefinitionList,
    "ReportDetails": ReportDetails,
    "ReportFilter": ReportFilter,
    "ReportList": ReportList,
    "ReportSearch": ReportSearch,
    "ReportsCreate": ReportsCreate,
    "ReportsStatus": ReportsStatus,
    "RepresentmentCreate": RepresentmentCreate,
    "RepresentmentCreateEventId": RepresentmentCreateEventId,
    "RepresentmentDetails": RepresentmentDetails,
    "RepresentmentDetailsSingleMessage": RepresentmentDetailsSingleMessage,
    "RepresentmentReversal": RepresentmentReversal,
    "RepresentmentReversalDetails": RepresentmentReversalDetails,
    "RepresentmentReversalDetailsSingleMessage": RepresentmentReversalDetailsSingleMessage,
    "RepresentmentReversalEventId": RepresentmentReversalEventId,
    "RepresentmentSingleMessage": RepresentmentSingleMessage,
    "RepresentmentSingleMessageReversal": RepresentmentSingleMessageReversal,
    "RepresentmentUpdate": RepresentmentUpdate,
    "SingleMessageChargebackDetails": SingleMessageChargebackDetails,
    "SingleMessageReversalDetails": SingleMessageReversalDetails,
    "SingleMessageSummary": SingleMessageSummary,
    "TransactionData": TransactionData,
    "TransactionList": TransactionList,
    "TransactionSearch": TransactionSearch,
    "TransactionSingleMessage": TransactionSingleMessage,
    "ValidActionReasonCodes": ValidActionReasonCodes,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
