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
 * The CreateFeeRequestSingle model module.
 * @module model/CreateFeeRequestSingle
 * @version v6
 */
class CreateFeeRequestSingle {
    /**
     * Constructs a new <code>CreateFeeRequestSingle</code>.
     * @alias module:model/CreateFeeRequestSingle
     * @param acquirerCustomerId {String} Acquirer ICA number that is taken from the transaction and supplied by Single Message Transaction Manager.   Length: 1-6   Valid Values/Format: Numeric
     * @param conditionIndicator {module:model/CreateFeeRequestSingle.ConditionIndicatorEnum} Condition Indicator identifies the Message Reason Code (MRC) for a chargeback..   Length: 1   Valid Values/Format: A, B, C, D
     * @param controlNumber {String} Allows the issuer to identify the progressive handling fee message being created. The control number must be 20 positions in length and right-justified, zero-filled if less.   Length: 1-20   Valid Values/Format: Alphanumeric
     * @param functionCode {module:model/CreateFeeRequestSingle.FunctionCodeEnum} Determines whether the progressive handling fee is being applied to a First Chargeback.   Length: 3   Valid Values/Format: 700
     * @param handlingFee {String} Any monetary amount can be entered in this field. There is a USD 25 limit for the First Chargeback (Reason Code 22).   Length: 4-9   Valid Values/Format: Numeric
     * @param reasonCode {module:model/CreateFeeRequestSingle.ReasonCodeEnum} Reason code for applying handling fee.   Length: 2   Valid Values/Format: 22 - First Chargeback Handling Fee
     */
    constructor(acquirerCustomerId, conditionIndicator, controlNumber, functionCode, handlingFee, reasonCode) { 
        
        CreateFeeRequestSingle.initialize(this, acquirerCustomerId, conditionIndicator, controlNumber, functionCode, handlingFee, reasonCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, acquirerCustomerId, conditionIndicator, controlNumber, functionCode, handlingFee, reasonCode) { 
        obj['acquirerCustomerId'] = acquirerCustomerId;
        obj['conditionIndicator'] = conditionIndicator;
        obj['controlNumber'] = controlNumber;
        obj['functionCode'] = functionCode;
        obj['handlingFee'] = handlingFee;
        obj['reasonCode'] = reasonCode;
    }

    /**
     * Constructs a <code>CreateFeeRequestSingle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFeeRequestSingle} obj Optional instance to populate.
     * @return {module:model/CreateFeeRequestSingle} The populated <code>CreateFeeRequestSingle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFeeRequestSingle();

            if (data.hasOwnProperty('acquirerCustomerId')) {
                obj['acquirerCustomerId'] = ApiClient.convertToType(data['acquirerCustomerId'], 'String');
            }
            if (data.hasOwnProperty('conditionIndicator')) {
                obj['conditionIndicator'] = ApiClient.convertToType(data['conditionIndicator'], 'String');
            }
            if (data.hasOwnProperty('controlNumber')) {
                obj['controlNumber'] = ApiClient.convertToType(data['controlNumber'], 'String');
            }
            if (data.hasOwnProperty('functionCode')) {
                obj['functionCode'] = ApiClient.convertToType(data['functionCode'], 'String');
            }
            if (data.hasOwnProperty('handlingFee')) {
                obj['handlingFee'] = ApiClient.convertToType(data['handlingFee'], 'String');
            }
            if (data.hasOwnProperty('reasonCode')) {
                obj['reasonCode'] = ApiClient.convertToType(data['reasonCode'], 'String');
            }
            if (data.hasOwnProperty('declineDate')) {
                obj['declineDate'] = ApiClient.convertToType(data['declineDate'], 'String');
            }
            if (data.hasOwnProperty('issuerCustomerID')) {
                obj['issuerCustomerID'] = ApiClient.convertToType(data['issuerCustomerID'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateFeeRequestSingle</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateFeeRequestSingle</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateFeeRequestSingle.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['acquirerCustomerId'] && !(typeof data['acquirerCustomerId'] === 'string' || data['acquirerCustomerId'] instanceof String)) {
            throw new Error("Expected the field `acquirerCustomerId` to be a primitive type in the JSON string but got " + data['acquirerCustomerId']);
        }
        // ensure the json data is a string
        if (data['conditionIndicator'] && !(typeof data['conditionIndicator'] === 'string' || data['conditionIndicator'] instanceof String)) {
            throw new Error("Expected the field `conditionIndicator` to be a primitive type in the JSON string but got " + data['conditionIndicator']);
        }
        // ensure the json data is a string
        if (data['controlNumber'] && !(typeof data['controlNumber'] === 'string' || data['controlNumber'] instanceof String)) {
            throw new Error("Expected the field `controlNumber` to be a primitive type in the JSON string but got " + data['controlNumber']);
        }
        // ensure the json data is a string
        if (data['functionCode'] && !(typeof data['functionCode'] === 'string' || data['functionCode'] instanceof String)) {
            throw new Error("Expected the field `functionCode` to be a primitive type in the JSON string but got " + data['functionCode']);
        }
        // ensure the json data is a string
        if (data['handlingFee'] && !(typeof data['handlingFee'] === 'string' || data['handlingFee'] instanceof String)) {
            throw new Error("Expected the field `handlingFee` to be a primitive type in the JSON string but got " + data['handlingFee']);
        }
        // ensure the json data is a string
        if (data['reasonCode'] && !(typeof data['reasonCode'] === 'string' || data['reasonCode'] instanceof String)) {
            throw new Error("Expected the field `reasonCode` to be a primitive type in the JSON string but got " + data['reasonCode']);
        }
        // ensure the json data is a string
        if (data['declineDate'] && !(typeof data['declineDate'] === 'string' || data['declineDate'] instanceof String)) {
            throw new Error("Expected the field `declineDate` to be a primitive type in the JSON string but got " + data['declineDate']);
        }
        // ensure the json data is a string
        if (data['issuerCustomerID'] && !(typeof data['issuerCustomerID'] === 'string' || data['issuerCustomerID'] instanceof String)) {
            throw new Error("Expected the field `issuerCustomerID` to be a primitive type in the JSON string but got " + data['issuerCustomerID']);
        }

        return true;
    }


}

CreateFeeRequestSingle.RequiredProperties = ["acquirerCustomerId", "conditionIndicator", "controlNumber", "functionCode", "handlingFee", "reasonCode"];

/**
 * Acquirer ICA number that is taken from the transaction and supplied by Single Message Transaction Manager.   Length: 1-6   Valid Values/Format: Numeric
 * @member {String} acquirerCustomerId
 */
CreateFeeRequestSingle.prototype['acquirerCustomerId'] = undefined;

/**
 * Condition Indicator identifies the Message Reason Code (MRC) for a chargeback..   Length: 1   Valid Values/Format: A, B, C, D
 * @member {module:model/CreateFeeRequestSingle.ConditionIndicatorEnum} conditionIndicator
 */
CreateFeeRequestSingle.prototype['conditionIndicator'] = undefined;

/**
 * Allows the issuer to identify the progressive handling fee message being created. The control number must be 20 positions in length and right-justified, zero-filled if less.   Length: 1-20   Valid Values/Format: Alphanumeric
 * @member {String} controlNumber
 */
CreateFeeRequestSingle.prototype['controlNumber'] = undefined;

/**
 * Determines whether the progressive handling fee is being applied to a First Chargeback.   Length: 3   Valid Values/Format: 700
 * @member {module:model/CreateFeeRequestSingle.FunctionCodeEnum} functionCode
 */
CreateFeeRequestSingle.prototype['functionCode'] = undefined;

/**
 * Any monetary amount can be entered in this field. There is a USD 25 limit for the First Chargeback (Reason Code 22).   Length: 4-9   Valid Values/Format: Numeric
 * @member {String} handlingFee
 */
CreateFeeRequestSingle.prototype['handlingFee'] = undefined;

/**
 * Reason code for applying handling fee.   Length: 2   Valid Values/Format: 22 - First Chargeback Handling Fee
 * @member {module:model/CreateFeeRequestSingle.ReasonCodeEnum} reasonCode
 */
CreateFeeRequestSingle.prototype['reasonCode'] = undefined;

/**
 * This is the date the authorization request was declined. This field is required when conditionIndicator is A.   Length: 6   Valid Values/Format: Date(MMDDYY)
 * @member {String} declineDate
 */
CreateFeeRequestSingle.prototype['declineDate'] = undefined;

/**
 * Issuer ICA number that is taken from the transaction and supplied by Single Message Transaction Manager.   Length: 1-6   Valid Values/Format: Numeric
 * @member {String} issuerCustomerID
 */
CreateFeeRequestSingle.prototype['issuerCustomerID'] = undefined;





/**
 * Allowed values for the <code>conditionIndicator</code> property.
 * @enum {String}
 * @readonly
 */
CreateFeeRequestSingle['ConditionIndicatorEnum'] = {

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
     * value: "D"
     * @const
     */
    "D": "D"
};


/**
 * Allowed values for the <code>functionCode</code> property.
 * @enum {String}
 * @readonly
 */
CreateFeeRequestSingle['FunctionCodeEnum'] = {

    /**
     * value: "700"
     * @const
     */
    "700": "700"
};


/**
 * Allowed values for the <code>reasonCode</code> property.
 * @enum {String}
 * @readonly
 */
CreateFeeRequestSingle['ReasonCodeEnum'] = {

    /**
     * value: "22"
     * @const
     */
    "22": "22"
};



export default CreateFeeRequestSingle;
