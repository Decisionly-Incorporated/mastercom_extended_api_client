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
import RetrievalDocNeededNameValueDetail from './RetrievalDocNeededNameValueDetail';
import RetrievalReasonCodesNameValueDetail from './RetrievalReasonCodesNameValueDetail';

/**
 * The LoadDataForRetrievalResponse model module.
 * @module model/LoadDataForRetrievalResponse
 * @version v6
 */
class LoadDataForRetrievalResponse {
    /**
     * Constructs a new <code>LoadDataForRetrievalResponse</code>.
     * @alias module:model/LoadDataForRetrievalResponse
     */
    constructor() { 
        
        LoadDataForRetrievalResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoadDataForRetrievalResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoadDataForRetrievalResponse} obj Optional instance to populate.
     * @return {module:model/LoadDataForRetrievalResponse} The populated <code>LoadDataForRetrievalResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoadDataForRetrievalResponse();

            if (data.hasOwnProperty('docNeeded')) {
                obj['docNeeded'] = ApiClient.convertToType(data['docNeeded'], [RetrievalDocNeededNameValueDetail]);
            }
            if (data.hasOwnProperty('reasonCodes')) {
                obj['reasonCodes'] = ApiClient.convertToType(data['reasonCodes'], [RetrievalReasonCodesNameValueDetail]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LoadDataForRetrievalResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LoadDataForRetrievalResponse</code>.
     */
    static validateJSON(data) {
        if (data['docNeeded']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['docNeeded'])) {
                throw new Error("Expected the field `docNeeded` to be an array in the JSON data but got " + data['docNeeded']);
            }
            // validate the optional field `docNeeded` (array)
            for (const item of data['docNeeded']) {
                RetrievalDocNeededNameValueDetail.validateJSON(item);
            };
        }
        if (data['reasonCodes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['reasonCodes'])) {
                throw new Error("Expected the field `reasonCodes` to be an array in the JSON data but got " + data['reasonCodes']);
            }
            // validate the optional field `reasonCodes` (array)
            for (const item of data['reasonCodes']) {
                RetrievalReasonCodesNameValueDetail.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * List of valid docNeeded fields
 * @member {Array.<module:model/RetrievalDocNeededNameValueDetail>} docNeeded
 */
LoadDataForRetrievalResponse.prototype['docNeeded'] = undefined;

/**
 * List of valid reason codes
 * @member {Array.<module:model/RetrievalReasonCodesNameValueDetail>} reasonCodes
 */
LoadDataForRetrievalResponse.prototype['reasonCodes'] = undefined;






export default LoadDataForRetrievalResponse;

