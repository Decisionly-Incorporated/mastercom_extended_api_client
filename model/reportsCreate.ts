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
import { ReportFilter } from './reportFilter';

export class ReportsCreate {
    /**
    * Identifier assigned by Mastercom to a report definition, obtained from the ```GET /report-definitions``` endpoint.  *Valid Values/Format:* Alphanumeric/Special Char(-) 
    */
    'reportDefinitionId': string;
    /**
    * List of valid report formats.
    */
    'format': ReportsCreate.FormatEnum;
    /**
    * Beginning of search date range.  CONDITIONAL: Required if using endDate. startDate and endDate must not be greater than 90 days from current date. Search range is a maximum of 30 days. 
    */
    'startDate'?: string;
    /**
    * Search date maximum range.  CONDITIONAL: Required if using startDate. startDate and endDate must not be greater than 90 days from current date. Search range is a maximum of 30 days. 
    */
    'endDate'?: string;
    /**
    * Array of filters.
    */
    'filters'?: Array<ReportFilter>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reportDefinitionId",
            "baseName": "reportDefinitionId",
            "type": "string"
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "ReportsCreate.FormatEnum"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<ReportFilter>"
        }    ];

    static getAttributeTypeMap() {
        return ReportsCreate.attributeTypeMap;
    }
}

export namespace ReportsCreate {
    export enum FormatEnum {
        Csv = <any> 'CSV'
    }
}