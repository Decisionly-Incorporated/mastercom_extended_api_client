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
 * The PointOfInteractionErrorsDrfDocumentStructure model module.
 * @module model/PointOfInteractionErrorsDrfDocumentStructure
 * @version v6
 */
class PointOfInteractionErrorsDrfDocumentStructure {
    /**
     * Constructs a new <code>PointOfInteractionErrorsDrfDocumentStructure</code>.
     * @alias module:model/PointOfInteractionErrorsDrfDocumentStructure
     */
    constructor() { 
        
        PointOfInteractionErrorsDrfDocumentStructure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PointOfInteractionErrorsDrfDocumentStructure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PointOfInteractionErrorsDrfDocumentStructure} obj Optional instance to populate.
     * @return {module:model/PointOfInteractionErrorsDrfDocumentStructure} The populated <code>PointOfInteractionErrorsDrfDocumentStructure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PointOfInteractionErrorsDrfDocumentStructure();

            if (data.hasOwnProperty('transactionAmount')) {
                obj['transactionAmount'] = ApiClient.convertToType(data['transactionAmount'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('alternateMeansOfPaymentDetails')) {
                obj['alternateMeansOfPaymentDetails'] = ApiClient.convertToType(data['alternateMeansOfPaymentDetails'], 'String');
            }
            if (data.hasOwnProperty('disputeDetails')) {
                obj['disputeDetails'] = ApiClient.convertToType(data['disputeDetails'], 'String');
            }
            if (data.hasOwnProperty('chargebackRepresentative')) {
                obj['chargebackRepresentative'] = ApiClient.convertToType(data['chargebackRepresentative'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PointOfInteractionErrorsDrfDocumentStructure</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PointOfInteractionErrorsDrfDocumentStructure</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['transactionAmount'] && !(typeof data['transactionAmount'] === 'string' || data['transactionAmount'] instanceof String)) {
            throw new Error("Expected the field `transactionAmount` to be a primitive type in the JSON string but got " + data['transactionAmount']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['alternateMeansOfPaymentDetails'] && !(typeof data['alternateMeansOfPaymentDetails'] === 'string' || data['alternateMeansOfPaymentDetails'] instanceof String)) {
            throw new Error("Expected the field `alternateMeansOfPaymentDetails` to be a primitive type in the JSON string but got " + data['alternateMeansOfPaymentDetails']);
        }
        // ensure the json data is a string
        if (data['disputeDetails'] && !(typeof data['disputeDetails'] === 'string' || data['disputeDetails'] instanceof String)) {
            throw new Error("Expected the field `disputeDetails` to be a primitive type in the JSON string but got " + data['disputeDetails']);
        }
        // ensure the json data is a string
        if (data['chargebackRepresentative'] && !(typeof data['chargebackRepresentative'] === 'string' || data['chargebackRepresentative'] instanceof String)) {
            throw new Error("Expected the field `chargebackRepresentative` to be a primitive type in the JSON string but got " + data['chargebackRepresentative']);
        }

        return true;
    }


}



/**
 * The transaction amount.   Length: 0-12   Valid Values/Format: Numeric
 * @member {String} transactionAmount
 */
PointOfInteractionErrorsDrfDocumentStructure.prototype['transactionAmount'] = undefined;

/**
 * The type of the error.   Length: 15-27   Valid Values/Format: DUPLICATE_DEBIT, INCORRECT_AMOUNT, LTD_TRANSACTION, CURRENCY_DISPUTE, UNREASONABLE_AMOUNT, DUPLICATE_TRANSACTION, MERCHANT_CREDIT, IMPROPER_MERCHANT_SURCHARGE
 * @member {module:model/PointOfInteractionErrorsDrfDocumentStructure.TypeEnum} type
 */
PointOfInteractionErrorsDrfDocumentStructure.prototype['type'] = undefined;

/**
 * CONDITIONAL: in case of DUPLICATE_DEBIT, Alternate means of payment details.   Length: 0-55   Valid Values/Format: Alphanumeric / Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
 * @member {String} alternateMeansOfPaymentDetails
 */
PointOfInteractionErrorsDrfDocumentStructure.prototype['alternateMeansOfPaymentDetails'] = undefined;

/**
 * Describe the cardholderâ€™s compliant in sufficient detail to meet the requirements for the chargeback as described in the Chargeback Guide and to enable all parties to understand the dispute.   Length: 0-4800   Valid Values/Format: Alphanumeric / Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
 * @member {String} disputeDetails
 */
PointOfInteractionErrorsDrfDocumentStructure.prototype['disputeDetails'] = undefined;

/**
 * Customer Service/Chargeback Representative.   Length: 0-25   Valid Values/Format: Alphanumeric / Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
 * @member {String} chargebackRepresentative
 */
PointOfInteractionErrorsDrfDocumentStructure.prototype['chargebackRepresentative'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
PointOfInteractionErrorsDrfDocumentStructure['TypeEnum'] = {

    /**
     * value: "DUPLICATE_DEBIT"
     * @const
     */
    "DUPLICATE_DEBIT": "DUPLICATE_DEBIT",

    /**
     * value: "INCORRECT_AMOUNT"
     * @const
     */
    "INCORRECT_AMOUNT": "INCORRECT_AMOUNT",

    /**
     * value: "LTD_TRANSACTION"
     * @const
     */
    "LTD_TRANSACTION": "LTD_TRANSACTION",

    /**
     * value: "CURRENCY_DISPUTE"
     * @const
     */
    "CURRENCY_DISPUTE": "CURRENCY_DISPUTE",

    /**
     * value: "UNREASONABLE_AMOUNT"
     * @const
     */
    "UNREASONABLE_AMOUNT": "UNREASONABLE_AMOUNT",

    /**
     * value: "DUPLICATE_TRANSACTION"
     * @const
     */
    "DUPLICATE_TRANSACTION": "DUPLICATE_TRANSACTION",

    /**
     * value: "MERCHANT_CREDIT"
     * @const
     */
    "MERCHANT_CREDIT": "MERCHANT_CREDIT",

    /**
     * value: "IMPROPER_MERCHANT_SURCHARGE"
     * @const
     */
    "IMPROPER_MERCHANT_SURCHARGE": "IMPROPER_MERCHANT_SURCHARGE"
};



export default PointOfInteractionErrorsDrfDocumentStructure;
