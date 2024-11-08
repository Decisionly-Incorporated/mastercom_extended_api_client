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

export class ReportsStatus {
    /**
    * Identifier assigned by Mastercom to a report definition.
    */
    'reportDefinitionId'?: string;
    /**
    * Name assigned by Mastercom to a report definition.
    */
    'reportDefinitionName'?: string;
    /**
    * List of valid report formats.
    */
    'format'?: string;
    /**
    * Status of the report. After the system completes generating the report, the reportStatus value is COMPLETED. The report is then available.
    */
    'reportStatus'?: string;
    /**
    * Date and time the report request was created by Mastercom.
    */
    'requestCreatedDateTime'?: string;
    /**
    * Date and time the report was completed by Mastercom.
    */
    'requestCompletedDateTime'?: string;
    /**
    * Identifier assigned by Mastercom to a report once it has finished generating and is ready to be retrieved.
    */
    'reportCompletedId'?: string;
    /**
    * Name assigned by Mastercom to a report once it has finished generating and is ready to be retrieved.
    */
    'reportCompletedName'?: string;
    /**
    * Number of entries in the report file. A value of 0 means no records were found for given criteria.
    */
    'numberOfItems'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reportDefinitionId",
            "baseName": "reportDefinitionId",
            "type": "string"
        },
        {
            "name": "reportDefinitionName",
            "baseName": "reportDefinitionName",
            "type": "string"
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "string"
        },
        {
            "name": "reportStatus",
            "baseName": "reportStatus",
            "type": "string"
        },
        {
            "name": "requestCreatedDateTime",
            "baseName": "requestCreatedDateTime",
            "type": "string"
        },
        {
            "name": "requestCompletedDateTime",
            "baseName": "requestCompletedDateTime",
            "type": "string"
        },
        {
            "name": "reportCompletedId",
            "baseName": "reportCompletedId",
            "type": "string"
        },
        {
            "name": "reportCompletedName",
            "baseName": "reportCompletedName",
            "type": "string"
        },
        {
            "name": "numberOfItems",
            "baseName": "numberOfItems",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ReportsStatus.attributeTypeMap;
    }
}
