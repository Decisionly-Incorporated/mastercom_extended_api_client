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
 * The CreateFeeRequest model module.
 * @module model/CreateFeeRequest
 * @version v6
 */
class CreateFeeRequest {
    /**
     * Constructs a new <code>CreateFeeRequest</code>.
     * @alias module:model/CreateFeeRequest
     * @param currency {String} Currency of the fee.   Length: 3   Valid Values/Format: A-Z (Uppercase alphabetic letters)
     * @param feeDate {String} Date the fee was attached to the claim.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
     * @param destinationMember {String} Destination member for the fee collection.   Length: 1-6   Valid Values/Format: Numeric
     * @param feeAmount {String} Amount of the fee.   Length: 4-9   Valid Values/Format: Numeric
     * @param creditSender {Boolean} Credit the Sender   Length: 4-5   Valid Values/Format: true / false
     * @param creditReceiver {Boolean} Credit the Receiver.   Length: 4-5   Valid Values/Format: true / false
     * @param reason {String} Collection Reason Code.   Length: 1-4   Valid Values/Format: Numeric
     */
    constructor(currency, feeDate, destinationMember, feeAmount, creditSender, creditReceiver, reason) { 
        
        CreateFeeRequest.initialize(this, currency, feeDate, destinationMember, feeAmount, creditSender, creditReceiver, reason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, currency, feeDate, destinationMember, feeAmount, creditSender, creditReceiver, reason) { 
        obj['currency'] = currency;
        obj['feeDate'] = feeDate;
        obj['destinationMember'] = destinationMember;
        obj['feeAmount'] = feeAmount;
        obj['creditSender'] = creditSender;
        obj['creditReceiver'] = creditReceiver;
        obj['reason'] = reason;
    }

    /**
     * Constructs a <code>CreateFeeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFeeRequest} obj Optional instance to populate.
     * @return {module:model/CreateFeeRequest} The populated <code>CreateFeeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFeeRequest();

            if (data.hasOwnProperty('cardAcceptorIdCode')) {
                obj['cardAcceptorIdCode'] = ApiClient.convertToType(data['cardAcceptorIdCode'], 'String');
            }
            if (data.hasOwnProperty('cardNumber')) {
                obj['cardNumber'] = ApiClient.convertToType(data['cardNumber'], 'String');
            }
            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('feeDate')) {
                obj['feeDate'] = ApiClient.convertToType(data['feeDate'], 'String');
            }
            if (data.hasOwnProperty('destinationMember')) {
                obj['destinationMember'] = ApiClient.convertToType(data['destinationMember'], 'String');
            }
            if (data.hasOwnProperty('feeAmount')) {
                obj['feeAmount'] = ApiClient.convertToType(data['feeAmount'], 'String');
            }
            if (data.hasOwnProperty('creditSender')) {
                obj['creditSender'] = ApiClient.convertToType(data['creditSender'], 'Boolean');
            }
            if (data.hasOwnProperty('creditReceiver')) {
                obj['creditReceiver'] = ApiClient.convertToType(data['creditReceiver'], 'Boolean');
            }
            if (data.hasOwnProperty('mastercomControlNumber')) {
                obj['mastercomControlNumber'] = ApiClient.convertToType(data['mastercomControlNumber'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('settlementDate')) {
                obj['settlementDate'] = ApiClient.convertToType(data['settlementDate'], 'String');
            }
            if (data.hasOwnProperty('replyFeeId')) {
                obj['replyFeeId'] = ApiClient.convertToType(data['replyFeeId'], 'String');
            }
            if (data.hasOwnProperty('feeType')) {
                obj['feeType'] = ApiClient.convertToType(data['feeType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateFeeRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateFeeRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateFeeRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['cardAcceptorIdCode'] && !(typeof data['cardAcceptorIdCode'] === 'string' || data['cardAcceptorIdCode'] instanceof String)) {
            throw new Error("Expected the field `cardAcceptorIdCode` to be a primitive type in the JSON string but got " + data['cardAcceptorIdCode']);
        }
        // ensure the json data is a string
        if (data['cardNumber'] && !(typeof data['cardNumber'] === 'string' || data['cardNumber'] instanceof String)) {
            throw new Error("Expected the field `cardNumber` to be a primitive type in the JSON string but got " + data['cardNumber']);
        }
        // ensure the json data is a string
        if (data['countryCode'] && !(typeof data['countryCode'] === 'string' || data['countryCode'] instanceof String)) {
            throw new Error("Expected the field `countryCode` to be a primitive type in the JSON string but got " + data['countryCode']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['feeDate'] && !(typeof data['feeDate'] === 'string' || data['feeDate'] instanceof String)) {
            throw new Error("Expected the field `feeDate` to be a primitive type in the JSON string but got " + data['feeDate']);
        }
        // ensure the json data is a string
        if (data['destinationMember'] && !(typeof data['destinationMember'] === 'string' || data['destinationMember'] instanceof String)) {
            throw new Error("Expected the field `destinationMember` to be a primitive type in the JSON string but got " + data['destinationMember']);
        }
        // ensure the json data is a string
        if (data['feeAmount'] && !(typeof data['feeAmount'] === 'string' || data['feeAmount'] instanceof String)) {
            throw new Error("Expected the field `feeAmount` to be a primitive type in the JSON string but got " + data['feeAmount']);
        }
        // ensure the json data is a string
        if (data['mastercomControlNumber'] && !(typeof data['mastercomControlNumber'] === 'string' || data['mastercomControlNumber'] instanceof String)) {
            throw new Error("Expected the field `mastercomControlNumber` to be a primitive type in the JSON string but got " + data['mastercomControlNumber']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }
        // ensure the json data is a string
        if (data['settlementDate'] && !(typeof data['settlementDate'] === 'string' || data['settlementDate'] instanceof String)) {
            throw new Error("Expected the field `settlementDate` to be a primitive type in the JSON string but got " + data['settlementDate']);
        }
        // ensure the json data is a string
        if (data['replyFeeId'] && !(typeof data['replyFeeId'] === 'string' || data['replyFeeId'] instanceof String)) {
            throw new Error("Expected the field `replyFeeId` to be a primitive type in the JSON string but got " + data['replyFeeId']);
        }
        // ensure the json data is a string
        if (data['feeType'] && !(typeof data['feeType'] === 'string' || data['feeType'] instanceof String)) {
            throw new Error("Expected the field `feeType` to be a primitive type in the JSON string but got " + data['feeType']);
        }

        return true;
    }


}

CreateFeeRequest.RequiredProperties = ["currency", "feeDate", "destinationMember", "feeAmount", "creditSender", "creditReceiver", "reason"];

/**
 * Merchant Id associated with this fee collection..if any.   Length: 1-15   Valid Values/Format: Alphanumeric
 * @member {String} cardAcceptorIdCode
 */
CreateFeeRequest.prototype['cardAcceptorIdCode'] = undefined;

/**
 * Card number when required by the reason code.   Length: 1-19   Valid Values/Format: Numeric
 * @member {String} cardNumber
 */
CreateFeeRequest.prototype['cardNumber'] = undefined;

/**
 * Code identifying the country.   Length: 3   Valid Values/Format: A-Z (Uppercase alphabetic letters)
 * @member {String} countryCode
 */
CreateFeeRequest.prototype['countryCode'] = undefined;

/**
 * Currency of the fee.   Length: 3   Valid Values/Format: A-Z (Uppercase alphabetic letters)
 * @member {String} currency
 */
CreateFeeRequest.prototype['currency'] = undefined;

/**
 * Date the fee was attached to the claim.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
 * @member {String} feeDate
 */
CreateFeeRequest.prototype['feeDate'] = undefined;

/**
 * Destination member for the fee collection.   Length: 1-6   Valid Values/Format: Numeric
 * @member {String} destinationMember
 */
CreateFeeRequest.prototype['destinationMember'] = undefined;

/**
 * Amount of the fee.   Length: 4-9   Valid Values/Format: Numeric
 * @member {String} feeAmount
 */
CreateFeeRequest.prototype['feeAmount'] = undefined;

/**
 * Credit the Sender   Length: 4-5   Valid Values/Format: true / false
 * @member {Boolean} creditSender
 */
CreateFeeRequest.prototype['creditSender'] = undefined;

/**
 * Credit the Receiver.   Length: 4-5   Valid Values/Format: true / false
 * @member {Boolean} creditReceiver
 */
CreateFeeRequest.prototype['creditReceiver'] = undefined;

/**
 * Used in routing chargeback and retrieval documentation. It contain either a MasterCom endpoint suffix, in case of 2 characters, or a full MasterCom endpoint in case of 7 characters. When mastercomControlNumber is present, it cannot be all spaces or all zeros.   Length: 1-7   Valid Values/Format: Numeric
 * @member {String} mastercomControlNumber
 */
CreateFeeRequest.prototype['mastercomControlNumber'] = undefined;

/**
 * Message regarding fee..   Length: 1-100   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
 * @member {String} message
 */
CreateFeeRequest.prototype['message'] = undefined;

/**
 * Collection Reason Code.   Length: 1-4   Valid Values/Format: Numeric
 * @member {String} reason
 */
CreateFeeRequest.prototype['reason'] = undefined;

/**
 * CONDITIONAL: settlementDate is a conditional field and is required for Argentina and Uruguay's Settlement Service participation ID codes (LA00003201, LA00003202, LA00085801, LA00085802, LA00084011, LA00084012). The date may not be prior to the current date or beyond 90 days from the current date.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
 * @member {String} settlementDate
 */
CreateFeeRequest.prototype['settlementDate'] = undefined;

/**
 * Fee identifier to be sent to reply to created Fee.   CONDITIONAL: This field is only applicable, if feeType is REPLY to an existing created feeId.   Length: 1-19   Valid Values/Format: Numeric
 * @member {String} replyFeeId
 */
CreateFeeRequest.prototype['replyFeeId'] = undefined;

/**
 * The fee type.   The default value is CREATE   Valid Values/Format: CREATE, REPLY.
 * @member {String} feeType
 */
CreateFeeRequest.prototype['feeType'] = undefined;






export default CreateFeeRequest;

