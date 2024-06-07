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

export class SingleMessageSummary {
    /**
    * Contains the acquirers reference number.
    */
    'acquirerReferenceNumber'?: string;
    /**
    * Used to inform processors an action has been taken on the advice messages. 
    */
    'adviceReasonCode'?: string;
    /**
    * The brand of service or program.  Acceptable values...MC - Mastercard, CI - CirrusÂ®, MS - MaestroÂ®, MD - Debit Mastercard Â®card, PL - PlusÂ®, PV(L) - Private Label, VI - VISA
    */
    'brand'?: string;
    /**
    * The code defining the currency of the transaction as it was submitted to the Single Message System. The Single Message System uses it to specify the currency used in localRequestedAmount
    */
    'localCurrencyCode'?: string;
    /**
    * The amount of funds requested by the cardholder in the local currency of the acquirer or source location of the transaction.
    */
    'localRequestedAmount'?: string;
    /**
    * For POS acquirers this is the name of the merchant owning the POS terminal. For ATM acquirers this the ATM owning institution name.
    */
    'merchantName'?: string;
    /**
    * Card Acceptor Business Code. Identifies the card acceptorâ€™s primary business.
    */
    'merchantType'?: string;
    /**
    * Series of digits used to identify a customer account or relationship.
    */
    'primaryAccountNumber'?: string;
    /**
    * Series of digits used to describe the effect of a transaction on the customer account and the type of accounts affected.
    */
    'processingCode'?: string;
    /**
    * This field displays the disposition of a message.
    */
    'responseCode'?: string;
    /**
    * M = The decline was initiated by the member/issuer, S = The decline was initiated by the Single Message System.
    */
    'responseSource'?: string;
    /**
    * Date Mastercard uses to group the transactions for reporting and for subsequent settlement: Format: MMDDYY
    */
    'settlementDate'?: string;
    /**
    * Describes a unique transaction identification number generated (or assigned) by the Single Message System
    */
    'switchSerialNumber'?: string;
    /**
    * Date and time Mastercard routes the transaction to the issuer  (MMDDHHMMSS)
    */
    'switchDateTime'?: string;
    /**
    * Unique identifier assigned to each transaction by the originator of the message
    */
    'trace'?: string;
    /**
    * Tran Type
    */
    'tranType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acquirerReferenceNumber",
            "baseName": "acquirerReferenceNumber",
            "type": "string"
        },
        {
            "name": "adviceReasonCode",
            "baseName": "adviceReasonCode",
            "type": "string"
        },
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "localCurrencyCode",
            "baseName": "localCurrencyCode",
            "type": "string"
        },
        {
            "name": "localRequestedAmount",
            "baseName": "localRequestedAmount",
            "type": "string"
        },
        {
            "name": "merchantName",
            "baseName": "merchantName",
            "type": "string"
        },
        {
            "name": "merchantType",
            "baseName": "merchantType",
            "type": "string"
        },
        {
            "name": "primaryAccountNumber",
            "baseName": "primaryAccountNumber",
            "type": "string"
        },
        {
            "name": "processingCode",
            "baseName": "processingCode",
            "type": "string"
        },
        {
            "name": "responseCode",
            "baseName": "responseCode",
            "type": "string"
        },
        {
            "name": "responseSource",
            "baseName": "responseSource",
            "type": "string"
        },
        {
            "name": "settlementDate",
            "baseName": "settlementDate",
            "type": "string"
        },
        {
            "name": "switchSerialNumber",
            "baseName": "switchSerialNumber",
            "type": "string"
        },
        {
            "name": "switchDateTime",
            "baseName": "switchDateTime",
            "type": "string"
        },
        {
            "name": "trace",
            "baseName": "trace",
            "type": "string"
        },
        {
            "name": "tranType",
            "baseName": "tranType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SingleMessageSummary.attributeTypeMap;
    }
}
