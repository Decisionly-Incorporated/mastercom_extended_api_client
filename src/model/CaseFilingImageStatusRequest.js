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
 * The CaseFilingImageStatusRequest model module.
 * @module model/CaseFilingImageStatusRequest
 * @version v6
 */
class CaseFilingImageStatusRequest {
    /**
     * Constructs a new <code>CaseFilingImageStatusRequest</code>.
     * @alias module:model/CaseFilingImageStatusRequest
     * @param status {String} Case filing image status.   Length: 6-11   Valid Values/Format: COMPLETED, FAILED, UNPROCESSED
     * @param startDate {String} Case filing image processing start date.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
     * @param endDate {String} Case filing image processing end date.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
     */
    constructor(status, startDate, endDate) { 
        
        CaseFilingImageStatusRequest.initialize(this, status, startDate, endDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, startDate, endDate) { 
        obj['status'] = status;
        obj['startDate'] = startDate;
        obj['endDate'] = endDate;
    }

    /**
     * Constructs a <code>CaseFilingImageStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CaseFilingImageStatusRequest} obj Optional instance to populate.
     * @return {module:model/CaseFilingImageStatusRequest} The populated <code>CaseFilingImageStatusRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CaseFilingImageStatusRequest();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CaseFilingImageStatusRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CaseFilingImageStatusRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CaseFilingImageStatusRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['startDate'] && !(typeof data['startDate'] === 'string' || data['startDate'] instanceof String)) {
            throw new Error("Expected the field `startDate` to be a primitive type in the JSON string but got " + data['startDate']);
        }
        // ensure the json data is a string
        if (data['endDate'] && !(typeof data['endDate'] === 'string' || data['endDate'] instanceof String)) {
            throw new Error("Expected the field `endDate` to be a primitive type in the JSON string but got " + data['endDate']);
        }

        return true;
    }


}

CaseFilingImageStatusRequest.RequiredProperties = ["status", "startDate", "endDate"];

/**
 * Case filing image status.   Length: 6-11   Valid Values/Format: COMPLETED, FAILED, UNPROCESSED
 * @member {String} status
 */
CaseFilingImageStatusRequest.prototype['status'] = undefined;

/**
 * Case filing image processing start date.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
 * @member {String} startDate
 */
CaseFilingImageStatusRequest.prototype['startDate'] = undefined;

/**
 * Case filing image processing end date.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
 * @member {String} endDate
 */
CaseFilingImageStatusRequest.prototype['endDate'] = undefined;






export default CaseFilingImageStatusRequest;
