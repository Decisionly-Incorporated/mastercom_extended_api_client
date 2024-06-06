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
 * The ChargebackImageStatusRequest model module.
 * @module model/ChargebackImageStatusRequest
 * @version v6
 */
class ChargebackImageStatusRequest {
    /**
     * Constructs a new <code>ChargebackImageStatusRequest</code>.
     * @alias module:model/ChargebackImageStatusRequest
     * @param status {module:model/ChargebackImageStatusRequest.StatusEnum} Status of chargeback image to query.   Length: 6-18   Valid Values/Format: COMPLETED, FAILED, PENDING, UNAVAILABLE AND DOC_NOT_APPLICABLE.   COMPLETED: Image was processed and no further action required.   FAILED: Some failure happened during image process flow, i.e,The image could not be converted, The image is not imported, Image extension not supported etc.   PENDING: The image is pending to be processed.   DOC_NOT_APPLICABLE: The dispute does not require a document.   UNAVAILABLE: The image is unavailable because it is not picked up by mastercom internal processes yet.
     * @param startDate {String} Start Date.   CONDITIONAL: If startDate is provided then endDate is required.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
     * @param endDate {String} End Date.   CONDITIONAL: If endDate is provided then startDate is required.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
     */
    constructor(status, startDate, endDate) { 
        
        ChargebackImageStatusRequest.initialize(this, status, startDate, endDate);
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
     * Constructs a <code>ChargebackImageStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChargebackImageStatusRequest} obj Optional instance to populate.
     * @return {module:model/ChargebackImageStatusRequest} The populated <code>ChargebackImageStatusRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChargebackImageStatusRequest();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
            }
            if (data.hasOwnProperty('ica')) {
                obj['ica'] = ApiClient.convertToType(data['ica'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChargebackImageStatusRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChargebackImageStatusRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ChargebackImageStatusRequest.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['ica'] && !(typeof data['ica'] === 'string' || data['ica'] instanceof String)) {
            throw new Error("Expected the field `ica` to be a primitive type in the JSON string but got " + data['ica']);
        }

        return true;
    }


}

ChargebackImageStatusRequest.RequiredProperties = ["status", "startDate", "endDate"];

/**
 * Status of chargeback image to query.   Length: 6-18   Valid Values/Format: COMPLETED, FAILED, PENDING, UNAVAILABLE AND DOC_NOT_APPLICABLE.   COMPLETED: Image was processed and no further action required.   FAILED: Some failure happened during image process flow, i.e,The image could not be converted, The image is not imported, Image extension not supported etc.   PENDING: The image is pending to be processed.   DOC_NOT_APPLICABLE: The dispute does not require a document.   UNAVAILABLE: The image is unavailable because it is not picked up by mastercom internal processes yet.
 * @member {module:model/ChargebackImageStatusRequest.StatusEnum} status
 */
ChargebackImageStatusRequest.prototype['status'] = undefined;

/**
 * Start Date.   CONDITIONAL: If startDate is provided then endDate is required.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
 * @member {String} startDate
 */
ChargebackImageStatusRequest.prototype['startDate'] = undefined;

/**
 * End Date.   CONDITIONAL: If endDate is provided then startDate is required.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
 * @member {String} endDate
 */
ChargebackImageStatusRequest.prototype['endDate'] = undefined;

/**
 * The ICA value to return the Image Status
 * @member {String} ica
 */
ChargebackImageStatusRequest.prototype['ica'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ChargebackImageStatusRequest['StatusEnum'] = {

    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",

    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED",

    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",

    /**
     * value: "UNAVAILABLE"
     * @const
     */
    "UNAVAILABLE": "UNAVAILABLE",

    /**
     * value: "DOC_NOT_APPLICABLE"
     * @const
     */
    "DOC_NOT_APPLICABLE": "DOC_NOT_APPLICABLE"
};



export default ChargebackImageStatusRequest;
