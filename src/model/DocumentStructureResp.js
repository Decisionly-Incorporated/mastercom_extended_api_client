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
 * The DocumentStructureResp model module.
 * @module model/DocumentStructureResp
 * @version v6
 */
class DocumentStructureResp {
    /**
     * Constructs a new <code>DocumentStructureResp</code>.
     * @alias module:model/DocumentStructureResp
     */
    constructor() { 
        
        DocumentStructureResp.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentStructureResp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentStructureResp} obj Optional instance to populate.
     * @return {module:model/DocumentStructureResp} The populated <code>DocumentStructureResp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentStructureResp();

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
     * Validates the JSON data with respect to <code>DocumentStructureResp</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DocumentStructureResp</code>.
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
 * File name of image.  The filename will have an extension of .zip.
 * @member {String} filename
 */
DocumentStructureResp.prototype['filename'] = undefined;

/**
 * File converted to a base64 encoded string.  File Format is ZIP  Note: ZIP file may contain these formats...JPG, TIFF, PDF
 * @member {String} file
 */
DocumentStructureResp.prototype['file'] = undefined;






export default DocumentStructureResp;

