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
import AuthorizationSummary from './AuthorizationSummary';

/**
 * The TransactionSummary model module.
 * @module model/TransactionSummary
 * @version v6
 */
class TransactionSummary {
    /**
     * Constructs a new <code>TransactionSummary</code>.
     * @alias module:model/TransactionSummary
     */
    constructor() { 
        
        TransactionSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionSummary} obj Optional instance to populate.
     * @return {module:model/TransactionSummary} The populated <code>TransactionSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionSummary();

            if (data.hasOwnProperty('authorizationSummaryCount')) {
                obj['authorizationSummaryCount'] = ApiClient.convertToType(data['authorizationSummaryCount'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('authorizationSummary')) {
                obj['authorizationSummary'] = ApiClient.convertToType(data['authorizationSummary'], [AuthorizationSummary]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionSummary</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionSummary</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['authorizationSummaryCount'] && !(typeof data['authorizationSummaryCount'] === 'string' || data['authorizationSummaryCount'] instanceof String)) {
            throw new Error("Expected the field `authorizationSummaryCount` to be a primitive type in the JSON string but got " + data['authorizationSummaryCount']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        if (data['authorizationSummary']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['authorizationSummary'])) {
                throw new Error("Expected the field `authorizationSummary` to be an array in the JSON data but got " + data['authorizationSummary']);
            }
            // validate the optional field `authorizationSummary` (array)
            for (const item of data['authorizationSummary']) {
                AuthorizationSummary.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The number of records returned in the response
 * @member {String} authorizationSummaryCount
 */
TransactionSummary.prototype['authorizationSummaryCount'] = undefined;

/**
 * Provides the message receiver with the reason for sending the message
 * @member {String} message
 */
TransactionSummary.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/AuthorizationSummary>} authorizationSummary
 */
TransactionSummary.prototype['authorizationSummary'] = undefined;






export default TransactionSummary;

