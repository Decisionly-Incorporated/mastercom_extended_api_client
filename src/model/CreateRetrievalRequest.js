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
 * The CreateRetrievalRequest model module.
 * @module model/CreateRetrievalRequest
 * @version v6
 */
class CreateRetrievalRequest {
    /**
     * Constructs a new <code>CreateRetrievalRequest</code>.
     * @alias module:model/CreateRetrievalRequest
     * @param retrievalRequestReason {module:model/CreateRetrievalRequest.RetrievalRequestReasonEnum} Retrieval Request Reason Codes.   NOTE: Below retrievalRequestReason code will be accepted for creation of retrieval request starting on October 24th, 2021.<br>  6343 - IIAS Audit (for healthcare transactions only)   Length: 1-4   Valid Values/Format: 6343 - IIAS Audit (for healthcare transactions only)
     * @param docNeeded {module:model/CreateRetrievalRequest.DocNeededEnum} Documentation Needed Indicator.   Length: 1   Valid Values/Format: 2 - Copy or image (photocopy, microfilm, fax) of original document, 4 - Substitute draft
     */
    constructor(retrievalRequestReason, docNeeded) { 
        
        CreateRetrievalRequest.initialize(this, retrievalRequestReason, docNeeded);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, retrievalRequestReason, docNeeded) { 
        obj['retrievalRequestReason'] = retrievalRequestReason;
        obj['docNeeded'] = docNeeded;
    }

    /**
     * Constructs a <code>CreateRetrievalRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRetrievalRequest} obj Optional instance to populate.
     * @return {module:model/CreateRetrievalRequest} The populated <code>CreateRetrievalRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRetrievalRequest();

            if (data.hasOwnProperty('retrievalRequestReason')) {
                obj['retrievalRequestReason'] = ApiClient.convertToType(data['retrievalRequestReason'], 'String');
            }
            if (data.hasOwnProperty('docNeeded')) {
                obj['docNeeded'] = ApiClient.convertToType(data['docNeeded'], 'String');
            }
            if (data.hasOwnProperty('instructionsForHealthcare')) {
                obj['instructionsForHealthcare'] = ApiClient.convertToType(data['instructionsForHealthcare'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateRetrievalRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateRetrievalRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateRetrievalRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['retrievalRequestReason'] && !(typeof data['retrievalRequestReason'] === 'string' || data['retrievalRequestReason'] instanceof String)) {
            throw new Error("Expected the field `retrievalRequestReason` to be a primitive type in the JSON string but got " + data['retrievalRequestReason']);
        }
        // ensure the json data is a string
        if (data['docNeeded'] && !(typeof data['docNeeded'] === 'string' || data['docNeeded'] instanceof String)) {
            throw new Error("Expected the field `docNeeded` to be a primitive type in the JSON string but got " + data['docNeeded']);
        }
        // ensure the json data is a string
        if (data['instructionsForHealthcare'] && !(typeof data['instructionsForHealthcare'] === 'string' || data['instructionsForHealthcare'] instanceof String)) {
            throw new Error("Expected the field `instructionsForHealthcare` to be a primitive type in the JSON string but got " + data['instructionsForHealthcare']);
        }

        return true;
    }


}

CreateRetrievalRequest.RequiredProperties = ["retrievalRequestReason", "docNeeded"];

/**
 * Retrieval Request Reason Codes.   NOTE: Below retrievalRequestReason code will be accepted for creation of retrieval request starting on October 24th, 2021.<br>  6343 - IIAS Audit (for healthcare transactions only)   Length: 1-4   Valid Values/Format: 6343 - IIAS Audit (for healthcare transactions only)
 * @member {module:model/CreateRetrievalRequest.RetrievalRequestReasonEnum} retrievalRequestReason
 */
CreateRetrievalRequest.prototype['retrievalRequestReason'] = undefined;

/**
 * Documentation Needed Indicator.   Length: 1   Valid Values/Format: 2 - Copy or image (photocopy, microfilm, fax) of original document, 4 - Substitute draft
 * @member {module:model/CreateRetrievalRequest.DocNeededEnum} docNeeded
 */
CreateRetrievalRequest.prototype['docNeeded'] = undefined;

/**
 * Instructions for Healthcare.   CONDITIONAL: Required when retrievalRequestReason = 6343.   Length: 16-200   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
 * @member {String} instructionsForHealthcare
 */
CreateRetrievalRequest.prototype['instructionsForHealthcare'] = undefined;





/**
 * Allowed values for the <code>retrievalRequestReason</code> property.
 * @enum {String}
 * @readonly
 */
CreateRetrievalRequest['RetrievalRequestReasonEnum'] = {

    /**
     * value: "6343"
     * @const
     */
    "6343": "6343"
};


/**
 * Allowed values for the <code>docNeeded</code> property.
 * @enum {String}
 * @readonly
 */
CreateRetrievalRequest['DocNeededEnum'] = {

    /**
     * value: "2"
     * @const
     */
    "2": "2",

    /**
     * value: "4"
     * @const
     */
    "4": "4"
};



export default CreateRetrievalRequest;
