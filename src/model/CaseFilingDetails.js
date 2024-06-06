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
 * The CaseFilingDetails model module.
 * @module model/CaseFilingDetails
 * @version v6
 */
class CaseFilingDetails {
    /**
     * Constructs a new <code>CaseFilingDetails</code>.
     * @alias module:model/CaseFilingDetails
     */
    constructor() { 
        
        CaseFilingDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CaseFilingDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CaseFilingDetails} obj Optional instance to populate.
     * @return {module:model/CaseFilingDetails} The populated <code>CaseFilingDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CaseFilingDetails();

            if (data.hasOwnProperty('claimId')) {
                obj['claimId'] = ApiClient.convertToType(data['claimId'], 'String');
            }
            if (data.hasOwnProperty('claimType')) {
                obj['claimType'] = ApiClient.convertToType(data['claimType'], 'String');
            }
            if (data.hasOwnProperty('caseId')) {
                obj['caseId'] = ApiClient.convertToType(data['caseId'], 'String');
            }
            if (data.hasOwnProperty('caseType')) {
                obj['caseType'] = ApiClient.convertToType(data['caseType'], 'String');
            }
            if (data.hasOwnProperty('chargebackRefNum')) {
                obj['chargebackRefNum'] = ApiClient.convertToType(data['chargebackRefNum'], ['String']);
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('customerFilingNumber')) {
                obj['customerFilingNumber'] = ApiClient.convertToType(data['customerFilingNumber'], 'String');
            }
            if (data.hasOwnProperty('creditDate')) {
                obj['creditDate'] = ApiClient.convertToType(data['creditDate'], 'String');
            }
            if (data.hasOwnProperty('chargebackDate')) {
                obj['chargebackDate'] = ApiClient.convertToType(data['chargebackDate'], 'String');
            }
            if (data.hasOwnProperty('reasonCode')) {
                obj['reasonCode'] = ApiClient.convertToType(data['reasonCode'], 'String');
            }
            if (data.hasOwnProperty('disputeAmount')) {
                obj['disputeAmount'] = ApiClient.convertToType(data['disputeAmount'], 'String');
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'String');
            }
            if (data.hasOwnProperty('filingAgaintstIca')) {
                obj['filingAgaintstIca'] = ApiClient.convertToType(data['filingAgaintstIca'], 'String');
            }
            if (data.hasOwnProperty('filingAs')) {
                obj['filingAs'] = ApiClient.convertToType(data['filingAs'], 'String');
            }
            if (data.hasOwnProperty('filingIca')) {
                obj['filingIca'] = ApiClient.convertToType(data['filingIca'], 'String');
            }
            if (data.hasOwnProperty('merchantName')) {
                obj['merchantName'] = ApiClient.convertToType(data['merchantName'], 'String');
            }
            if (data.hasOwnProperty('primaryAccountNum')) {
                obj['primaryAccountNum'] = ApiClient.convertToType(data['primaryAccountNum'], 'String');
            }
            if (data.hasOwnProperty('violationCode')) {
                obj['violationCode'] = ApiClient.convertToType(data['violationCode'], 'String');
            }
            if (data.hasOwnProperty('violationDate')) {
                obj['violationDate'] = ApiClient.convertToType(data['violationDate'], 'String');
            }
            if (data.hasOwnProperty('rulingDate')) {
                obj['rulingDate'] = ApiClient.convertToType(data['rulingDate'], 'String');
            }
            if (data.hasOwnProperty('rulingStatus')) {
                obj['rulingStatus'] = ApiClient.convertToType(data['rulingStatus'], 'String');
            }
            if (data.hasOwnProperty('virtualAccountNum')) {
                obj['virtualAccountNum'] = ApiClient.convertToType(data['virtualAccountNum'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CaseFilingDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CaseFilingDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['claimId'] && !(typeof data['claimId'] === 'string' || data['claimId'] instanceof String)) {
            throw new Error("Expected the field `claimId` to be a primitive type in the JSON string but got " + data['claimId']);
        }
        // ensure the json data is a string
        if (data['claimType'] && !(typeof data['claimType'] === 'string' || data['claimType'] instanceof String)) {
            throw new Error("Expected the field `claimType` to be a primitive type in the JSON string but got " + data['claimType']);
        }
        // ensure the json data is a string
        if (data['caseId'] && !(typeof data['caseId'] === 'string' || data['caseId'] instanceof String)) {
            throw new Error("Expected the field `caseId` to be a primitive type in the JSON string but got " + data['caseId']);
        }
        // ensure the json data is a string
        if (data['caseType'] && !(typeof data['caseType'] === 'string' || data['caseType'] instanceof String)) {
            throw new Error("Expected the field `caseType` to be a primitive type in the JSON string but got " + data['caseType']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['chargebackRefNum'])) {
            throw new Error("Expected the field `chargebackRefNum` to be an array in the JSON data but got " + data['chargebackRefNum']);
        }
        // ensure the json data is a string
        if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
            throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
        }
        // ensure the json data is a string
        if (data['customerFilingNumber'] && !(typeof data['customerFilingNumber'] === 'string' || data['customerFilingNumber'] instanceof String)) {
            throw new Error("Expected the field `customerFilingNumber` to be a primitive type in the JSON string but got " + data['customerFilingNumber']);
        }
        // ensure the json data is a string
        if (data['creditDate'] && !(typeof data['creditDate'] === 'string' || data['creditDate'] instanceof String)) {
            throw new Error("Expected the field `creditDate` to be a primitive type in the JSON string but got " + data['creditDate']);
        }
        // ensure the json data is a string
        if (data['chargebackDate'] && !(typeof data['chargebackDate'] === 'string' || data['chargebackDate'] instanceof String)) {
            throw new Error("Expected the field `chargebackDate` to be a primitive type in the JSON string but got " + data['chargebackDate']);
        }
        // ensure the json data is a string
        if (data['reasonCode'] && !(typeof data['reasonCode'] === 'string' || data['reasonCode'] instanceof String)) {
            throw new Error("Expected the field `reasonCode` to be a primitive type in the JSON string but got " + data['reasonCode']);
        }
        // ensure the json data is a string
        if (data['disputeAmount'] && !(typeof data['disputeAmount'] === 'string' || data['disputeAmount'] instanceof String)) {
            throw new Error("Expected the field `disputeAmount` to be a primitive type in the JSON string but got " + data['disputeAmount']);
        }
        // ensure the json data is a string
        if (data['dueDate'] && !(typeof data['dueDate'] === 'string' || data['dueDate'] instanceof String)) {
            throw new Error("Expected the field `dueDate` to be a primitive type in the JSON string but got " + data['dueDate']);
        }
        // ensure the json data is a string
        if (data['filingAgaintstIca'] && !(typeof data['filingAgaintstIca'] === 'string' || data['filingAgaintstIca'] instanceof String)) {
            throw new Error("Expected the field `filingAgaintstIca` to be a primitive type in the JSON string but got " + data['filingAgaintstIca']);
        }
        // ensure the json data is a string
        if (data['filingAs'] && !(typeof data['filingAs'] === 'string' || data['filingAs'] instanceof String)) {
            throw new Error("Expected the field `filingAs` to be a primitive type in the JSON string but got " + data['filingAs']);
        }
        // ensure the json data is a string
        if (data['filingIca'] && !(typeof data['filingIca'] === 'string' || data['filingIca'] instanceof String)) {
            throw new Error("Expected the field `filingIca` to be a primitive type in the JSON string but got " + data['filingIca']);
        }
        // ensure the json data is a string
        if (data['merchantName'] && !(typeof data['merchantName'] === 'string' || data['merchantName'] instanceof String)) {
            throw new Error("Expected the field `merchantName` to be a primitive type in the JSON string but got " + data['merchantName']);
        }
        // ensure the json data is a string
        if (data['primaryAccountNum'] && !(typeof data['primaryAccountNum'] === 'string' || data['primaryAccountNum'] instanceof String)) {
            throw new Error("Expected the field `primaryAccountNum` to be a primitive type in the JSON string but got " + data['primaryAccountNum']);
        }
        // ensure the json data is a string
        if (data['violationCode'] && !(typeof data['violationCode'] === 'string' || data['violationCode'] instanceof String)) {
            throw new Error("Expected the field `violationCode` to be a primitive type in the JSON string but got " + data['violationCode']);
        }
        // ensure the json data is a string
        if (data['violationDate'] && !(typeof data['violationDate'] === 'string' || data['violationDate'] instanceof String)) {
            throw new Error("Expected the field `violationDate` to be a primitive type in the JSON string but got " + data['violationDate']);
        }
        // ensure the json data is a string
        if (data['rulingDate'] && !(typeof data['rulingDate'] === 'string' || data['rulingDate'] instanceof String)) {
            throw new Error("Expected the field `rulingDate` to be a primitive type in the JSON string but got " + data['rulingDate']);
        }
        // ensure the json data is a string
        if (data['rulingStatus'] && !(typeof data['rulingStatus'] === 'string' || data['rulingStatus'] instanceof String)) {
            throw new Error("Expected the field `rulingStatus` to be a primitive type in the JSON string but got " + data['rulingStatus']);
        }
        // ensure the json data is a string
        if (data['virtualAccountNum'] && !(typeof data['virtualAccountNum'] === 'string' || data['virtualAccountNum'] instanceof String)) {
            throw new Error("Expected the field `virtualAccountNum` to be a primitive type in the JSON string but got " + data['virtualAccountNum']);
        }

        return true;
    }


}



