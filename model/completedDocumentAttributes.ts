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
* Descriptive document object.
*/
export class CompletedDocumentAttributes {
    /**
    * Identifier assigned by Mastercom to a document which has completed processing.
    */
    'documentCompletedId'?: string;
    /**
    * Format of the document.
    */
    'documentCompletedFormat'?: string;
    /**
    * File name of the document.
    */
    'documentCompletedFileName'?: string;
    /**
    * Size of the document in bytes.
    */
    'documentCompletedFileSize'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "documentCompletedId",
            "baseName": "documentCompletedId",
            "type": "string"
        },
        {
            "name": "documentCompletedFormat",
            "baseName": "documentCompletedFormat",
            "type": "string"
        },
        {
            "name": "documentCompletedFileName",
            "baseName": "documentCompletedFileName",
            "type": "string"
        },
        {
            "name": "documentCompletedFileSize",
            "baseName": "documentCompletedFileSize",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CompletedDocumentAttributes.attributeTypeMap;
    }
}

