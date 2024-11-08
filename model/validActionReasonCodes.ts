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

export class ValidActionReasonCodes {
    /**
    * Reason code allowed per the valid actions.
    */
    'reasonCode'?: string;
    /**
    * Description of reason code.
    */
    'description'?: string;
    /**
    * Indicates if documentation is required for this reason code.
    */
    'documentRequiredIndicator'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reasonCode",
            "baseName": "reasonCode",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "documentRequiredIndicator",
            "baseName": "documentRequiredIndicator",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ValidActionReasonCodes.attributeTypeMap;
    }
}
