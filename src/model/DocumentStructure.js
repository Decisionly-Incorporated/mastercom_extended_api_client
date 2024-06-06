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
 * The DocumentStructure model module.
 * @module model/DocumentStructure
 * @version v6
 */
class DocumentStructure {
    /**
     * Constructs a new <code>DocumentStructure</code>.
     * CONDITIONAL: Unless specified as REQUIRED, fileAttachment object is OPTIONAL. When fileAttachment is provided, then fileName and file parameters are required. The base64 encoded string must represent a ZIP, JPG, TIFF, or PDF file. Please note: ZIP files may contain JPG, TIFF or PDF files.
     * @alias module:model/DocumentStructure
     */
    constructor() { 
        
        DocumentStructure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentStructure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentStructure} obj Optional instance to populate.
     * @return {module:model/DocumentStructure} The populated <code>DocumentStructure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentStructure();

            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DocumentStructure</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DocumentStructure</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['filename'] && !(typeof data['filename'] === 'string' || data['filename'] instanceof String)) {
            throw new Error("Expected the field `filename` to be a primitive type in the JSON string but got " + data['filename']);
        }
        // ensure the json data is a string
        if (data['file'] && !(typeof data['file'] === 'string' || data['file'] instanceof String)) {
            throw new Error("Expected the field `file` to be a primitive type in the JSON string but got " + data['file']);
        }

        return true;
    }


}



/**
 * File name of image.   Length: 1-16   Valid Values/Format: Alphanumeric
 * @member {String} filename
 */
DocumentStructure.prototype['filename'] = undefined;

/**
 * File converted to a base64 encoded string.   Length: 1-22000000   Valid Values/Format: Alphanumeric
 * @member {String} file
 */
DocumentStructure.prototype['file'] = undefined;






export default DocumentStructure;
