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
import { CompletedDocumentAttributes } from './completedDocumentAttributes';

export class DocumentAttributes {
    /**
    * Identifier assigned by Mastercom to the dispute event.
    */
    'eventId'?: string;
    /**
    * Identifier assigned by Mastercom to the claim, obtained from the ```POST /claims/searches``` endpoint. 
    */
    'claimId'?: string;
    /**
    * The status of document processing.
    */
    'documentStatus'?: string;
    /**
    * A list of document completed details.
    */
    'completedDocumentsAttributes'?: Array<CompletedDocumentAttributes>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "string"
        },
        {
            "name": "claimId",
            "baseName": "claimId",
            "type": "string"
        },
        {
            "name": "documentStatus",
            "baseName": "documentStatus",
            "type": "string"
        },
        {
            "name": "completedDocumentsAttributes",
            "baseName": "completedDocumentsAttributes",
            "type": "Array<CompletedDocumentAttributes>"
        }    ];

    static getAttributeTypeMap() {
        return DocumentAttributes.attributeTypeMap;
    }
}
