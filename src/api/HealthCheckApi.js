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
import Errors from '../model/Errors';
import HealthCheckResponse from '../model/HealthCheckResponse';

/**
* HealthCheck service.
* @module api/HealthCheckApi
* @version v6
*/
export default class HealthCheckApi {

    /**
    * Constructs a new HealthCheckApi. 
    * @alias module:api/HealthCheckApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the healthcheck operation.
     * @callback module:api/HealthCheckApi~healthcheckCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HealthCheckResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This resource retrieves the status of the Mastercom API suite.
     * @param {module:api/HealthCheckApi~healthcheckCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HealthCheckResponse}
     */
    healthcheck(callback) {
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
      let returnType = HealthCheckResponse;
      return this.apiClient.callApi(
        '/v6/healthcheck', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
