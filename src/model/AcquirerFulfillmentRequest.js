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
 * The AcquirerFulfillmentRequest model module.
 * @module model/AcquirerFulfillmentRequest
 * @version v6
 */
class AcquirerFulfillmentRequest {
    /**
     * Constructs a new <code>AcquirerFulfillmentRequest</code>.
     * @alias module:model/AcquirerFulfillmentRequest
     * @param acquirerResponseCd {module:model/AcquirerFulfillmentRequest.AcquirerResponseCdEnum} Acquirer Response Code.   NOTE: Acquirers can no longer respond to retrieval requests using the existing process in production, except for transactions related to U.S. healthcare.   NOTE: Below acquirerResponseCd codes will be accepted starting on February 26th, 2023.    A - Funds Movement Request, B - Refunded, C - Initiating Refund, E - Reject Collaboration, F - IIAS Unfulfillable, G - IIAS Invalid request information, H - IIAS Fulfilled outside MasterCom system   Length: 1   Valid Values/Format: A - Funds Movement Request, B - Refunded, C - Initiating Refund, E - Reject Collaboration, F - IIAS Unfulfillable, G - IIAS Invalid request information, H - IIAS Fulfilled outside MasterCom system
     */
    constructor(acquirerResponseCd) { 
        
        AcquirerFulfillmentRequest.initialize(this, acquirerResponseCd);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, acquirerResponseCd) { 
        obj['acquirerResponseCd'] = acquirerResponseCd;
    }

