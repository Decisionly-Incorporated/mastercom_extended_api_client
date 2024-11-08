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

export class DocumentUpload {
    /**
    * Identifier assigned by Mastercom to a document which is pending processing.
    */
    'documentUploadedId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "documentUploadedId",
            "baseName": "documentUploadedId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DocumentUpload.attributeTypeMap;
    }
}

