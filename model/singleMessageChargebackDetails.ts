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
import { AmountDetails } from './amountDetails';

export class SingleMessageChargebackDetails {
    /**
    * Field used by issuers, acquirers, and Mastercard to identify the specific transaction for internal auditing and tracing purposes.
    */
    'controlNumber'?: string;
    /**
    * Type of card program with the account number. This field is mandatory when the Reason Code is 49.
    */
    'program'?: string;
    /**
    * The three-digit Global Security Bulletin number. This field is mandatory when the brand is MD and the reason code is 49. Format is YMM. (For example, the format of the bulletin number of 6 June 2008 would be entered as 806).
    */
    'securityBulletinNumber'?: string;
    /**
    * The No Show Reason associated to the chargeback.
    */
    'noShowReason'?: string;
    /**
    * The No Show Code associated to the chargeback.
    */
    'noShowCode'?: string;
    /**
    * Cancellation number of the reservation. Required for Reason Code 59 when No Show Code = 1.
    */
    'cancelNumber'?: string;
    /**
    * Date on which funds are committed for settlement between an acquirer and issuer.
    */
    'settlementDate'?: string;
    'issuerSettlementAmount'?: AmountDetails;
    /**
    * Indicates if the transaction is a debit or credit to the issuer.
    */
    'issuerSettlementAmountIndicator'?: string;
    'acquirerSettlementAmount'?: AmountDetails;
    /**
    * Indicates if the transaction is a debit or credit to the acquirer.
    */
    'acquirerSettlementAmountIndicator'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "controlNumber",
            "baseName": "controlNumber",
            "type": "string"
        },
        {
            "name": "program",
            "baseName": "program",
            "type": "string"
        },
        {
            "name": "securityBulletinNumber",
            "baseName": "securityBulletinNumber",
            "type": "string"
        },
        {
            "name": "noShowReason",
            "baseName": "noShowReason",
            "type": "string"
        },
        {
            "name": "noShowCode",
            "baseName": "noShowCode",
            "type": "string"
        },
        {
            "name": "cancelNumber",
            "baseName": "cancelNumber",
            "type": "string"
        },
        {
            "name": "settlementDate",
            "baseName": "settlementDate",
            "type": "string"
        },
        {
            "name": "issuerSettlementAmount",
            "baseName": "issuerSettlementAmount",
            "type": "AmountDetails"
        },
        {
            "name": "issuerSettlementAmountIndicator",
            "baseName": "issuerSettlementAmountIndicator",
            "type": "string"
        },
        {
            "name": "acquirerSettlementAmount",
            "baseName": "acquirerSettlementAmount",
            "type": "AmountDetails"
        },
        {
            "name": "acquirerSettlementAmountIndicator",
            "baseName": "acquirerSettlementAmountIndicator",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SingleMessageChargebackDetails.attributeTypeMap;
    }
}

