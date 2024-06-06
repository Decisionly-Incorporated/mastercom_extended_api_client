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
 * The ExpeditedBillingDrfDocumentStructure model module.
 * @module model/ExpeditedBillingDrfDocumentStructure
 * @version v6
 */
class ExpeditedBillingDrfDocumentStructure {
    /**
     * Constructs a new <code>ExpeditedBillingDrfDocumentStructure</code>.
     * @alias module:model/ExpeditedBillingDrfDocumentStructure
     */
    constructor() { 
        
        ExpeditedBillingDrfDocumentStructure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExpeditedBillingDrfDocumentStructure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExpeditedBillingDrfDocumentStructure} obj Optional instance to populate.
     * @return {module:model/ExpeditedBillingDrfDocumentStructure} The populated <code>ExpeditedBillingDrfDocumentStructure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExpeditedBillingDrfDocumentStructure();

            if (data.hasOwnProperty('cardholderName')) {
                obj['cardholderName'] = ApiClient.convertToType(data['cardholderName'], 'String');
            }
            if (data.hasOwnProperty('acquirerRefData')) {
                obj['acquirerRefData'] = ApiClient.convertToType(data['acquirerRefData'], 'String');
            }
            if (data.hasOwnProperty('transactionDate')) {
                obj['transactionDate'] = ApiClient.convertToType(data['transactionDate'], 'String');
            }
            if (data.hasOwnProperty('transactionAmount')) {
                obj['transactionAmount'] = ApiClient.convertToType(data['transactionAmount'], 'String');
            }
            if (data.hasOwnProperty('disputeDescription')) {
                obj['disputeDescription'] = ApiClient.convertToType(data['disputeDescription'], 'String');
            }
            if (data.hasOwnProperty('certification')) {
                obj['certification'] = ApiClient.convertToType(data['certification'], 'String');
            }
            if (data.hasOwnProperty('chargebackRepresentative')) {
                obj['chargebackRepresentative'] = ApiClient.convertToType(data['chargebackRepresentative'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExpeditedBillingDrfDocumentStructure</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExpeditedBillingDrfDocumentStructure</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cardholderName'] && !(typeof data['cardholderName'] === 'string' || data['cardholderName'] instanceof String)) {
            throw new Error("Expected the field `cardholderName` to be a primitive type in the JSON string but got " + data['cardholderName']);
        }
        // ensure the json data is a string
        if (data['acquirerRefData'] && !(typeof data['acquirerRefData'] === 'string' || data['acquirerRefData'] instanceof String)) {
            throw new Error("Expected the field `acquirerRefData` to be a primitive type in the JSON string but got " + data['acquirerRefData']);
        }
        // ensure the json data is a string
        if (data['transactionDate'] && !(typeof data['transactionDate'] === 'string' || data['transactionDate'] instanceof String)) {
            throw new Error("Expected the field `transactionDate` to be a primitive type in the JSON string but got " + data['transactionDate']);
        }
        // ensure the json data is a string
        if (data['transactionAmount'] && !(typeof data['transactionAmount'] === 'string' || data['transactionAmount'] instanceof String)) {
            throw new Error("Expected the field `transactionAmount` to be a primitive type in the JSON string but got " + data['transactionAmount']);
        }
        // ensure the json data is a string
        if (data['disputeDescription'] && !(typeof data['disputeDescription'] === 'string' || data['disputeDescription'] instanceof String)) {
            throw new Error("Expected the field `disputeDescription` to be a primitive type in the JSON string but got " + data['disputeDescription']);
        }
        // ensure the json data is a string
        if (data['certification'] && !(typeof data['certification'] === 'string' || data['certification'] instanceof String)) {
            throw new Error("Expected the field `certification` to be a primitive type in the JSON string but got " + data['certification']);
        }
        // ensure the json data is a string
        if (data['chargebackRepresentative'] && !(typeof data['chargebackRepresentative'] === 'string' || data['chargebackRepresentative'] instanceof String)) {
            throw new Error("Expected the field `chargebackRepresentative` to be a primitive type in the JSON string but got " + data['chargebackRepresentative']);
        }

        return true;
    }


}



/**
 * CONDITIONAL: The cardholder's name is optional on Dispute Resolution Form - Pre-Compliance/Compliance form.   Length: 1-30   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
 * @member {String} cardholderName
 */
ExpeditedBillingDrfDocumentStructure.prototype['cardholderName'] = undefined;

/**
 * The Acquirerâ€™s Reference Data.   Length: 1-23   Valid Values/Format: Numeric
 * @member {String} acquirerRefData
 */
ExpeditedBillingDrfDocumentStructure.prototype['acquirerRefData'] = undefined;

/**
 * The transaction date.   Length: 11   Valid Values/Format: Date (dd-MMM-yyyy)
 * @member {String} transactionDate
 */
ExpeditedBillingDrfDocumentStructure.prototype['transactionDate'] = undefined;

/**
 * The total transaction amount.   Length: 4-12   Valid Values/Format: Numeric
 * @member {String} transactionAmount
 */
ExpeditedBillingDrfDocumentStructure.prototype['transactionAmount'] = undefined;

/**
 * Give a reasonably specific description of the dispute.   Length: 1-1500   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
 * @member {String} disputeDescription
 */
ExpeditedBillingDrfDocumentStructure.prototype['disputeDescription'] = undefined;

/**
 * Who is the company representative or government agency representative on behalf of the corporate card.   Length: 1-24   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
 * @member {String} certification
 */
ExpeditedBillingDrfDocumentStructure.prototype['certification'] = undefined;

/**
 * Customer Service/Chargeback Representative.   Length: 1-25   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
 * @member {String} chargebackRepresentative
 */
ExpeditedBillingDrfDocumentStructure.prototype['chargebackRepresentative'] = undefined;






export default ExpeditedBillingDrfDocumentStructure;

