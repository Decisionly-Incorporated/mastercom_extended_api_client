export * from './caseFilingApi';
import { CaseFilingApi } from './caseFilingApi';
export * from './caseFilingDocumentsApi';
import { CaseFilingDocumentsApi } from './caseFilingDocumentsApi';
export * from './chargebacksApi';
import { ChargebacksApi } from './chargebacksApi';
export * from './claimsApi';
import { ClaimsApi } from './claimsApi';
export * from './disputesApi';
import { DisputesApi } from './disputesApi';
export * from './documentsApi';
import { DocumentsApi } from './documentsApi';
export * from './queuesApi';
import { QueuesApi } from './queuesApi';
export * from './reportDefinitionsApi';
import { ReportDefinitionsApi } from './reportDefinitionsApi';
export * from './reportsApi';
import { ReportsApi } from './reportsApi';
export * from './representmentsApi';
import { RepresentmentsApi } from './representmentsApi';
export * from './transactionsApi';
import { TransactionsApi } from './transactionsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [CaseFilingApi, CaseFilingDocumentsApi, ChargebacksApi, ClaimsApi, DisputesApi, DocumentsApi, QueuesApi, ReportDefinitionsApi, ReportsApi, RepresentmentsApi, TransactionsApi];