/**
 * Claim identifier associated with the standard claimId
 * @member {String} claimId
 */
CaseFilingDetails.prototype['claimId'] = undefined;

/**
 * Claim Type
 * @member {String} claimType
 */
CaseFilingDetails.prototype['claimType'] = undefined;

/**
 * Identifier assigned to the case filing
 * @member {String} caseId
 */
CaseFilingDetails.prototype['caseId'] = undefined;

/**
 * Type of Case Filing. The following number values represent each case type.  1-Pre-arbitration  2-Arbitration  3-Pre-compliance 4-Compliance
 * @member {String} caseType
 */
CaseFilingDetails.prototype['caseType'] = undefined;

/**
 * A list of Chargeback Reference numbers
 * @member {Array.<String>} chargebackRefNum
 */
CaseFilingDetails.prototype['chargebackRefNum'] = undefined;

/**
 * The case currency. Value should be standard alpha currency code.   For domestic transactions: domestic currency or USD   For cross-border transactions: USD or EUR, per Global Clearing Management System rules   Length: 3   Valid values/format: USD, EUR, GBP, MXN etc and A-Z (uppercase alphabetic letter)  
 * @member {String} currencyCode
 */
CaseFilingDetails.prototype['currencyCode'] = undefined;

/**
 * Customer filing number which is the filing party's internal number
 * @member {String} customerFilingNumber
 */
