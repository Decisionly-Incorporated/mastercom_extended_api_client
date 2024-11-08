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
import { QueueDefinition } from './queueDefinition';

export class QueueDefinitionsList {
    /**
    * The number of \'definitions\' items in this batch.
    */
    'count'?: number;
    /**
    * Specifies the number of items to offset the start of the list.
    */
    'offset'?: number;
    /**
    * Number of queueDefinition items the list should be limited to.
    */
    'limit'?: number;
    /**
    * Total number of items in the response.
    */
    'total'?: number;
    /**
    * List of queue definitions.
    */
    'definitions'?: Array<QueueDefinition>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        },
        {
            "name": "definitions",
            "baseName": "definitions",
            "type": "Array<QueueDefinition>"
        }    ];

    static getAttributeTypeMap() {
        return QueueDefinitionsList.attributeTypeMap;
    }
}

