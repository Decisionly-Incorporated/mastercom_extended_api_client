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

export class ReportSearch {
    /**
    * Identifier assigned by Mastercom to a report definition, obtained from the ```GET /report-definitions``` endpoint.  CONDITIONAL: If reportDefinitionIds is provided, then providing an id in the list is required. 
    */
    'reportDefinitionIds': Array<string>;
    /**
    * Beginning of search date and time range.  CONDITIONAL: Required if using endDate. startDate and endDate must not be greater than 90 days from current date. Search range is a maximum of 30 days. 
    */
    'startDateTime'?: string;
    /**
    * Search date maximum range.  CONDITIONAL: Required if using startDate. startDate and endDate must not be greater than 90 days from current date. Search range is a maximum of 30 days. 
    */
    'endDateTime'?: string;
    /**
    * Status of the report. After the system completes generating the report, the reportStatus value is COMPLETED. The report is then available.
    */
    'reportStatus'?: ReportSearch.ReportStatusEnum;
    /**
    * Number of reportRequest items the list should be limited to.
    */
    'limit'?: number = 25;
    /**
    * Specifies the number of items to offset the start of the list.
    */
    'offset'?: number = 0;
    /**
    * Key by which the items are sorted.
    */
    'sortKey'?: ReportSearch.SortKeyEnum;
    /**
    * Order by which the items are sorted.
    */
    'sortOrder'?: ReportSearch.SortOrderEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reportDefinitionIds",
            "baseName": "reportDefinitionIds",
            "type": "Array<string>"
        },
        {
            "name": "startDateTime",
            "baseName": "startDateTime",
            "type": "string"
        },
        {
            "name": "endDateTime",
            "baseName": "endDateTime",
            "type": "string"
        },
        {
            "name": "reportStatus",
            "baseName": "reportStatus",
            "type": "ReportSearch.ReportStatusEnum"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        },
        {
            "name": "sortKey",
            "baseName": "sortKey",
            "type": "ReportSearch.SortKeyEnum"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "ReportSearch.SortOrderEnum"
        }    ];

    static getAttributeTypeMap() {
        return ReportSearch.attributeTypeMap;
    }
}

export namespace ReportSearch {
    export enum ReportStatusEnum {
        Pending = <any> 'PENDING',
        Processing = <any> 'PROCESSING',
        Completed = <any> 'COMPLETED',
        Failure = <any> 'FAILURE'
    }
    export enum SortKeyEnum {
        CreatedDateTime = <any> 'REQUEST_CREATED_DATE_TIME',
        CompletedDateTime = <any> 'REQUEST_COMPLETED_DATE_TIME'
    }
    export enum SortOrderEnum {
        Asc = <any> 'ASC',
        Desc = <any> 'DESC'
    }
}