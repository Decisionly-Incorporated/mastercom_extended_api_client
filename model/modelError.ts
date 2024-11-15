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
* A single error
*/
export class ModelError {
    /**
    * The error source
    */
    'source'?: string;
    /**
    * The error reason code
    */
    'reasonCode'?: string;
    /**
    * The error description
    */
    'description'?: string;
    /**
    * Is the error recoverable
    */
    'recoverable'?: boolean;
    /**
    * The error details
    */
    'details'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "source",
            "baseName": "Source",
            "type": "string"
        },
        {
            "name": "reasonCode",
            "baseName": "ReasonCode",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "recoverable",
            "baseName": "Recoverable",
            "type": "boolean"
        },
        {
            "name": "details",
            "baseName": "Details",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }
}

