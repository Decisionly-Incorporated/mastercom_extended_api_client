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
import TransactionSingleMessageSummary from './TransactionSingleMessageSummary';

/**
 * The TransactionSingleMessageSummaryList model module.
 * @module model/TransactionSingleMessageSummaryList
 * @version v6
 */
class TransactionSingleMessageSummaryList {
    /**
     * Constructs a new <code>TransactionSingleMessageSummaryList</code>.
     * @alias module:model/TransactionSingleMessageSummaryList
     */
    constructor() { 
        
        TransactionSingleMessageSummaryList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionSingleMessageSummaryList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionSingleMessageSummaryList} obj Optional instance to populate.
     * @return {module:model/TransactionSingleMessageSummaryList} The populated <code>TransactionSingleMessageSummaryList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionSingleMessageSummaryList();

            if (data.hasOwnProperty('transactionSummaryList')) {
                obj['transactionSummaryList'] = ApiClient.convertToType(data['transactionSummaryList'], [TransactionSingleMessageSummary]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionSingleMessageSummaryList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionSingleMessageSummaryList</code>.
     */
    static validateJSON(data) {
        if (data['transactionSummaryList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['transactionSummaryList'])) {
                throw new Error("Expected the field `transactionSummaryList` to be an array in the JSON data but got " + data['transactionSummaryList']);
            }
            // validate the optional field `transactionSummaryList` (array)
            for (const item of data['transactionSummaryList']) {
                TransactionSingleMessageSummary.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/TransactionSingleMessageSummary>} transactionSummaryList
 */
TransactionSingleMessageSummaryList.prototype['transactionSummaryList'] = undefined;






export default TransactionSingleMessageSummaryList;
