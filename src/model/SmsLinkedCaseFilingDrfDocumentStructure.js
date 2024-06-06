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
 * The SmsLinkedCaseFilingDrfDocumentStructure model module.
 * @module model/SmsLinkedCaseFilingDrfDocumentStructure
 * @version v6
 */
class SmsLinkedCaseFilingDrfDocumentStructure {
    /**
     * Constructs a new <code>SmsLinkedCaseFilingDrfDocumentStructure</code>.
     * @alias module:model/SmsLinkedCaseFilingDrfDocumentStructure
     */
    constructor() { 
        
        SmsLinkedCaseFilingDrfDocumentStructure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SmsLinkedCaseFilingDrfDocumentStructure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SmsLinkedCaseFilingDrfDocumentStructure} obj Optional instance to populate.
     * @return {module:model/SmsLinkedCaseFilingDrfDocumentStructure} The populated <code>SmsLinkedCaseFilingDrfDocumentStructure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmsLinkedCaseFilingDrfDocumentStructure();

            if (data.hasOwnProperty('contactName')) {
                obj['contactName'] = ApiClient.convertToType(data['contactName'], 'String');
            }
            if (data.hasOwnProperty('companyOrInstitution')) {
                obj['companyOrInstitution'] = ApiClient.convertToType(data['companyOrInstitution'], 'String');
            }
            if (data.hasOwnProperty('contactEmail')) {
                obj['contactEmail'] = ApiClient.convertToType(data['contactEmail'], 'String');
            }
            if (data.hasOwnProperty('reasonForFilingCase')) {
                obj['reasonForFilingCase'] = ApiClient.convertToType(data['reasonForFilingCase'], 'String');
            }
            if (data.hasOwnProperty('processorId')) {
                obj['processorId'] = ApiClient.convertToType(data['processorId'], 'String');
            }
            if (data.hasOwnProperty('acquirerSwitchSerialNum')) {
                obj['acquirerSwitchSerialNum'] = ApiClient.convertToType(data['acquirerSwitchSerialNum'], 'String');
            }
            if (data.hasOwnProperty('transactionOrSettlementDate')) {
                obj['transactionOrSettlementDate'] = ApiClient.convertToType(data['transactionOrSettlementDate'], 'String');
            }
            if (data.hasOwnProperty('numberOfTransactions')) {
                obj['numberOfTransactions'] = ApiClient.convertToType(data['numberOfTransactions'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SmsLinkedCaseFilingDrfDocumentStructure</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SmsLinkedCaseFilingDrfDocumentStructure</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['contactName'] && !(typeof data['contactName'] === 'string' || data['contactName'] instanceof String)) {
            throw new Error("Expected the field `contactName` to be a primitive type in the JSON string but got " + data['contactName']);
        }
        // ensure the json data is a string
        if (data['companyOrInstitution'] && !(typeof data['companyOrInstitution'] === 'string' || data['companyOrInstitution'] instanceof String)) {
            throw new Error("Expected the field `companyOrInstitution` to be a primitive type in the JSON string but got " + data['companyOrInstitution']);
        }
        // ensure the json data is a string
        if (data['contactEmail'] && !(typeof data['contactEmail'] === 'string' || data['contactEmail'] instanceof String)) {
            throw new Error("Expected the field `contactEmail` to be a primitive type in the JSON string but got " + data['contactEmail']);
        }
        // ensure the json data is a string
        if (data['reasonForFilingCase'] && !(typeof data['reasonForFilingCase'] === 'string' || data['reasonForFilingCase'] instanceof String)) {
            throw new Error("Expected the field `reasonForFilingCase` to be a primitive type in the JSON string but got " + data['reasonForFilingCase']);
        }
        // ensure the json data is a string
        if (data['processorId'] && !(typeof data['processorId'] === 'string' || data['processorId'] instanceof String)) {
            throw new Error("Expected the field `processorId` to be a primitive type in the JSON string but got " + data['processorId']);
        }
        // ensure the json data is a string
        if (data['acquirerSwitchSerialNum'] && !(typeof data['acquirerSwitchSerialNum'] === 'string' || data['acquirerSwitchSerialNum'] instanceof String)) {
            throw new Error("Expected the field `acquirerSwitchSerialNum` to be a primitive type in the JSON string but got " + data['acquirerSwitchSerialNum']);
        }
        // ensure the json data is a string
        if (data['transactionOrSettlementDate'] && !(typeof data['transactionOrSettlementDate'] === 'string' || data['transactionOrSettlementDate'] instanceof String)) {
            throw new Error("Expected the field `transactionOrSettlementDate` to be a primitive type in the JSON string but got " + data['transactionOrSettlementDate']);
        }
        // ensure the json data is a string
        if (data['numberOfTransactions'] && !(typeof data['numberOfTransactions'] === 'string' || data['numberOfTransactions'] instanceof String)) {
            throw new Error("Expected the field `numberOfTransactions` to be a primitive type in the JSON string but got " + data['numberOfTransactions']);
        }

        return true;
    }


}



/**
 * The contact name.   Length: 1-30   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
 * @member {String} contactName
 */
SmsLinkedCaseFilingDrfDocumentStructure.prototype['contactName'] = undefined;

/**
 * The company or institution name.   Length: 1-70   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
 * @member {String} companyOrInstitution
 */
SmsLinkedCaseFilingDrfDocumentStructure.prototype['companyOrInstitution'] = undefined;

/**
 * The contact email.   Length: 1-70   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
 * @member {String} contactEmail
 */
SmsLinkedCaseFilingDrfDocumentStructure.prototype['contactEmail'] = undefined;

/**
 * The reason for filing case.   Length: 1-490   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
 * @member {String} reasonForFilingCase
 */
SmsLinkedCaseFilingDrfDocumentStructure.prototype['reasonForFilingCase'] = undefined;

/**
 * The processor Id.   Length: 1-11   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
 * @member {String} processorId
 */
SmsLinkedCaseFilingDrfDocumentStructure.prototype['processorId'] = undefined;

/**
 * The Acquirer Reference Data or Switch Serial Number.   Length: 1-23   Valid Values/Format: Numeric
 * @member {String} acquirerSwitchSerialNum
 */
SmsLinkedCaseFilingDrfDocumentStructure.prototype['acquirerSwitchSerialNum'] = undefined;

/**
 * The Transaction or Settlement Date.   Length: 11   Valid Values/Format: Date (dd-MMM-yyyy)
 * @member {String} transactionOrSettlementDate
 */
SmsLinkedCaseFilingDrfDocumentStructure.prototype['transactionOrSettlementDate'] = undefined;

/**
 * A numeric count of number of transactions being disputed.   Length: 1-20   Valid Values/Format: (VALUES)/ (Numeric, Alphanumeric, Special Char)
 * @member {String} numberOfTransactions
 */
SmsLinkedCaseFilingDrfDocumentStructure.prototype['numberOfTransactions'] = undefined;






export default SmsLinkedCaseFilingDrfDocumentStructure;

