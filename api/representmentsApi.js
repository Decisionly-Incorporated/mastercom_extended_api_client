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
exports.RepresentmentsApi = exports.RepresentmentsApiApiKeys = void 0;
var request_1 = __importDefault(require("request"));
var models_1 = require("../model/models");
var apis_1 = require("./apis");
var defaultBasePath = 'https://dispute.mastercard.com/mastercom-extended';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var RepresentmentsApiApiKeys;
(function (RepresentmentsApiApiKeys) {
})(RepresentmentsApiApiKeys || (exports.RepresentmentsApiApiKeys = RepresentmentsApiApiKeys = {}));
var RepresentmentsApi = /** @class */ (function () {
    function RepresentmentsApi(basePathOrUsername, password, basePath) {
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
    Object.defineProperty(RepresentmentsApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepresentmentsApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepresentmentsApi.prototype, "defaultHeaders", {
        get: function () {
            return this._defaultHeaders;
        },
        set: function (defaultHeaders) {
            this._defaultHeaders = defaultHeaders;
        },
        enumerable: false,
        configurable: true
    });
    RepresentmentsApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    RepresentmentsApi.prototype.setApiKey = function (key, value) {
        this.authentications[RepresentmentsApiApiKeys[key]].apiKey = value;
    };
    RepresentmentsApi.prototype.addInterceptor = function (interceptor) {
        this.interceptors.push(interceptor);
    };
    /**
     * Acquirers use the endpoint to create a representment.
     * @summary Create a representment
     * @param claimId Identifier assigned by Mastercom to the claim, obtained from the &#x60;&#x60;&#x60;POST /claims/searches&#x60;&#x60;&#x60; endpoint.
     * @param eventId Identifier assigned by Mastercom to the dispute event, obtained from the endpoint used to create the dispute event.
     * @param representmentCreate
     */
    RepresentmentsApi.prototype.representmentCreate = function (claimId_1, eventId_1, representmentCreate_1) {
        return __awaiter(this, arguments, void 0, function (claimId, eventId, representmentCreate, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_1, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/claims/{claim_id}/chargebacks/{event_id}/representments'
                    .replace('{' + 'claim_id' + '}', encodeURIComponent(String(claimId)))
                    .replace('{' + 'event_id' + '}', encodeURIComponent(String(eventId)));
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
                // verify required parameter 'claimId' is not null or undefined
                if (claimId === null || claimId === undefined) {
                    throw new Error('Required parameter claimId was null or undefined when calling representmentCreate.');
                }
                // verify required parameter 'eventId' is not null or undefined
                if (eventId === null || eventId === undefined) {
                    throw new Error('Required parameter eventId was null or undefined when calling representmentCreate.');
                }
                // verify required parameter 'representmentCreate' is not null or undefined
                if (representmentCreate === null || representmentCreate === undefined) {
                    throw new Error('Required parameter representmentCreate was null or undefined when calling representmentCreate.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(representmentCreate, "RepresentmentCreate")
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
                                        body = models_1.ObjectSerializer.deserialize(body, "RepresentmentCreateEventId");
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
     * Acquirers use this endpoint to reverse existing representments.
     * @summary Reverse a representment
     * @param claimId Identifier assigned by Mastercom to the claim, obtained from the &#x60;&#x60;&#x60;POST /claims/searches&#x60;&#x60;&#x60; endpoint.
     * @param eventId Identifier assigned by Mastercom to the dispute event, obtained from the endpoint used to create the dispute event.
     * @param representmentReversal
     */
    RepresentmentsApi.prototype.reverseRepresentment = function (claimId_1, eventId_1, representmentReversal_1) {
        return __awaiter(this, arguments, void 0, function (claimId, eventId, representmentReversal, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_2, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/claims/{claim_id}/representments/{event_id}/reversals'
                    .replace('{' + 'claim_id' + '}', encodeURIComponent(String(claimId)))
                    .replace('{' + 'event_id' + '}', encodeURIComponent(String(eventId)));
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
                // verify required parameter 'claimId' is not null or undefined
                if (claimId === null || claimId === undefined) {
                    throw new Error('Required parameter claimId was null or undefined when calling reverseRepresentment.');
                }
                // verify required parameter 'eventId' is not null or undefined
                if (eventId === null || eventId === undefined) {
                    throw new Error('Required parameter eventId was null or undefined when calling reverseRepresentment.');
                }
                // verify required parameter 'representmentReversal' is not null or undefined
                if (representmentReversal === null || representmentReversal === undefined) {
                    throw new Error('Required parameter representmentReversal was null or undefined when calling reverseRepresentment.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(representmentReversal, "RepresentmentReversal")
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
                                        body = models_1.ObjectSerializer.deserialize(body, "RepresentmentReversalEventId");
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
     * Issuers use this endpoint to acknowledge a representment, which moves the claim to the Worked queue. Issuers may take further actions on acknowledged claims.
     * @summary Update a representment
     * @param claimId Identifier assigned by Mastercom to the claim, obtained from the &#x60;&#x60;&#x60;POST /claims/searches&#x60;&#x60;&#x60; endpoint.
     * @param eventId Identifier assigned by Mastercom to the dispute event, obtained from the endpoint used to create the dispute event.
     * @param representmentUpdate
     */
    RepresentmentsApi.prototype.updateRepresentment = function (claimId_1, eventId_1, representmentUpdate_1) {
        return __awaiter(this, arguments, void 0, function (claimId, eventId, representmentUpdate, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_3, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/claims/{claim_id}/representments/{event_id}'
                    .replace('{' + 'claim_id' + '}', encodeURIComponent(String(claimId)))
                    .replace('{' + 'event_id' + '}', encodeURIComponent(String(eventId)));
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
                // verify required parameter 'claimId' is not null or undefined
                if (claimId === null || claimId === undefined) {
                    throw new Error('Required parameter claimId was null or undefined when calling updateRepresentment.');
                }
                // verify required parameter 'eventId' is not null or undefined
                if (eventId === null || eventId === undefined) {
                    throw new Error('Required parameter eventId was null or undefined when calling updateRepresentment.');
                }
                // verify required parameter 'representmentUpdate' is not null or undefined
                if (representmentUpdate === null || representmentUpdate === undefined) {
                    throw new Error('Required parameter representmentUpdate was null or undefined when calling updateRepresentment.');
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
                    body: models_1.ObjectSerializer.serialize(representmentUpdate, "RepresentmentUpdate")
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
    return RepresentmentsApi;
}());
exports.RepresentmentsApi = RepresentmentsApi;