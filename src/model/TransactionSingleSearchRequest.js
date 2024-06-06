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
 * The TransactionSingleSearchRequest model module.
 * @module model/TransactionSingleSearchRequest
 * @version v6
 */
class TransactionSingleSearchRequest {
    /**
     * Constructs a new <code>TransactionSingleSearchRequest</code>.
     * @alias module:model/TransactionSingleSearchRequest
     * @param primaryAccountNumber {String} Primary Account Number [PAN] is a series of digits used to identify a customer account or relationship.   Length: 12-19   Valid Values/Format: Numeric
     * @param settlementFromDate {String} From date of Settlement date range to search for a transaction. Mastercard uses Settlement Date to group the transactions for reporting and for subsequent settlement. The search range is a maximum of 30 days, and searches can be completed for up to 180 days of history.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
     * @param settlementToDate {String} To date of Settlement date range to search for a transaction. Mastercard uses Settlement Date to group the transactions for reporting and for subsequent settlement. The search range is a maximum of 30 days, and searches can be completed for up to 180 days of history.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
     */
    constructor(primaryAccountNumber, settlementFromDate, settlementToDate) { 
        
        TransactionSingleSearchRequest.initialize(this, primaryAccountNumber, settlementFromDate, settlementToDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, primaryAccountNumber, settlementFromDate, settlementToDate) { 
        obj['primaryAccountNumber'] = primaryAccountNumber;
        obj['settlementFromDate'] = settlementFromDate;
        obj['settlementToDate'] = settlementToDate;
    }

    /**
     * Constructs a <code>TransactionSingleSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionSingleSearchRequest} obj Optional instance to populate.
     * @return {module:model/TransactionSingleSearchRequest} The populated <code>TransactionSingleSearchRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionSingleSearchRequest();

            if (data.hasOwnProperty('primaryAccountNumber')) {
                obj['primaryAccountNumber'] = ApiClient.convertToType(data['primaryAccountNumber'], 'String');
            }
            if (data.hasOwnProperty('settlementFromDate')) {
                obj['settlementFromDate'] = ApiClient.convertToType(data['settlementFromDate'], 'String');
            }
            if (data.hasOwnProperty('settlementToDate')) {
                obj['settlementToDate'] = ApiClient.convertToType(data['settlementToDate'], 'String');
            }
            if (data.hasOwnProperty('acquirerRefNumber')) {
                obj['acquirerRefNumber'] = ApiClient.convertToType(data['acquirerRefNumber'], 'String');
            }
            if (data.hasOwnProperty('switchSerialNumber')) {
                obj['switchSerialNumber'] = ApiClient.convertToType(data['switchSerialNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionSingleSearchRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionSingleSearchRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionSingleSearchRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['primaryAccountNumber'] && !(typeof data['primaryAccountNumber'] === 'string' || data['primaryAccountNumber'] instanceof String)) {
            throw new Error("Expected the field `primaryAccountNumber` to be a primitive type in the JSON string but got " + data['primaryAccountNumber']);
        }
        // ensure the json data is a string
        if (data['settlementFromDate'] && !(typeof data['settlementFromDate'] === 'string' || data['settlementFromDate'] instanceof String)) {
            throw new Error("Expected the field `settlementFromDate` to be a primitive type in the JSON string but got " + data['settlementFromDate']);
        }
        // ensure the json data is a string
        if (data['settlementToDate'] && !(typeof data['settlementToDate'] === 'string' || data['settlementToDate'] instanceof String)) {
            throw new Error("Expected the field `settlementToDate` to be a primitive type in the JSON string but got " + data['settlementToDate']);
        }
        // ensure the json data is a string
        if (data['acquirerRefNumber'] && !(typeof data['acquirerRefNumber'] === 'string' || data['acquirerRefNumber'] instanceof String)) {
            throw new Error("Expected the field `acquirerRefNumber` to be a primitive type in the JSON string but got " + data['acquirerRefNumber']);
        }
        // ensure the json data is a string
        if (data['switchSerialNumber'] && !(typeof data['switchSerialNumber'] === 'string' || data['switchSerialNumber'] instanceof String)) {
            throw new Error("Expected the field `switchSerialNumber` to be a primitive type in the JSON string but got " + data['switchSerialNumber']);
        }

        return true;
    }


}

TransactionSingleSearchRequest.RequiredProperties = ["primaryAccountNumber", "settlementFromDate", "settlementToDate"];

/**
 * Primary Account Number [PAN] is a series of digits used to identify a customer account or relationship.   Length: 12-19   Valid Values/Format: Numeric
 * @member {String} primaryAccountNumber
 */
TransactionSingleSearchRequest.prototype['primaryAccountNumber'] = undefined;

/**
 * From date of Settlement date range to search for a transaction. Mastercard uses Settlement Date to group the transactions for reporting and for subsequent settlement. The search range is a maximum of 30 days, and searches can be completed for up to 180 days of history.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
 * @member {String} settlementFromDate
 */
TransactionSingleSearchRequest.prototype['settlementFromDate'] = undefined;

/**
 * To date of Settlement date range to search for a transaction. Mastercard uses Settlement Date to group the transactions for reporting and for subsequent settlement. The search range is a maximum of 30 days, and searches can be completed for up to 180 days of history.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
 * @member {String} settlementToDate
 */
TransactionSingleSearchRequest.prototype['settlementToDate'] = undefined;

/**
 * Acquirer Reference Data is data an acquirer supplies in an acquirer-originated message that may be required for an issuer to return to the acquirer in a subsequent message
 * @member {String} acquirerRefNumber
 */
TransactionSingleSearchRequest.prototype['acquirerRefNumber'] = undefined;

/**
 * The Switch Serial Number is a unique transaction identification number generated (or assigned) by the Single Message.   Length: 9   Valid Values/Format: Numeric
 * @member {String} switchSerialNumber
 */
TransactionSingleSearchRequest.prototype['switchSerialNumber'] = undefined;






export default TransactionSingleSearchRequest;
