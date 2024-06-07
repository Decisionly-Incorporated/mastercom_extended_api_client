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

export class Queue {
    /**
    * Queue Name.  This is used as input in other apis
    */
    'queueName'?: string;
    /**
    * This describes the contents of the queue
    */
    'queueDescription'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "queueName",
            "baseName": "queueName",
            "type": "string"
        },
        {
            "name": "queueDescription",
            "baseName": "queueDescription",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Queue.attributeTypeMap;
    }
}
