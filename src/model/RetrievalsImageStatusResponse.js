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

import ApiClient from '../ApiClient';
import RetrievalsImageStatusResponseStructure from './RetrievalsImageStatusResponseStructure';

/**
 * The RetrievalsImageStatusResponse model module.
 * @module model/RetrievalsImageStatusResponse
 * @version v6
 */
class RetrievalsImageStatusResponse {
    /**
     * Constructs a new <code>RetrievalsImageStatusResponse</code>.
     * @alias module:model/RetrievalsImageStatusResponse
     */
    constructor() { 
        
        RetrievalsImageStatusResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RetrievalsImageStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RetrievalsImageStatusResponse} obj Optional instance to populate.
     * @return {module:model/RetrievalsImageStatusResponse} The populated <code>RetrievalsImageStatusResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RetrievalsImageStatusResponse();

            if (data.hasOwnProperty('retrievalImageStatusList')) {
                obj['retrievalImageStatusList'] = ApiClient.convertToType(data['retrievalImageStatusList'], [RetrievalsImageStatusResponseStructure]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RetrievalsImageStatusResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RetrievalsImageStatusResponse</code>.
     */
    static validateJSON(data) {
        if (data['retrievalImageStatusList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['retrievalImageStatusList'])) {
                throw new Error("Expected the field `retrievalImageStatusList` to be an array in the JSON data but got " + data['retrievalImageStatusList']);
            }
            // validate the optional field `retrievalImageStatusList` (array)
            for (const item of data['retrievalImageStatusList']) {
                RetrievalsImageStatusResponseStructure.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Status of fulfillment images
 * @member {Array.<module:model/RetrievalsImageStatusResponseStructure>} retrievalImageStatusList
 */
RetrievalsImageStatusResponse.prototype['retrievalImageStatusList'] = undefined;






export default RetrievalsImageStatusResponse;

