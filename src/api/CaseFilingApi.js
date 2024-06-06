/**
 * MasterCom
 * MasterCom
 *
 * The version of the OpenAPI document: v6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CaseFilingClaimsRequest from '../model/CaseFilingClaimsRequest';
import CaseFilingClaimsResponse from '../model/CaseFilingClaimsResponse';
import CaseFilingImageStatusRequest from '../model/CaseFilingImageStatusRequest';
import CaseFilingImageStatusResponse from '../model/CaseFilingImageStatusResponse';
import CaseFilingResponse from '../model/CaseFilingResponse';
import CaseFilingStatusRequest from '../model/CaseFilingStatusRequest';
import CaseFilingStatusResponse from '../model/CaseFilingStatusResponse';
import CreateCaseRequest from '../model/CreateCaseRequest';
import DocumentResponseStructure from '../model/DocumentResponseStructure';
import Errors from '../model/Errors';
import UpdateCaseRequest from '../model/UpdateCaseRequest';

/**
* CaseFiling service.
* @module api/CaseFilingApi
* @version v6
*/
export default class CaseFilingApi {

    /**
    * Constructs a new CaseFilingApi. 
    * @alias module:api/CaseFilingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCaseFiling operation.
     * @callback module:api/CaseFilingApi~createCaseFilingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CaseFilingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Issuer or acquirers use this endpoint to file a pre-arbitration, arbitration, pre-compliance, or compliance case and optionally upload documents. Issuers and acquirers also have the option to use the endpoint to create an Expedited Billing Dispute Form (EBDF) and attach it to the claim.   Note: issuers or acquirers should not attach documents while requesting the automatic generation of the EBDF. Therefore, if issuers or acquirers need to submit the EBDF with additional documentation, they must complete the EBDF and include it in a ZIP file with any additional documentation.
     * @param {module:model/CreateCaseRequest} body Create Case Filing information
     * @param {module:api/CaseFilingApi~createCaseFilingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CaseFilingResponse}
     */
    createCaseFiling(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createCaseFiling");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CaseFilingResponse;
      return this.apiClient.callApi(
        '/v6/cases', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCaseFilingDoc operation.
     * @callback module:api/CaseFilingApi~getCaseFilingDocCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentResponseStructure} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Issuers and acquirers use this endpoint to retrieve all documents in a desired format associated with a case.   Note: this endpoint returns all documents that either party has submitted for the case.
     * @param {String} caseId The case filing id.   Length: 0-19   Valid Values/Format: Numeric
     * @param {module:model/String} format File Format.   Length: 8-11   Valid Values/Format: ORIGINAL, MERGED_TIFF, MERGED_PDF
     * @param {Object} opts Optional parameters
     * @param {String} [memo] Adding field for future use. Please leave blank at this time.   Length: N/A    Valid Values/Format: Alphanumeric
     * @param {module:api/CaseFilingApi~getCaseFilingDocCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentResponseStructure}
     */
    getCaseFilingDoc(caseId, format, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'caseId' is set
      if (caseId === undefined || caseId === null) {
        throw new Error("Missing the required parameter 'caseId' when calling getCaseFilingDoc");
      }
      // verify the required parameter 'format' is set
      if (format === undefined || format === null) {
        throw new Error("Missing the required parameter 'format' when calling getCaseFilingDoc");
      }

      let pathParams = {
        'case-id': caseId
      };
      let queryParams = {
        'format': format,
        'memo': opts['memo']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DocumentResponseStructure;
      return this.apiClient.callApi(
        '/v6/cases/{case-id}/documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveCaseFilingImageStatus operation.
     * @callback module:api/CaseFilingApi~retrieveCaseFilingImageStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CaseFilingImageStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Issuers and acquirers use this endpoint to search documents that have a specific status (completed, pending, failed, unavailable, and document not applicable) for case filings.   Note: For customers with high volumes of chargebacks or large numbers of BINs, Mastercom recommends using the Case Filing Status endpoint rather than the Case Filing Image Status endpoint.
     * @param {module:model/CaseFilingImageStatusRequest} body Case Filing information
     * @param {module:api/CaseFilingApi~retrieveCaseFilingImageStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CaseFilingImageStatusResponse}
     */
    retrieveCaseFilingImageStatus(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling retrieveCaseFilingImageStatus");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CaseFilingImageStatusResponse;
      return this.apiClient.callApi(
        '/v6/cases/imagestatus', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveCaseFilingStatus operation.
     * @callback module:api/CaseFilingApi~retrieveCaseFilingStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CaseFilingStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Issuers and acquirers use this endpoint to search for the status of documents of a specific list of cases.   Note: issuers and acquirers may send a maximum of 2,000 case IDs within a single request.
     * @param {module:model/CaseFilingStatusRequest} body Case Filing information
     * @param {module:api/CaseFilingApi~retrieveCaseFilingStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CaseFilingStatusResponse}
     */
    retrieveCaseFilingStatus(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling retrieveCaseFilingStatus");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CaseFilingStatusResponse;
      return this.apiClient.callApi(
        '/v6/cases/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveClaims operation.
     * @callback module:api/CaseFilingApi~retrieveClaimsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CaseFilingClaimsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Issuers or acquirers use this endpoint to retrieve a list of claims associated with existing cases.
     * @param {module:model/CaseFilingClaimsRequest} body Case Filing Retrieve Claims request information
     * @param {module:api/CaseFilingApi~retrieveClaimsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CaseFilingClaimsResponse}
     */
    retrieveClaims(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling retrieveClaims");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CaseFilingClaimsResponse;
      return this.apiClient.callApi(
        '/v6/cases/retrieve/claims', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCaseFiling operation.
     * @callback module:api/CaseFilingApi~updateCaseFilingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CaseFilingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Issuers or acquirers use this endpoint to take action (accept, reject, rebut, escalate, withdraw) on a case filing. Issuers and acquirers may take action with or without attaching documents.
     * @param {String} caseId Case filing Id.   Length: 1-19   Valid Values/Format: Numeric
     * @param {module:model/UpdateCaseRequest} body Update Case Filing information
     * @param {module:api/CaseFilingApi~updateCaseFilingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CaseFilingResponse}
     */
    updateCaseFiling(caseId, body, callback) {
      let postBody = body;
      // verify the required parameter 'caseId' is set
      if (caseId === undefined || caseId === null) {
        throw new Error("Missing the required parameter 'caseId' when calling updateCaseFiling");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCaseFiling");
      }

      let pathParams = {
        'case-id': caseId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CaseFilingResponse;
      return this.apiClient.callApi(
        '/v6/cases/{case-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
