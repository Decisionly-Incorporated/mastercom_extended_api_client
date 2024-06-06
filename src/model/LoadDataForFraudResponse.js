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
import FraudAcctDeviceTypesNameValueDetail from './FraudAcctDeviceTypesNameValueDetail';
import FraudAcctStatusesNameValueDetail from './FraudAcctStatusesNameValueDetail';
import FraudCardValidCodesNameValueDetail from './FraudCardValidCodesNameValueDetail';
import FraudSubTypesNameValueDetail from './FraudSubTypesNameValueDetail';

/**
 * The LoadDataForFraudResponse model module.
 * @module model/LoadDataForFraudResponse
 * @version v6
 */
class LoadDataForFraudResponse {
    /**
     * Constructs a new <code>LoadDataForFraudResponse</code>.
     * @alias module:model/LoadDataForFraudResponse
     */
    constructor() { 
        
        LoadDataForFraudResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoadDataForFraudResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoadDataForFraudResponse} obj Optional instance to populate.
     * @return {module:model/LoadDataForFraudResponse} The populated <code>LoadDataForFraudResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoadDataForFraudResponse();

            if (data.hasOwnProperty('acctDeviceTypes')) {
                obj['acctDeviceTypes'] = ApiClient.convertToType(data['acctDeviceTypes'], [FraudAcctDeviceTypesNameValueDetail]);
            }
            if (data.hasOwnProperty('acctStatuses')) {
                obj['acctStatuses'] = ApiClient.convertToType(data['acctStatuses'], [FraudAcctStatusesNameValueDetail]);
            }
            if (data.hasOwnProperty('cardValidCodes')) {
                obj['cardValidCodes'] = ApiClient.convertToType(data['cardValidCodes'], [FraudCardValidCodesNameValueDetail]);
            }
            if (data.hasOwnProperty('subTypes')) {
                obj['subTypes'] = ApiClient.convertToType(data['subTypes'], [FraudSubTypesNameValueDetail]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LoadDataForFraudResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LoadDataForFraudResponse</code>.
     */
    static validateJSON(data) {
        if (data['acctDeviceTypes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['acctDeviceTypes'])) {
                throw new Error("Expected the field `acctDeviceTypes` to be an array in the JSON data but got " + data['acctDeviceTypes']);
            }
            // validate the optional field `acctDeviceTypes` (array)
            for (const item of data['acctDeviceTypes']) {
                FraudAcctDeviceTypesNameValueDetail.validateJSON(item);
            };
        }
        if (data['acctStatuses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['acctStatuses'])) {
                throw new Error("Expected the field `acctStatuses` to be an array in the JSON data but got " + data['acctStatuses']);
            }
            // validate the optional field `acctStatuses` (array)
            for (const item of data['acctStatuses']) {
                FraudAcctStatusesNameValueDetail.validateJSON(item);
            };
        }
        if (data['cardValidCodes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['cardValidCodes'])) {
                throw new Error("Expected the field `cardValidCodes` to be an array in the JSON data but got " + data['cardValidCodes']);
            }
            // validate the optional field `cardValidCodes` (array)
            for (const item of data['cardValidCodes']) {
                FraudCardValidCodesNameValueDetail.validateJSON(item);
            };
        }
        if (data['subTypes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subTypes'])) {
                throw new Error("Expected the field `subTypes` to be an array in the JSON data but got " + data['subTypes']);
            }
            // validate the optional field `subTypes` (array)
            for (const item of data['subTypes']) {
                FraudSubTypesNameValueDetail.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * List of valid account device types
 * @member {Array.<module:model/FraudAcctDeviceTypesNameValueDetail>} acctDeviceTypes
 */
LoadDataForFraudResponse.prototype['acctDeviceTypes'] = undefined;

/**
 * List of valid account statuses
 * @member {Array.<module:model/FraudAcctStatusesNameValueDetail>} acctStatuses
 */
LoadDataForFraudResponse.prototype['acctStatuses'] = undefined;

/**
 * List of valid card valid codes
 * @member {Array.<module:model/FraudCardValidCodesNameValueDetail>} cardValidCodes
 */
LoadDataForFraudResponse.prototype['cardValidCodes'] = undefined;

/**
 * List of valid sub types
 * @member {Array.<module:model/FraudSubTypesNameValueDetail>} subTypes
 */
LoadDataForFraudResponse.prototype['subTypes'] = undefined;






export default LoadDataForFraudResponse;

