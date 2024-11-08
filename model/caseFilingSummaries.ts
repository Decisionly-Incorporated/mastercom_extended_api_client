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

/**
* Descriptive case filing summary object.
*/
export class CaseFilingSummaries {
    /**
    * Identifier assigned by Mastercom to the case, obtained from the ```POST /cases/arbitrations``` or ```POST /cases/compliances``` endpoints. 
    */
    'caseId'?: string;
    /**
    * Current status of the case. *Valid Values:* OPEN, CLOSE 
    */
    'caseStatus'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "caseId",
            "baseName": "caseId",
            "type": "string"
        },
        {
            "name": "caseStatus",
            "baseName": "caseStatus",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CaseFilingSummaries.attributeTypeMap;
    }
}
