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
 * The RetrievalStatusRequestStructure model module.
 * @module model/RetrievalStatusRequestStructure
 * @version v6
 */
class RetrievalStatusRequestStructure {
    /**
     * Constructs a new <code>RetrievalStatusRequestStructure</code>.
     * @alias module:model/RetrievalStatusRequestStructure
     * @param claimId {String} Claim Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric
     * @param requestId {String} Retrieval Request Id.   Length: 1-19   Valid Values/Format: Numeric
     */
    constructor(claimId, requestId) { 
        
        RetrievalStatusRequestStructure.initialize(this, claimId, requestId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, claimId, requestId) { 
        obj['claimId'] = claimId;
        obj['requestId'] = requestId;
    }

    /**
     * Constructs a <code>RetrievalStatusRequestStructure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RetrievalStatusRequestStructure} obj Optional instance to populate.
     * @return {module:model/RetrievalStatusRequestStructure} The populated <code>RetrievalStatusRequestStructure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RetrievalStatusRequestStructure();

            if (data.hasOwnProperty('claimId')) {
                obj['claimId'] = ApiClient.convertToType(data['claimId'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RetrievalStatusRequestStructure</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RetrievalStatusRequestStructure</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RetrievalStatusRequestStructure.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['claimId'] && !(typeof data['claimId'] === 'string' || data['claimId'] instanceof String)) {
            throw new Error("Expected the field `claimId` to be a primitive type in the JSON string but got " + data['claimId']);
        }
        // ensure the json data is a string
        if (data['requestId'] && !(typeof data['requestId'] === 'string' || data['requestId'] instanceof String)) {
            throw new Error("Expected the field `requestId` to be a primitive type in the JSON string but got " + data['requestId']);
        }

        return true;
    }


}

RetrievalStatusRequestStructure.RequiredProperties = ["claimId", "requestId"];

/**
 * Claim Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric
 * @member {String} claimId
 */
RetrievalStatusRequestStructure.prototype['claimId'] = undefined;

/**
 * Retrieval Request Id.   Length: 1-19   Valid Values/Format: Numeric
 * @member {String} requestId
 */
RetrievalStatusRequestStructure.prototype['requestId'] = undefined;






export default RetrievalStatusRequestStructure;
