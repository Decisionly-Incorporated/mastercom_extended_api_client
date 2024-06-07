export * from './caseFilingApi';
import { CaseFilingApi } from './caseFilingApi';
export * from './chargebacksApi';
import { ChargebacksApi } from './chargebacksApi';
export * from './chargebacksDebitMasterCardAndEuropeDualAcquirerApi';
import { ChargebacksDebitMasterCardAndEuropeDualAcquirerApi } from './chargebacksDebitMasterCardAndEuropeDualAcquirerApi';
export * from './claimsApi';
import { ClaimsApi } from './claimsApi';
export * from './feesApi';
import { FeesApi } from './feesApi';
export * from './feesDebitMasterCardAndEuropeDualAcquirerApi';
import { FeesDebitMasterCardAndEuropeDualAcquirerApi } from './feesDebitMasterCardAndEuropeDualAcquirerApi';
export * from './fraudApi';
import { FraudApi } from './fraudApi';
export * from './healthCheckApi';
import { HealthCheckApi } from './healthCheckApi';
export * from './queuesApi';
import { QueuesApi } from './queuesApi';
export * from './reconciliationApi';
import { ReconciliationApi } from './reconciliationApi';
export * from './retrievalsApi';
import { RetrievalsApi } from './retrievalsApi';
export * from './retrievalsDebitMasterCardAndEuropeDualAcquirerApi';
import { RetrievalsDebitMasterCardAndEuropeDualAcquirerApi } from './retrievalsDebitMasterCardAndEuropeDualAcquirerApi';
export * from './transactionsApi';
import { TransactionsApi } from './transactionsApi';
export * from './transactionsDebitMasterCardAndEuropeDualAcquirerApi';
import { TransactionsDebitMasterCardAndEuropeDualAcquirerApi } from './transactionsDebitMasterCardAndEuropeDualAcquirerApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [CaseFilingApi, ChargebacksApi, ChargebacksDebitMasterCardAndEuropeDualAcquirerApi, ClaimsApi, FeesApi, FeesDebitMasterCardAndEuropeDualAcquirerApi, FraudApi, HealthCheckApi, QueuesApi, ReconciliationApi, RetrievalsApi, RetrievalsDebitMasterCardAndEuropeDualAcquirerApi, TransactionsApi, TransactionsDebitMasterCardAndEuropeDualAcquirerApi];
