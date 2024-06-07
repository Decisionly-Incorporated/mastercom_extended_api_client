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

export class InstallmentParameters {
    /**
    * Issuer and merchant grace period option
    */
    'deferredGracePeriodFlag'?: string;
    /**
    * Number of months of the deferred period selected by the cardholder
    */
    'deferredGracePeriodMonths'?: string;
    /**
    * Indicates the Issuer/Acquirer agreed promotion installment plan was selected by the cardholder to complete the transaction
    */
    'issuerPromotion'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deferredGracePeriodFlag",
            "baseName": "deferredGracePeriodFlag",
            "type": "string"
        },
        {
            "name": "deferredGracePeriodMonths",
            "baseName": "deferredGracePeriodMonths",
            "type": "string"
        },
        {
            "name": "issuerPromotion",
            "baseName": "issuerPromotion",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InstallmentParameters.attributeTypeMap;
    }
}
