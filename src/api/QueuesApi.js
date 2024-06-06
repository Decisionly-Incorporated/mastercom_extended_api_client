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
import ClaimSummary from '../model/ClaimSummary';
import Errors from '../model/Errors';
import GetQueueContentRequest from '../model/GetQueueContentRequest';
import Queue from '../model/Queue';
import QueueContentSummary from '../model/QueueContentSummary';

/**
* Queues service.
* @module api/QueuesApi
* @version v6
*/
export default class QueuesApi {

    /**
    * Constructs a new QueuesApi. 
    * @alias module:api/QueuesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getQueueSummary operation.
     * @callback module:api/QueuesApi~getQueueSummaryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ClaimSummary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * An issuer or acquirer uses this endpoint to retrieve a list of claims from a queue. Claims are sorted by last modified date in descending order.   Note: The maximum amount of claims returned by the Retrieve Claims from Queue endpoint varies by payload size and request time. Issuers and acquirers should use the Retrieve Claims from Queue With Date Interval endpoint if they expect more than 10,000 claims.
     * @param {String} queueName The queue to be queried for a list of claims.   Length: 1-30   Valid Values/Format: Alpha
     * @param {module:api/QueuesApi~getQueueSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ClaimSummary>}
     */
    getQueueSummary(queueName, callback) {
      let postBody = null;
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling getQueueSummary");
      }

      let pathParams = {
      };
      let queryParams = {
        'queue-name': queueName
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ClaimSummary];
      return this.apiClient.callApi(
        '/v6/queues', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getQueueSummaryPost operation.
     * @callback module:api/QueuesApi~getQueueSummaryPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QueueContentSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * An issuer or acquirer uses this endpoint to retrieve a list of claims from a queue within a date interval. Claims are sorted by last modified date in descending order.  Note: The response is paginated with up to 2,000 claims per page. The total number of pages is included in the response.  Note: To get exact pageCount the lastModifiedDateFrom and lastModifiedDateTo are required and the date range should be less than or equal to 5 days in the request.
     * @param {module:model/GetQueueContentRequest} body Get queue content request
     * @param {module:api/QueuesApi~getQueueSummaryPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QueueContentSummary}
     */
    getQueueSummaryPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getQueueSummaryPost");
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
      let returnType = QueueContentSummary;
      return this.apiClient.callApi(
        '/v6/queues', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getQueues operation.
     * @callback module:api/QueuesApi~getQueuesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Queue>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * An issuer or acquirer uses this endpoint to retrieve a list of queues.
     * @param {module:api/QueuesApi~getQueuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Queue>}
     */
    getQueues(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Queue];
      return this.apiClient.callApi(
        '/v6/queues/names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}