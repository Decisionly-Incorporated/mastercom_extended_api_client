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
import { QueueField } from './queueField';

/**
* List of queue definitions.
*/
export class QueueDefinition {
    /**
    * Identifier assigned by Mastercom to the queue.
    */
    'queueId'?: string;
    /**
    * Name of the queue.
    */
    'queueName'?: string;
    /**
    * Description of queue.
    */
    'description'?: string;
    /**
    * Type of queue.
    */
    'queueType'?: string;
    /**
    * Field by which the items are sorted.
    */
    'sortKey'?: string;
    /**
    * Order by which the items are sorted.
    */
    'sortOrder'?: string;
    /**
    * The list of fields that can be fetched from this queue.
    */
    'fields'?: Array<QueueField>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "queueId",
            "baseName": "queueId",
            "type": "string"
        },
        {
            "name": "queueName",
            "baseName": "queueName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "queueType",
            "baseName": "queueType",
            "type": "string"
        },
        {
            "name": "sortKey",
            "baseName": "sortKey",
            "type": "string"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "string"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<QueueField>"
        }    ];

    static getAttributeTypeMap() {
        return QueueDefinition.attributeTypeMap;
    }
}

