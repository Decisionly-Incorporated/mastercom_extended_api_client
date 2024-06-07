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

export class ChargebackMarkProcessedResponseStructure {
    /**
    * Chargeback Id marked as processed
    */
    'chargebackId'?: string;
    /**
    * The status of the chargeback processing.
    */
    'status'?: string;
    /**
    * The failure reason of the chargeback processing
    */
    'failureReason'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "chargebackId",
            "baseName": "chargebackId",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "failureReason",
            "baseName": "failureReason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ChargebackMarkProcessedResponseStructure.attributeTypeMap;
    }
}