    /**
     * Constructs a <code>AcquirerFulfillmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AcquirerFulfillmentRequest} obj Optional instance to populate.
     * @return {module:model/AcquirerFulfillmentRequest} The populated <code>AcquirerFulfillmentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AcquirerFulfillmentRequest();

            if (data.hasOwnProperty('acquirerResponseCd')) {
                obj['acquirerResponseCd'] = ApiClient.convertToType(data['acquirerResponseCd'], 'String');
            }
            if (data.hasOwnProperty('refundReversalType')) {
                obj['refundReversalType'] = ApiClient.convertToType(data['refundReversalType'], 'String');
            }
            if (data.hasOwnProperty('refundReversalDate')) {
                obj['refundReversalDate'] = ApiClient.convertToType(data['refundReversalDate'], 'String');
            }
            if (data.hasOwnProperty('refundReversalAmount')) {
                obj['refundReversalAmount'] = ApiClient.convertToType(data['refundReversalAmount'], 'String');
            }
            if (data.hasOwnProperty('refundReversalCurrency')) {
                obj['refundReversalCurrency'] = ApiClient.convertToType(data['refundReversalCurrency'], 'String');
            }
            if (data.hasOwnProperty('refundReversalReferenceId')) {
                obj['refundReversalReferenceId'] = ApiClient.convertToType(data['refundReversalReferenceId'], 'String');
            }
            if (data.hasOwnProperty('memo')) {
                obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AcquirerFulfillmentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AcquirerFulfillmentRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AcquirerFulfillmentRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['acquirerResponseCd'] && !(typeof data['acquirerResponseCd'] === 'string' || data['acquirerResponseCd'] instanceof String)) {
            throw new Error("Expected the field `acquirerResponseCd` to be a primitive type in the JSON string but got " + data['acquirerResponseCd']);
        }
        // ensure the json data is a string
        if (data['refundReversalType'] && !(typeof data['refundReversalType'] === 'string' || data['refundReversalType'] instanceof String)) {
            throw new Error("Expected the field `refundReversalType` to be a primitive type in the JSON string but got " + data['refundReversalType']);
        }
        // ensure the json data is a string
        if (data['refundReversalDate'] && !(typeof data['refundReversalDate'] === 'string' || data['refundReversalDate'] instanceof String)) {
            throw new Error("Expected the field `refundReversalDate` to be a primitive type in the JSON string but got " + data['refundReversalDate']);
        }
        // ensure the json data is a string
        if (data['refundReversalAmount'] && !(typeof data['refundReversalAmount'] === 'string' || data['refundReversalAmount'] instanceof String)) {
            throw new Error("Expected the field `refundReversalAmount` to be a primitive type in the JSON string but got " + data['refundReversalAmount']);
        }
        // ensure the json data is a string
        if (data['refundReversalCurrency'] && !(typeof data['refundReversalCurrency'] === 'string' || data['refundReversalCurrency'] instanceof String)) {
            throw new Error("Expected the field `refundReversalCurrency` to be a primitive type in the JSON string but got " + data['refundReversalCurrency']);
        }
        // ensure the json data is a string
        if (data['refundReversalReferenceId'] && !(typeof data['refundReversalReferenceId'] === 'string' || data['refundReversalReferenceId'] instanceof String)) {
            throw new Error("Expected the field `refundReversalReferenceId` to be a primitive type in the JSON string but got " + data['refundReversalReferenceId']);
        }
        // ensure the json data is a string
        if (data['memo'] && !(typeof data['memo'] === 'string' || data['memo'] instanceof String)) {
            throw new Error("Expected the field `memo` to be a primitive type in the JSON string but got " + data['memo']);
        }

        return true;
    }


}

AcquirerFulfillmentRequest.RequiredProperties = ["acquirerResponseCd"];

/**
 * Acquirer Response Code.   NOTE: Acquirers can no longer respond to retrieval requests using the existing process in production, except for transactions related to U.S. healthcare.   NOTE: Below acquirerResponseCd codes will be accepted starting on February 26th, 2023.    A - Funds Movement Request, B - Refunded, C - Initiating Refund, E - Reject Collaboration, F - IIAS Unfulfillable, G - IIAS Invalid request information, H - IIAS Fulfilled outside MasterCom system   Length: 1   Valid Values/Format: A - Funds Movement Request, B - Refunded, C - Initiating Refund, E - Reject Collaboration, F - IIAS Unfulfillable, G - IIAS Invalid request information, H - IIAS Fulfilled outside MasterCom system
 * @member {module:model/AcquirerFulfillmentRequest.AcquirerResponseCdEnum} acquirerResponseCd
 */
AcquirerFulfillmentRequest.prototype['acquirerResponseCd'] = undefined;

/**
 * Refund/Reversal Type.   CONDITIONAL: This field is not valid if acquirerResponseCd is A, E, F, G or H.   If acquirerResponseCd is C, then CREDIT VOUCHER is not a valid value.   Required if acquirerResponseCd is B.   Length: 6-14   Valid Values/Format: REFUND, CREDIT VOUCHER
 * @member {String} refundReversalType
 */
AcquirerFulfillmentRequest.prototype['refundReversalType'] = undefined;

/**
 * Refund/Reversal Date.   CONDITIONAL: This field is not valid if acquirerResponseCd is A, E, F, G or H.   Not valid if refundReversalType is not provided.   Required if acquirerResponseCd is B or C and refundReversalType is REFUND.   Length: 16   Valid Values/Format: Date (yyyy-MM-ddTHH:mm)
 * @member {String} refundReversalDate
 */
AcquirerFulfillmentRequest.prototype['refundReversalDate'] = undefined;

/**
 * Refund/Reversal Amount.   CONDITIONAL: This field is not valid if acquirerResponseCd is A, E, F, G or H.   This field is only valid if acquirerResponseCd is B and refundReversalType is CREDIT VOUCHER.   Not valid if refundReversalType is not provided.   Valid Values/Format: Numeric
 * @member {String} refundReversalAmount
 */
AcquirerFulfillmentRequest.prototype['refundReversalAmount'] = undefined;

/**
 * Refund/Reversal Currency.   CONDITIONAL: This field is not valid if acquirerResponseCd is A, E, F, G or H.   This field is only valid if acquirerResponseCd is B and refundReversalType is CREDIT VOUCHER.   Not valid if refundReversalType is not provided.   Length: 3   Valid Values/Format: A-Z (Uppercase Alphabetic Letter)
 * @member {String} refundReversalCurrency
 */
AcquirerFulfillmentRequest.prototype['refundReversalCurrency'] = undefined;

/**
 * For Transaction type Authorized transactions:<br> First 12 positions of Data Element (DE) 63 (Network Data) from one of the following:<br> â€“ Authorized refund message (Authorization Request Response/0110 or Financial Transaction Request Response/0210)<br> â€“ Reversal message (Reversal Request Response/ 0410 or Acquirer Reversal Advice Response/ 0430)<br> â€“ Automated fuel dispenser transaction (MCC = 5542 and CAT Level 2) (Authorization Advice Response/0130)   For Transaction type Cleared transactions:<br>  DE 63 (Network Data), subfield 2 (Trace ID) in the First Presentment/1240 message   For Transaction type Not authorized but cleared transactions:<br>  Either Private Data Subelement (PDS) 0105 (File ID) or PDS 158, subfield 5 (Central Site Business Date) and subfield 6 (Business Cycle) with no spaces   CONDITIONAL: This field is not valid if acquirerResponseCd is A, E, F, G or H.   Not valid if refundReversalType is not provided.   Required if acquirerResponseCd is B or C and refundReversalType is REFUND.   Length: 8-25   Valid Values/Format: Alphanumeric
 * @member {String} refundReversalReferenceId
 */
AcquirerFulfillmentRequest.prototype['refundReversalReferenceId'] = undefined;

/**
 * Memo.   Length: 1-100   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
 * @member {String} memo
 */
AcquirerFulfillmentRequest.prototype['memo'] = undefined;





/**
 * Allowed values for the <code>acquirerResponseCd</code> property.
 * @enum {String}
 * @readonly
 */
AcquirerFulfillmentRequest['AcquirerResponseCdEnum'] = {

    /**
     * value: "A"
     * @const
     */
    "A": "A",

    /**
     * value: "B"
     * @const
     */
    "B": "B",

    /**
     * value: "C"
     * @const
     */
    "C": "C",

    /**
     * value: "E"
     * @const
     */
    "E": "E",

    /**
     * value: "F"
     * @const
     */
    "F": "F",

    /**
     * value: "G"
     * @const
     */
    "G": "G",

    /**
     * value: "H"
     * @const
     */
    "H": "H"
};



export default AcquirerFulfillmentRequest;

