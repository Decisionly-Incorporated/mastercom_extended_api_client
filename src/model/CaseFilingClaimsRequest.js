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
import CaseFilingIdSourceRequest from './CaseFilingIdSourceRequest';

/**
 * The CaseFilingClaimsRequest model module.
 * @module model/CaseFilingClaimsRequest
 * @version v6
 */
class CaseFilingClaimsRequest {
    /**
     * Constructs a new <code>CaseFilingClaimsRequest</code>.
     * @alias module:model/CaseFilingClaimsRequest
     * @param caseFilingList {Array.<module:model/CaseFilingIdSourceRequest>} A list of case filing ids, maximum list size is 2000
     */
    constructor(caseFilingList) { 
        
        CaseFilingClaimsRequest.initialize(this, caseFilingList);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, caseFilingList) { 
        obj['caseFilingList'] = caseFilingList;
    }

    /**
     * Constructs a <code>CaseFilingClaimsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CaseFilingClaimsRequest} obj Optional instance to populate.
     * @return {module:model/CaseFilingClaimsRequest} The populated <code>CaseFilingClaimsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CaseFilingClaimsRequest();

            if (data.hasOwnProperty('caseFilingList')) {
                obj['caseFilingList'] = ApiClient.convertToType(data['caseFilingList'], [CaseFilingIdSourceRequest]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CaseFilingClaimsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CaseFilingClaimsRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CaseFilingClaimsRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['caseFilingList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['caseFilingList'])) {
                throw new Error("Expected the field `caseFilingList` to be an array in the JSON data but got " + data['caseFilingList']);
            }
            // validate the optional field `caseFilingList` (array)
            for (const item of data['caseFilingList']) {
                CaseFilingIdSourceRequest.validateJSON(item);
            };
        }

        return true;
    }


}

CaseFilingClaimsRequest.RequiredProperties = ["caseFilingList"];

/**
 * A list of case filing ids, maximum list size is 2000
 * @member {Array.<module:model/CaseFilingIdSourceRequest>} caseFilingList
 */
CaseFilingClaimsRequest.prototype['caseFilingList'] = undefined;






export default CaseFilingClaimsRequest;
