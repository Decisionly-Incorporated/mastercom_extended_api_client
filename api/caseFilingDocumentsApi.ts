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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { CaseTakeActionDocumentRetry } from '../model/caseTakeActionDocumentRetry';
import { CasesDocumentAttributes } from '../model/casesDocumentAttributes';
import { DocumentRetrieve } from '../model/documentRetrieve';
import { ErrorWrapper } from '../model/errorWrapper';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://dispute.mastercard.com/mastercom-extended';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum CaseFilingDocumentsApiApiKeys {
}

export class CaseFilingDocumentsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: CaseFilingDocumentsApiApiKeys, value: string) {
        (this.authentications as any)[CaseFilingDocumentsApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Senders and receivers use this endpoint to retrieve the processing status of documents associated with cases.
     * @summary Retrieve statuses for documents associated with cases
     * @param caseIds List of caseIds (identifier assigned by Mastercom to the case, obtained from the &#x60;&#x60;&#x60;POST /cases/arbitrations&#x60;&#x60;&#x60; or &#x60;&#x60;&#x60;POST /cases/compliances&#x60;&#x60;&#x60; endpoints). 
     */
    public async obtainCasesDocumentAttributes (caseIds: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CasesDocumentAttributes;  }> {
        const localVarPath = this.basePath + '/cases/documents/attributes';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'caseIds' is not null or undefined
        if (caseIds === null || caseIds === undefined) {
            throw new Error('Required parameter caseIds was null or undefined when calling obtainCasesDocumentAttributes.');
        }

        if (caseIds !== undefined) {
            localVarQueryParameters['case_ids'] = ObjectSerializer.serialize(caseIds, "Array<string>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CasesDocumentAttributes;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CasesDocumentAttributes");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Senders and receivers use this endpoint to retrieve all documents from a case. The documents include any documents attached by the sender, receiver, or both.
     * @summary Retrieve processed documents associated with cases
     * @param caseId Identifier assigned by Mastercom to the case, obtained from either the &#x60;&#x60;&#x60;POST /cases/arbitrations&#x60;&#x60;&#x60; or &#x60;&#x60;&#x60;POST /cases/compliances&#x60;&#x60;&#x60; endpoints.  *Valid Values/Format:* Numeric. 
     * @param downloadFormat Desired format of the documents.  *Available values:* ORIGINAL, MERGED_TIFF, MERGED_PDF 
     */
    public async retrieveCaseDocuments (caseId: string, downloadFormat: 'ORIGINAL' | 'MERGED_TIFF' | 'MERGED_PDF', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DocumentRetrieve;  }> {
        const localVarPath = this.basePath + '/cases/{case_id}/documents'
            .replace('{' + 'case_id' + '}', encodeURIComponent(String(caseId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling retrieveCaseDocuments.');
        }

        // verify required parameter 'downloadFormat' is not null or undefined
        if (downloadFormat === null || downloadFormat === undefined) {
            throw new Error('Required parameter downloadFormat was null or undefined when calling retrieveCaseDocuments.');
        }

        if (downloadFormat !== undefined) {
            localVarQueryParameters['download_format'] = ObjectSerializer.serialize(downloadFormat, "'ORIGINAL' | 'MERGED_TIFF' | 'MERGED_PDF'");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: DocumentRetrieve;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "DocumentRetrieve");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Senders and receivers use this endpoint to attach a new document to an existing case when the previous document failed to process.  Document processing status can be retrieved from the ```GET /cases/documents/attributes``` endpoint. 
     * @summary Attach a new document to a case after a document failed to process
     * @param caseId Identifier assigned by Mastercom to the case, obtained from either the &#x60;&#x60;&#x60;POST /cases/arbitrations&#x60;&#x60;&#x60; or &#x60;&#x60;&#x60;POST /cases/compliances&#x60;&#x60;&#x60; endpoints.  *Valid Values/Format:* Numeric. 
     * @param caseTakeActionDocumentRetry 
     */
    public async retryDocumentUpload (caseId: string, caseTakeActionDocumentRetry: CaseTakeActionDocumentRetry, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/cases/{case_id}/documents'
            .replace('{' + 'case_id' + '}', encodeURIComponent(String(caseId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling retryDocumentUpload.');
        }

        // verify required parameter 'caseTakeActionDocumentRetry' is not null or undefined
        if (caseTakeActionDocumentRetry === null || caseTakeActionDocumentRetry === undefined) {
            throw new Error('Required parameter caseTakeActionDocumentRetry was null or undefined when calling retryDocumentUpload.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(caseTakeActionDocumentRetry, "CaseTakeActionDocumentRetry")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
