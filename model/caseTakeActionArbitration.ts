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

export class CaseTakeActionArbitration {
    /**
    *  Action taken by the customer on the case.    For pre-arbitration cases:    *  Sender (issuer) actions: ESCALATE, WITHDRAW    *  Receiver (acquirer) actions: ACCEPT, REJECT    For arbitration cases:    *  Sender (issuer) actions: WITHDRAW    *  Receiver (acquirer) actions: ACCEPT 
    */
    'action': CaseTakeActionArbitration.ActionEnum;
    /**
    * Identifier assigned by Mastercom to a document which is pending processing, obtained from the ```POST /documents``` endpoint. 
    */
    'documentUploadedId'?: string;
    /**
    * Additional information or note may be entered in this field. Credentials, card numbers, and similar sensitive information such as PCI or PII data should never be entered in this field.  CONDITIONAL: Required if the action is ACCEPT, REJECT.  *Valid Values/Format:* Alpha, numeric, and special characters. 
    */
    'memo'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "CaseTakeActionArbitration.ActionEnum"
        },
        {
            "name": "documentUploadedId",
            "baseName": "documentUploadedId",
            "type": "string"
        },
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CaseTakeActionArbitration.attributeTypeMap;
    }
}

export namespace CaseTakeActionArbitration {
    export enum ActionEnum {
        Accept = <any> 'ACCEPT',
        Escalate = <any> 'ESCALATE',
        Reject = <any> 'REJECT',
        Withdraw = <any> 'WITHDRAW'
    }
}
