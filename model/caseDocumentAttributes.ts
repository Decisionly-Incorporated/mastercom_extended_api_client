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

export class CaseDocumentAttributes {
    /**
    * Identifier assigned by Mastercom to the case.
    */
    'caseId'?: string;
    /**
    * The status of document processing.  When a document has not been attached by the sender or receiver, this parameter returns the following value: UNAVAILABLE.  When documentation is attached by the sender or receiver, valid responses are in the following concatenated format: status_party_processDate_REBUT.    *  *status* is COMPLETED, PENDING, FAILED, UNAVAILABLE.    *  *party* is either SND for a document from the sender or REC for a document from the receiver.    *  *processDate* is in the format MM/DD/YYYY HH:MM:SS AM/PM.    *  *REBUT* is suffixed to the end when the case is rebutted.  For example \'COMPLETED_SND_2/10/2021 8:43:21 AM\' represents a document from the sender. The document has completed processing on 10 February 2021 at 8:43:21 AM. There is no rebuttal for the case. 
    */
    'documentStatus'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "caseId",
            "baseName": "caseId",
            "type": "string"
        },
        {
            "name": "documentStatus",
            "baseName": "documentStatus",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CaseDocumentAttributes.attributeTypeMap;
    }
}

