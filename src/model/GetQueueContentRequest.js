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

/**
 * The GetQueueContentRequest model module.
 * @module model/GetQueueContentRequest
 * @version v6
 */
class GetQueueContentRequest {
    /**
     * Constructs a new <code>GetQueueContentRequest</code>.
     * @alias module:model/GetQueueContentRequest
     * @param queueName {String} The queue to be queried for a list of claims.   Length: 1-30   Valid Values/Format: Alpha
     */
    constructor(queueName) { 
        
        GetQueueContentRequest.initialize(this, queueName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, queueName) { 
        obj['queueName'] = queueName;
    }

    /**
     * Constructs a <code>GetQueueContentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetQueueContentRequest} obj Optional instance to populate.
     * @return {module:model/GetQueueContentRequest} The populated <code>GetQueueContentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetQueueContentRequest();

            if (data.hasOwnProperty('queueName')) {
                obj['queueName'] = ApiClient.convertToType(data['queueName'], 'String');
            }
            if (data.hasOwnProperty('lastModifiedDateFrom')) {
                obj['lastModifiedDateFrom'] = ApiClient.convertToType(data['lastModifiedDateFrom'], 'String');
            }
            if (data.hasOwnProperty('lastModifiedDateTo')) {
                obj['lastModifiedDateTo'] = ApiClient.convertToType(data['lastModifiedDateTo'], 'String');
            }
            if (data.hasOwnProperty('pageNb')) {
                obj['pageNb'] = ApiClient.convertToType(data['pageNb'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetQueueContentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetQueueContentRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetQueueContentRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['queueName'] && !(typeof data['queueName'] === 'string' || data['queueName'] instanceof String)) {
            throw new Error("Expected the field `queueName` to be a primitive type in the JSON string but got " + data['queueName']);
        }
        // ensure the json data is a string
        if (data['lastModifiedDateFrom'] && !(typeof data['lastModifiedDateFrom'] === 'string' || data['lastModifiedDateFrom'] instanceof String)) {
            throw new Error("Expected the field `lastModifiedDateFrom` to be a primitive type in the JSON string but got " + data['lastModifiedDateFrom']);
        }
        // ensure the json data is a string
        if (data['lastModifiedDateTo'] && !(typeof data['lastModifiedDateTo'] === 'string' || data['lastModifiedDateTo'] instanceof String)) {
            throw new Error("Expected the field `lastModifiedDateTo` to be a primitive type in the JSON string but got " + data['lastModifiedDateTo']);
        }
        // ensure the json data is a string
        if (data['pageNb'] && !(typeof data['pageNb'] === 'string' || data['pageNb'] instanceof String)) {
            throw new Error("Expected the field `pageNb` to be a primitive type in the JSON string but got " + data['pageNb']);
        }

        return true;
    }


}

GetQueueContentRequest.RequiredProperties = ["queueName"];

/**
 * The queue to be queried for a list of claims.   Length: 1-30   Valid Values/Format: Alpha
 * @member {String} queueName
 */
GetQueueContentRequest.prototype['queueName'] = undefined;

/**
 * Start of claimâ€™s last modified date range.   CONDITIONAL: If lastModifiedDateFrom is provided then lastModifiedDateTo is required.   Length: 16   Valid Values/Format: Date (yyyy-MM-ddTHH:mm)
 * @member {String} lastModifiedDateFrom
 */
GetQueueContentRequest.prototype['lastModifiedDateFrom'] = undefined;

/**
 * End of claimâ€™s last modified date range.   CONDITIONAL: If lastModifiedDateTo is provided then lastModifiedDateFrom is required.   Length: 16   Valid Values/Format: Date (yyyy-MM-ddTHH:mm)
 * @member {String} lastModifiedDateTo
 */
GetQueueContentRequest.prototype['lastModifiedDateTo'] = undefined;

/**
 * The queue data will be retrieved in separate sets.  The pageNb field indicates which page should be returned.  The total page counts available in a date range will be returned in the pageCount field. Possible values are 1,2,3 etc. If page number is not provided, value will default to 1.   Length: 1-3   Valid Values/Format: Numeric
 * @member {String} pageNb
 */
GetQueueContentRequest.prototype['pageNb'] = undefined;






export default GetQueueContentRequest;

