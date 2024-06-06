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
import DocumentStructureResp from './DocumentStructureResp';

/**
 * The DocumentResponseStructure model module.
 * @module model/DocumentResponseStructure
 * @version v6
 */
class DocumentResponseStructure {
    /**
     * Constructs a new <code>DocumentResponseStructure</code>.
     * @alias module:model/DocumentResponseStructure
     */
    constructor() { 
        
        DocumentResponseStructure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentResponseStructure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentResponseStructure} obj Optional instance to populate.
     * @return {module:model/DocumentResponseStructure} The populated <code>DocumentResponseStructure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentResponseStructure();

            if (data.hasOwnProperty('fileAttachment')) {
                obj['fileAttachment'] = DocumentStructureResp.constructFromObject(data['fileAttachment']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DocumentResponseStructure</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DocumentResponseStructure</code>.
     */
    static validateJSON(data) {
        // validate the optional field `fileAttachment`
        if (data['fileAttachment']) { // data not null
          DocumentStructureResp.validateJSON(data['fileAttachment']);
        }

        return true;
    }


}



/**
 * @member {module:model/DocumentStructureResp} fileAttachment
 */
DocumentResponseStructure.prototype['fileAttachment'] = undefined;






export default DocumentResponseStructure;

