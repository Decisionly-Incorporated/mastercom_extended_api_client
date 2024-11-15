/**
 * Mastercom Extended API
 * The Mastercom Extended API consists of endpoints used by issuers and acquirers to manage Single Message System disputes.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: apisupport@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ArbitrationCaseCreate {
    /**
    * Identifier assigned by Mastercom Claims Manager or Mastercom Extended to the claim.  Mastercom Extended claimId can be obtained from the ```POST /claims/searches``` endpoint. 
    */
    'claimId': string;
    /**
    * Identifier assigned by Mastercom to a group of associated events, obtained from the ```GET /claims/{claim_id}``` endpoint.
    */
    'groupId'?: string;
    /**
    * Identifier assigned by Mastercom to a document which is pending processing, obtained from the ```POST /documents``` endpoint. 
    */
    'documentUploadedId'?: string;
    /**
    * Field used by customers to identify the specific case for internal auditing and tracing purposes.  *Valid Values/Format:* Alpha, numeric, and special characters. 
    */
    'customerFilingNumber'?: string;
    /**
    * Amount disputed in the case, written without a decimal. Includes the exponent.  *Valid Values/Format:* Numeric. 
    */
    'caseDisputeAmount': string;
    /**
    * Additional information or note may be entered in this field. Credentials, card numbers, and similar sensitive information such as PCI or PII data should never be entered in this field.  *Valid Values/Format:* Alpha, numeric, and special characters. 
    */
    'memo': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "claimId",
            "baseName": "claimId",
            "type": "string"
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string"
        },
        {
            "name": "documentUploadedId",
            "baseName": "documentUploadedId",
            "type": "string"
        },
        {
            "name": "customerFilingNumber",
            "baseName": "customerFilingNumber",
            "type": "string"
        },
        {
            "name": "caseDisputeAmount",
            "baseName": "caseDisputeAmount",
            "type": "string"
        },
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ArbitrationCaseCreate.attributeTypeMap;
    }
}

