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
import Error from './Error';

/**
 * The Errors model module.
 * @module model/Errors
 * @version v6
 */
class Errors {
    /**
     * Constructs a new <code>Errors</code>.
     * @alias module:model/Errors
     */
    constructor() { 
        
        Errors.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Errors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Errors} obj Optional instance to populate.
     * @return {module:model/Errors} The populated <code>Errors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Errors();

            if (data.hasOwnProperty('Errors')) {
                obj['Errors'] = ApiClient.convertToType(data['Errors'], [Error]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Errors</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Errors</code>.
     */
    static validateJSON(data) {
        if (data['Errors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Errors'])) {
                throw new Error("Expected the field `Errors` to be an array in the JSON data but got " + data['Errors']);
            }
            // validate the optional field `Errors` (array)
            for (const item of data['Errors']) {
                Error.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * List of Errors returned to service
 * @member {Array.<module:model/Error>} Errors
 */
Errors.prototype['Errors'] = undefined;






export default Errors;
