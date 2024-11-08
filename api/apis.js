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
__exportStar(require("./caseFilingDocumentsApi"), exports);
var caseFilingDocumentsApi_1 = require("./caseFilingDocumentsApi");
__exportStar(require("./chargebacksApi"), exports);
var chargebacksApi_1 = require("./chargebacksApi");
__exportStar(require("./claimsApi"), exports);
var claimsApi_1 = require("./claimsApi");
__exportStar(require("./disputesApi"), exports);
var disputesApi_1 = require("./disputesApi");
__exportStar(require("./documentsApi"), exports);
var documentsApi_1 = require("./documentsApi");
__exportStar(require("./queuesApi"), exports);
var queuesApi_1 = require("./queuesApi");
__exportStar(require("./reportDefinitionsApi"), exports);
var reportDefinitionsApi_1 = require("./reportDefinitionsApi");
__exportStar(require("./reportsApi"), exports);
var reportsApi_1 = require("./reportsApi");
__exportStar(require("./representmentsApi"), exports);
var representmentsApi_1 = require("./representmentsApi");
__exportStar(require("./transactionsApi"), exports);
var transactionsApi_1 = require("./transactionsApi");
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
exports.APIS = [caseFilingApi_1.CaseFilingApi, caseFilingDocumentsApi_1.CaseFilingDocumentsApi, chargebacksApi_1.ChargebacksApi, claimsApi_1.ClaimsApi, disputesApi_1.DisputesApi, documentsApi_1.DocumentsApi, queuesApi_1.QueuesApi, reportDefinitionsApi_1.ReportDefinitionsApi, reportsApi_1.ReportsApi, representmentsApi_1.RepresentmentsApi, transactionsApi_1.TransactionsApi];