CaseFilingDetails.prototype['customerFilingNumber'] = undefined;

/**
 * Credit date when the violationCode is 1.4 in the case of pre-compliance or compliance case filing. The format should be yyyy-MM-dd
 * @member {String} creditDate
 */
CaseFilingDetails.prototype['creditDate'] = undefined;

/**
 * Chargeback date when the violationCode is 1.4 in the case of pre-compliance or compliance case filing. The format should be yyyy-MM-dd
 * @member {String} chargebackDate
 */
CaseFilingDetails.prototype['chargebackDate'] = undefined;

/**
 * Reason code is returned when the case type is pre-arbitration or arbitration.
 * @member {String} reasonCode
 */
CaseFilingDetails.prototype['reasonCode'] = undefined;

/**
 * Dispute amount.  The currency will be determined by the ICA region entered in the Filed ICA and Filed Against ICA
 * @member {String} disputeAmount
 */
CaseFilingDetails.prototype['disputeAmount'] = undefined;

/**
 * Due date when the response is required.  The format should be yyyy-MM-dd
 * @member {String} dueDate
 */
CaseFilingDetails.prototype['dueDate'] = undefined;

/**
 * Filed Against ICA
 * @member {String} filingAgaintstIca
 */
CaseFilingDetails.prototype['filingAgaintstIca'] = undefined;

/**
 * Filing case as Issuer or Acquirer. Following values represents each type I-ISSUER  A-ACQUIRER
 * @member {String} filingAs
 */
CaseFilingDetails.prototype['filingAs'] = undefined;

/**
 * Filing ICA
 * @member {String} filingIca
 */
CaseFilingDetails.prototype['filingIca'] = undefined;

/**
 * Merchant name for filing pre-arbitration and arbitration case
 * @member {String} merchantName
 */
CaseFilingDetails.prototype['merchantName'] = undefined;

/**
 * The primary account number
 * @member {String} primaryAccountNum
 */
CaseFilingDetails.prototype['primaryAccountNum'] = undefined;

/**
 * Violation code
 * @member {String} violationCode
 */
CaseFilingDetails.prototype['violationCode'] = undefined;

/**
 * Violation Date
 * @member {String} violationDate
 */
CaseFilingDetails.prototype['violationDate'] = undefined;

/**
 * Ruling Date
 * @member {String} rulingDate
 */
CaseFilingDetails.prototype['rulingDate'] = undefined;

/**
 * Ruling Status.  Valid values are Reviewed, Filed In Error, Declined, Expired, Favor Sender, Favor Receiver
 * @member {String} rulingStatus
 */
CaseFilingDetails.prototype['rulingStatus'] = undefined;

/**
 * The virtual account number
 * @member {String} virtualAccountNum
 */
CaseFilingDetails.prototype['virtualAccountNum'] = undefined;






export default CaseFilingDetails;
