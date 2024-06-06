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
 * The OriginalInformationInstallments model module.
 * @module model/OriginalInformationInstallments
 * @version v6
 */
class OriginalInformationInstallments {
    /**
     * Constructs a new <code>OriginalInformationInstallments</code>.
     * @alias module:model/OriginalInformationInstallments
     */
    constructor() { 
        
        OriginalInformationInstallments.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OriginalInformationInstallments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OriginalInformationInstallments} obj Optional instance to populate.
     * @return {module:model/OriginalInformationInstallments} The populated <code>OriginalInformationInstallments</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OriginalInformationInstallments();

            if (data.hasOwnProperty('amountOfPurchase')) {
                obj['amountOfPurchase'] = ApiClient.convertToType(data['amountOfPurchase'], 'String');
            }
            if (data.hasOwnProperty('transactionInterestRate')) {
                obj['transactionInterestRate'] = ApiClient.convertToType(data['transactionInterestRate'], 'String');
            }
            if (data.hasOwnProperty('installmentAmount')) {
                obj['installmentAmount'] = ApiClient.convertToType(data['installmentAmount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OriginalInformationInstallments</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OriginalInformationInstallments</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['amountOfPurchase'] && !(typeof data['amountOfPurchase'] === 'string' || data['amountOfPurchase'] instanceof String)) {
            throw new Error("Expected the field `amountOfPurchase` to be a primitive type in the JSON string but got " + data['amountOfPurchase']);
        }
        // ensure the json data is a string
        if (data['transactionInterestRate'] && !(typeof data['transactionInterestRate'] === 'string' || data['transactionInterestRate'] instanceof String)) {
            throw new Error("Expected the field `transactionInterestRate` to be a primitive type in the JSON string but got " + data['transactionInterestRate']);
        }
        // ensure the json data is a string
        if (data['installmentAmount'] && !(typeof data['installmentAmount'] === 'string' || data['installmentAmount'] instanceof String)) {
            throw new Error("Expected the field `installmentAmount` to be a primitive type in the JSON string but got " + data['installmentAmount']);
        }

        return true;
    }


}



/**
 * Amount of original purchase
 * @member {String} amountOfPurchase
 */
OriginalInformationInstallments.prototype['amountOfPurchase'] = undefined;

/**
 * Percent rate for transaction
 * @member {String} transactionInterestRate
 */
OriginalInformationInstallments.prototype['transactionInterestRate'] = undefined;

/**
 * Monthly amount for transaction
 * @member {String} installmentAmount
 */
OriginalInformationInstallments.prototype['installmentAmount'] = undefined;






export default OriginalInformationInstallments;

