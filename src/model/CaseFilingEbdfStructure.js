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
import ExpeditedBillingDrfDocumentStructure from './ExpeditedBillingDrfDocumentStructure';
import SmsLinkedCaseFilingDrfDocumentStructure from './SmsLinkedCaseFilingDrfDocumentStructure';

/**
 * The CaseFilingEbdfStructure model module.
 * @module model/CaseFilingEbdfStructure
 * @version v6
 */
class CaseFilingEbdfStructure {
    /**
     * Constructs a new <code>CaseFilingEbdfStructure</code>.
     * When CaseFilingEbdfDocuments is used for automatic EBDF document generation of expeditedBillingDrfDocument  (form name of Dispute Resolution Form - Pre-Compliance/Compliance)  or smsLinkedCaseFilingDrfDocument no other documents should be attached on the call. Attaching documents will lead to call failure.
     * @alias module:model/CaseFilingEbdfStructure
     */
    constructor() { 
        
        CaseFilingEbdfStructure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CaseFilingEbdfStructure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CaseFilingEbdfStructure} obj Optional instance to populate.
     * @return {module:model/CaseFilingEbdfStructure} The populated <code>CaseFilingEbdfStructure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CaseFilingEbdfStructure();

            if (data.hasOwnProperty('expeditedBillingDrfDocument')) {
                obj['expeditedBillingDrfDocument'] = ExpeditedBillingDrfDocumentStructure.constructFromObject(data['expeditedBillingDrfDocument']);
            }
            if (data.hasOwnProperty('smsLinkedCaseFilingDrfDocument')) {
                obj['smsLinkedCaseFilingDrfDocument'] = SmsLinkedCaseFilingDrfDocumentStructure.constructFromObject(data['smsLinkedCaseFilingDrfDocument']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CaseFilingEbdfStructure</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CaseFilingEbdfStructure</code>.
     */
    static validateJSON(data) {
        // validate the optional field `expeditedBillingDrfDocument`
        if (data['expeditedBillingDrfDocument']) { // data not null
          ExpeditedBillingDrfDocumentStructure.validateJSON(data['expeditedBillingDrfDocument']);
        }
        // validate the optional field `smsLinkedCaseFilingDrfDocument`
        if (data['smsLinkedCaseFilingDrfDocument']) { // data not null
          SmsLinkedCaseFilingDrfDocumentStructure.validateJSON(data['smsLinkedCaseFilingDrfDocument']);
        }

        return true;
    }


}



/**
 * @member {module:model/ExpeditedBillingDrfDocumentStructure} expeditedBillingDrfDocument
 */
CaseFilingEbdfStructure.prototype['expeditedBillingDrfDocument'] = undefined;

/**
 * @member {module:model/SmsLinkedCaseFilingDrfDocumentStructure} smsLinkedCaseFilingDrfDocument
 */
CaseFilingEbdfStructure.prototype['smsLinkedCaseFilingDrfDocument'] = undefined;






export default CaseFilingEbdfStructure;
