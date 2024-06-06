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
import CreateRetrievalRequestSingle from '../model/CreateRetrievalRequestSingle';
import CreateRetrievalResponse from '../model/CreateRetrievalResponse';
import DocumentResponseStructure from '../model/DocumentResponseStructure';
import Errors from '../model/Errors';
import IssuerFulfillmentRequest from '../model/IssuerFulfillmentRequest';
import RetrievalResponse from '../model/RetrievalResponse';
import RetrievalStatusRequest from '../model/RetrievalStatusRequest';
import RetrievalStatusResponse from '../model/RetrievalStatusResponse';
import RetrievalsImageStatusRequest from '../model/RetrievalsImageStatusRequest';
import RetrievalsImageStatusResponse from '../model/RetrievalsImageStatusResponse';

/**
* RetrievalsDebitMasterCardAndEuropeDualAcquirer service.
* @module api/RetrievalsDebitMasterCardAndEuropeDualAcquirerApi
* @version v6
*/
export default class RetrievalsDebitMasterCardAndEuropeDualAcquirerApi {

    /**
    * Constructs a new RetrievalsDebitMasterCardAndEuropeDualAcquirerApi. 
    * @alias module:api/RetrievalsDebitMasterCardAndEuropeDualAcquirerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createRetrievalRequestDebitMC operation.
     * @callback module:api/RetrievalsDebitMasterCardAndEuropeDualAcquirerApi~createRetrievalRequestDebitMCCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateRetrievalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Prior to creating a chargeback, an issuer uses this endpoint to create a retrieval request for a Debit Mastercard or Europe Dual Acquirer transaction for the acquirer to fulfill by providing a copy of the transaction information document (TID). The TID is used to satisfy a cardholder's inquiry or to satisfy an issuer's investigation of an original transaction.   NOTE: An issuer is not required to create a retrieval request in order to create a first chargeback on a claim.   NOTE:Â Creation of retrieval request is allowed only for reversalReasonCode (healthcare reason code (43)) starting on October 24th, 2021.
     * @param {String} claimId Claim Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric
     * @param {module:model/CreateRetrievalRequestSingle} body Create Retrieval Request
     * @param {module:api/RetrievalsDebitMasterCardAndEuropeDualAcquirerApi~createRetrievalRequestDebitMCCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateRetrievalResponse}
     */
    createRetrievalRequestDebitMC(claimId, body, callback) {
      let postBody = body;
      // verify the required parameter 'claimId' is set
      if (claimId === undefined || claimId === null) {
        throw new Error("Missing the required parameter 'claimId' when calling createRetrievalRequestDebitMC");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createRetrievalRequestDebitMC");
      }

      let pathParams = {
        'claim-id': claimId
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
      let returnType = CreateRetrievalResponse;
      return this.apiClient.callApi(
        '/v6/claims/{claim-id}/retrievalrequests/debitmc', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRetrievalDocDebitMC operation.
     * @callback module:api/RetrievalsDebitMasterCardAndEuropeDualAcquirerApi~getRetrievalDocDebitMCCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentResponseStructure} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Issuers and acquirers use this endpoint to retrieve all documents from acquirers associated with retrieval request fulfillment
     * @param {String} claimId The Claim Id.   Length: 1-19   Valid Values/Format: Numeric
     * @param {String} requestId The Request Id.   Length: 1-19   Valid Values/Format: Numeric
     * @param {module:model/String} format File Format.   Length: 8-11   Valid Values/Format: ORIGINAL, MERGED_TIFF, MERGED_PDF
     * @param {module:api/RetrievalsDebitMasterCardAndEuropeDualAcquirerApi~getRetrievalDocDebitMCCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentResponseStructure}
     */
    getRetrievalDocDebitMC(claimId, requestId, format, callback) {
      let postBody = null;
      // verify the required parameter 'claimId' is set
      if (claimId === undefined || claimId === null) {
        throw new Error("Missing the required parameter 'claimId' when calling getRetrievalDocDebitMC");
      }
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling getRetrievalDocDebitMC");
      }
      // verify the required parameter 'format' is set
      if (format === undefined || format === null) {
        throw new Error("Missing the required parameter 'format' when calling getRetrievalDocDebitMC");
      }

      let pathParams = {
        'claim-id': claimId,
        'request-id': requestId
      };
      let queryParams = {
        'format': format
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
        '/v6/claims/{claim-id}/retrievalrequests/debitmc/{request-id}/documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the issuerResponseRetrievalDebitMCRequest operation.
     * @callback module:api/RetrievalsDebitMasterCardAndEuropeDualAcquirerApi~issuerResponseRetrievalDebitMCRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RetrievalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * After an acquirer fulfills a retrieval request, an issuer uses this endpoint to approve or reject a retrieval request fulfillment. The issuer approves the fulfillment or rejects the fulfillment if the documentation does not meet requirements.
     * @param {String} claimId Claim Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric
     * @param {String} requestId Request Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric
     * @param {module:model/IssuerFulfillmentRequest} body Issuer Fulfillment Response
     * @param {module:api/RetrievalsDebitMasterCardAndEuropeDualAcquirerApi~issuerResponseRetrievalDebitMCRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RetrievalResponse}
     */
    issuerResponseRetrievalDebitMCRequest(claimId, requestId, body, callback) {
      let postBody = body;
      // verify the required parameter 'claimId' is set
      if (claimId === undefined || claimId === null) {
        throw new Error("Missing the required parameter 'claimId' when calling issuerResponseRetrievalDebitMCRequest");
      }
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling issuerResponseRetrievalDebitMCRequest");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issuerResponseRetrievalDebitMCRequest");
      }

      let pathParams = {
        'claim-id': claimId,
        'request-id': requestId
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
      let returnType = RetrievalResponse;
      return this.apiClient.callApi(
        '/v6/claims/{claim-id}/retrievalrequests/debitmc/{request-id}/fulfillments/response', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveFulfillmentDebitMCImageStatus operation.
     * @callback module:api/RetrievalsDebitMasterCardAndEuropeDualAcquirerApi~retrieveFulfillmentDebitMCImageStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RetrievalsImageStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Issuers and acquirers use this endpoint to search for documents that have a specific status (completed, pending, failed, unavailable, and document not applicable) for retrieval requests.   Note: For customers with high volumes of fulfillments or large numbers of BINs, Mastercom recommends using the Retrieval Fullfilment Status endpoint rather than the Retrieval Fullfilment Image Status endpoint.
     * @param {module:model/RetrievalsImageStatusRequest} body Retrieval information
     * @param {module:api/RetrievalsDebitMasterCardAndEuropeDualAcquirerApi~retrieveFulfillmentDebitMCImageStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RetrievalsImageStatusResponse}
     */
    retrieveFulfillmentDebitMCImageStatus(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling retrieveFulfillmentDebitMCImageStatus");
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
      let returnType = RetrievalsImageStatusResponse;
      return this.apiClient.callApi(
        '/v6/retrievalrequests/debitmc/imagestatus', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveFulfillmentDebitMCStatus operation.
     * @callback module:api/RetrievalsDebitMasterCardAndEuropeDualAcquirerApi~retrieveFulfillmentDebitMCStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RetrievalStatusResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Issuers and acquirers use this endpoint to search for the status of documents that are associated with a specific list of retrieval requests.   Note: Issuers and acquirers may send a maximum of 2,000 retrieval fulfillment IDs within a single request.
     * @param {module:model/RetrievalStatusRequest} body Retrieval information
     * @param {module:api/RetrievalsDebitMasterCardAndEuropeDualAcquirerApi~retrieveFulfillmentDebitMCStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RetrievalStatusResponse}
     */
    retrieveFulfillmentDebitMCStatus(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling retrieveFulfillmentDebitMCStatus");
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
      let returnType = RetrievalStatusResponse;
      return this.apiClient.callApi(
        '/v6/retrievalrequests/debitmc/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}