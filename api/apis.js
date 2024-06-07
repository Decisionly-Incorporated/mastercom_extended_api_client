"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./caseFilingApi"), exports);
var caseFilingApi_1 = require("./caseFilingApi");
__exportStar(require("./chargebacksApi"), exports);
var chargebacksApi_1 = require("./chargebacksApi");
__exportStar(require("./chargebacksDebitMasterCardAndEuropeDualAcquirerApi"), exports);
var chargebacksDebitMasterCardAndEuropeDualAcquirerApi_1 = require("./chargebacksDebitMasterCardAndEuropeDualAcquirerApi");
__exportStar(require("./claimsApi"), exports);
var claimsApi_1 = require("./claimsApi");
__exportStar(require("./feesApi"), exports);
var feesApi_1 = require("./feesApi");
__exportStar(require("./feesDebitMasterCardAndEuropeDualAcquirerApi"), exports);
var feesDebitMasterCardAndEuropeDualAcquirerApi_1 = require("./feesDebitMasterCardAndEuropeDualAcquirerApi");
__exportStar(require("./fraudApi"), exports);
var fraudApi_1 = require("./fraudApi");
__exportStar(require("./healthCheckApi"), exports);
var healthCheckApi_1 = require("./healthCheckApi");
__exportStar(require("./queuesApi"), exports);
var queuesApi_1 = require("./queuesApi");
__exportStar(require("./reconciliationApi"), exports);
var reconciliationApi_1 = require("./reconciliationApi");
__exportStar(require("./retrievalsApi"), exports);
var retrievalsApi_1 = require("./retrievalsApi");
__exportStar(require("./retrievalsDebitMasterCardAndEuropeDualAcquirerApi"), exports);
var retrievalsDebitMasterCardAndEuropeDualAcquirerApi_1 = require("./retrievalsDebitMasterCardAndEuropeDualAcquirerApi");
__exportStar(require("./transactionsApi"), exports);
var transactionsApi_1 = require("./transactionsApi");
__exportStar(require("./transactionsDebitMasterCardAndEuropeDualAcquirerApi"), exports);
var transactionsDebitMasterCardAndEuropeDualAcquirerApi_1 = require("./transactionsDebitMasterCardAndEuropeDualAcquirerApi");
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(response, body, statusCode) {
        var _this = _super.call(this, 'HTTP request failed') || this;
        _this.response = response;
        _this.body = body;
        _this.statusCode = statusCode;
        _this.name = 'HttpError';
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
exports.APIS = [caseFilingApi_1.CaseFilingApi, chargebacksApi_1.ChargebacksApi, chargebacksDebitMasterCardAndEuropeDualAcquirerApi_1.ChargebacksDebitMasterCardAndEuropeDualAcquirerApi, claimsApi_1.ClaimsApi, feesApi_1.FeesApi, feesDebitMasterCardAndEuropeDualAcquirerApi_1.FeesDebitMasterCardAndEuropeDualAcquirerApi, fraudApi_1.FraudApi, healthCheckApi_1.HealthCheckApi, queuesApi_1.QueuesApi, reconciliationApi_1.ReconciliationApi, retrievalsApi_1.RetrievalsApi, retrievalsDebitMasterCardAndEuropeDualAcquirerApi_1.RetrievalsDebitMasterCardAndEuropeDualAcquirerApi, transactionsApi_1.TransactionsApi, transactionsDebitMasterCardAndEuropeDualAcquirerApi_1.TransactionsDebitMasterCardAndEuropeDualAcquirerApi];
