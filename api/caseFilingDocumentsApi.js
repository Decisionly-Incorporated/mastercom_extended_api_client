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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseFilingDocumentsApi = exports.CaseFilingDocumentsApiApiKeys = void 0;
var request_1 = __importDefault(require("request"));
var models_1 = require("../model/models");
var apis_1 = require("./apis");
var defaultBasePath = 'https://dispute.mastercard.com/mastercom-extended';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var CaseFilingDocumentsApiApiKeys;
(function (CaseFilingDocumentsApiApiKeys) {
})(CaseFilingDocumentsApiApiKeys || (exports.CaseFilingDocumentsApiApiKeys = CaseFilingDocumentsApiApiKeys = {}));
var CaseFilingDocumentsApi = /** @class */ (function () {
    function CaseFilingDocumentsApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this._defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
        };
        this.interceptors = [];
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(CaseFilingDocumentsApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CaseFilingDocumentsApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CaseFilingDocumentsApi.prototype, "defaultHeaders", {
        get: function () {
            return this._defaultHeaders;
        },
        set: function (defaultHeaders) {
            this._defaultHeaders = defaultHeaders;
        },
        enumerable: false,
        configurable: true
    });
    CaseFilingDocumentsApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    CaseFilingDocumentsApi.prototype.setApiKey = function (key, value) {
        this.authentications[CaseFilingDocumentsApiApiKeys[key]].apiKey = value;
    };
    CaseFilingDocumentsApi.prototype.addInterceptor = function (interceptor) {
        this.interceptors.push(interceptor);
    };
    /**
     * Senders and receivers use this endpoint to retrieve the processing status of documents associated with cases.
     * @summary Retrieve statuses for documents associated with cases
     * @param caseIds List of caseIds (identifier assigned by Mastercom to the case, obtained from the &#x60;&#x60;&#x60;POST /cases/arbitrations&#x60;&#x60;&#x60; or &#x60;&#x60;&#x60;POST /cases/compliances&#x60;&#x60;&#x60; endpoints).
     */
    CaseFilingDocumentsApi.prototype.obtainCasesDocumentAttributes = function (caseIds_1) {
        return __awaiter(this, arguments, void 0, function (caseIds, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_1, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/cases/documents/attributes';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                // verify required parameter 'caseIds' is not null or undefined
                if (caseIds === null || caseIds === undefined) {
                    throw new Error('Required parameter caseIds was null or undefined when calling obtainCasesDocumentAttributes.');
                }
                if (caseIds !== undefined) {
                    localVarQueryParameters['case_ids'] = models_1.ObjectSerializer.serialize(caseIds, "Array<string>");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_1 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_1(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "CasesDocumentAttributes");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    /**
     * Senders and receivers use this endpoint to retrieve all documents from a case. The documents include any documents attached by the sender, receiver, or both.
     * @summary Retrieve processed documents associated with cases
     * @param caseId Identifier assigned by Mastercom to the case, obtained from either the &#x60;&#x60;&#x60;POST /cases/arbitrations&#x60;&#x60;&#x60; or &#x60;&#x60;&#x60;POST /cases/compliances&#x60;&#x60;&#x60; endpoints.  *Valid Values/Format:* Numeric.
     * @param downloadFormat Desired format of the documents.  *Available values:* ORIGINAL, MERGED_TIFF, MERGED_PDF
     */
    CaseFilingDocumentsApi.prototype.retrieveCaseDocuments = function (caseId_1, downloadFormat_1) {
        return __awaiter(this, arguments, void 0, function (caseId, downloadFormat, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_2, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/cases/{case_id}/documents'
                    .replace('{' + 'case_id' + '}', encodeURIComponent(String(caseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                // verify required parameter 'caseId' is not null or undefined
                if (caseId === null || caseId === undefined) {
                    throw new Error('Required parameter caseId was null or undefined when calling retrieveCaseDocuments.');
                }
                // verify required parameter 'downloadFormat' is not null or undefined
                if (downloadFormat === null || downloadFormat === undefined) {
                    throw new Error('Required parameter downloadFormat was null or undefined when calling retrieveCaseDocuments.');
                }
                if (downloadFormat !== undefined) {
                    localVarQueryParameters['download_format'] = models_1.ObjectSerializer.serialize(downloadFormat, "'ORIGINAL' | 'MERGED_TIFF' | 'MERGED_PDF'");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_2 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_2(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "DocumentRetrieve");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    /**
     * Senders and receivers use this endpoint to attach a new document to an existing case when the previous document failed to process.  Document processing status can be retrieved from the ```GET /cases/documents/attributes``` endpoint.
     * @summary Attach a new document to a case after a document failed to process
     * @param caseId Identifier assigned by Mastercom to the case, obtained from either the &#x60;&#x60;&#x60;POST /cases/arbitrations&#x60;&#x60;&#x60; or &#x60;&#x60;&#x60;POST /cases/compliances&#x60;&#x60;&#x60; endpoints.  *Valid Values/Format:* Numeric.
     * @param caseTakeActionDocumentRetry
     */
    CaseFilingDocumentsApi.prototype.retryDocumentUpload = function (caseId_1, caseTakeActionDocumentRetry_1) {
        return __awaiter(this, arguments, void 0, function (caseId, caseTakeActionDocumentRetry, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_3, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/cases/{case_id}/documents'
                    .replace('{' + 'case_id' + '}', encodeURIComponent(String(caseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                // verify required parameter 'caseId' is not null or undefined
                if (caseId === null || caseId === undefined) {
                    throw new Error('Required parameter caseId was null or undefined when calling retryDocumentUpload.');
                }
                // verify required parameter 'caseTakeActionDocumentRetry' is not null or undefined
                if (caseTakeActionDocumentRetry === null || caseTakeActionDocumentRetry === undefined) {
                    throw new Error('Required parameter caseTakeActionDocumentRetry was null or undefined when calling retryDocumentUpload.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PUT',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(caseTakeActionDocumentRetry, "CaseTakeActionDocumentRetry")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_3 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_3(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    return CaseFilingDocumentsApi;
}());
exports.CaseFilingDocumentsApi = CaseFilingDocumentsApi;