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
 */

import { RequestFile } from './models';

export class RetrievalsImageStatusResponseStructure {
    /**
    * Claim Id
    */
    'claimId'?: string;
    /**
    * Request Id
    */
    'requestId'?: string;
    /**
    * When retrieving status of an image, the valid values are: COMPLETED, FAILED, PENDING, UNAVAILABLE AND DOC_NOT_APPLICABLE. COMPLETED: Image was processed and no further action required. FAILED: Some failure happened during image process flow, i.e,The image could not be converted, The image is not imported, Image extension not supported etc. PENDING: The image is pending to be processed. DOC_NOT_APPLICABLE: The dispute does not require a document. UNAVAILABLE: The image is unavailable because it is not picked up by mastercom internal processes yet.
    */
    'status'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "claimId",
            "baseName": "claimId",
            "type": "string"
        },
        {
            "name": "requestId",
            "baseName": "requestId",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RetrievalsImageStatusResponseStructure.attributeTypeMap;
    }
}
