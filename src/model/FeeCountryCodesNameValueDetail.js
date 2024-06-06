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
 * The FeeCountryCodesNameValueDetail model module.
 * @module model/FeeCountryCodesNameValueDetail
 * @version v6
 */
class FeeCountryCodesNameValueDetail {
    /**
     * Constructs a new <code>FeeCountryCodesNameValueDetail</code>.
     * @alias module:model/FeeCountryCodesNameValueDetail
     */
    constructor() { 
        
        FeeCountryCodesNameValueDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FeeCountryCodesNameValueDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeeCountryCodesNameValueDetail} obj Optional instance to populate.
     * @return {module:model/FeeCountryCodesNameValueDetail} The populated <code>FeeCountryCodesNameValueDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeeCountryCodesNameValueDetail();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FeeCountryCodesNameValueDetail</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FeeCountryCodesNameValueDetail</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * The name of the element
 * @member {String} name
 */
FeeCountryCodesNameValueDetail.prototype['name'] = undefined;

/**
 * The value of the element
 * @member {String} value
 */
FeeCountryCodesNameValueDetail.prototype['value'] = undefined;






export default FeeCountryCodesNameValueDetail;
