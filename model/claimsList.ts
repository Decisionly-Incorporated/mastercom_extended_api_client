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
import { Claim } from './claim';

export class ClaimsList {
    /**
    * List of claim data.
    */
    'claimsData'?: Array<Claim>;
    /**
    * The number of \'claimsData\' items in this batch.
    */
    'count'?: number;
    /**
    * Specifies the number of items to offset the start of the list.
    */
    'offset'?: number;
    /**
    * Number of claimsData items the list should be limited to.
    */
    'limit'?: number;
    /**
    * Total number of items in the response.
    */
    'total'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "claimsData",
            "baseName": "claimsData",
            "type": "Array<Claim>"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ClaimsList.attributeTypeMap;
    }
}
