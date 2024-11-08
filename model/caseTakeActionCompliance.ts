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

export class CaseTakeActionCompliance {
    /**
    *  Action taken by the customer on the case.    For pre-compliance cases:    *  Sender actions: ESCALATE, WITHDRAW    *  Receiver actions: ACCEPT, REJECT    For compliance cases:    *  Sender actions: REBUT, WITHDRAW    *  Receiver actions: ACCEPT, REBUT 
    */
    'action': CaseTakeActionCompliance.ActionEnum;
    /**
    * Identifier of the party rebutting the case.  CONDITIONAL: This is a required field if the action is REBUT. 
    */
    'rebuttalParty'?: CaseTakeActionCompliance.RebuttalPartyEnum;
    /**
    * Identifier assigned by Mastercom to a document which is pending processing, obtained from the ```POST /documents``` endpoint. 
    */
    'documentUploadedId'?: string;
    /**
    * Additional information or note may be entered in this field. Credentials, card numbers, and similar sensitive information such as PCI or PII data should never be entered in this field.  CONDITIONAL: Required if the action is ACCEPT, REJECT or REBUT.  *Valid Values/Format:* Alpha, numeric, and special characters. 
    */
    'memo'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "CaseTakeActionCompliance.ActionEnum"
        },
        {
            "name": "rebuttalParty",
            "baseName": "rebuttalParty",
            "type": "CaseTakeActionCompliance.RebuttalPartyEnum"
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
        return CaseTakeActionCompliance.attributeTypeMap;
    }
}

export namespace CaseTakeActionCompliance {
    export enum ActionEnum {
        Accept = <any> 'ACCEPT',
        Escalate = <any> 'ESCALATE',
        Rebut = <any> 'REBUT',
        Reject = <any> 'REJECT',
        Withdraw = <any> 'WITHDRAW'
    }
    export enum RebuttalPartyEnum {
        Sender = <any> 'SENDER',
        Receiver = <any> 'RECEIVER'
    }
}