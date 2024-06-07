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

export class FeeDetails {
    /**
    * Merchant Id associated with this fee collection..if any
    */
    'cardAcceptorIdCode'?: string;
    /**
    * Card number when required by the reason code
    */
    'cardNumber'?: string;
    /**
    * Code identifying the country
    */
    'countryCode'?: string;
    /**
    * Currency of the fee
    */
    'currency'?: string;
    /**
    * Date the fee was attached to the claim
    */
    'feeDate'?: string;
    /**
    * Destination member for the fee collection
    */
    'destinationMember'?: string;
    /**
    * Identifier assigned to the fee
    */
    'feeId'?: string;
    /**
    * Amount of the fee.    - When the amount is a credit to the sender of the fee collection, the value of feeAmount is positive.    - When the amount is a debit to the sender of the fee collection, the value of feeAmount is negative.    - When the amount is a credit to the receiver of the fee collection, the value of feeAmount is negative.    - When the amount is a debit to the receiver of the fee collection, the value of feeAmount is positive.    See also the creditSender and creditReceiver parameters.
    */
    'feeAmount'?: string;
    /**
    * Credit the Sender
    */
    'creditSender'?: boolean;
    /**
    * Credit the Receiver
    */
    'creditReceiver'?: boolean;
    /**
    * Message regarding fee
    */
    'message'?: string;
    /**
    * Collection Reason Code
    */
    'reason'?: string;
    /**
    * Fee reject reason.
    */
    'rejectReason'?: string;
    /**
    * Contains card issuer reference data for a specific cardholder transaction. This number must be unique within BIN. It is used to track the chargeback throughout its life cycle
    */
    'chargebackRefNum'?: string;
    /**
    * Reconciliation amount of the fee. Amount will only be retrieved by the receiver side of the fee
    */
    'reconciliationAmount'?: string;
    /**
    * Reconciliation currency of the fee. Currency will only be retrieved by the receiver side of the fee
    */
    'reconciliationCurrency'?: string;
    /**
    * Identifies the merchant\'s category in Japan referred to as the Common Merchant Category Code (CMC). Mastercard uses this value to identify a link to a corresponding Mastercard Assigned ID.
    */
    'japanCommonMerchantCode'?: string;
    /**
    * Provides information about the installment payment option selected by the cardholder at the point of interaction.
    */
    'installmentData'?: string;
    /**
    * Specific to Brazil Flex Card transactions to communicate the product code used for clearing.
    */
    'flexCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardAcceptorIdCode",
            "baseName": "cardAcceptorIdCode",
            "type": "string"
        },
        {
            "name": "cardNumber",
            "baseName": "cardNumber",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "feeDate",
            "baseName": "feeDate",
            "type": "string"
        },
        {
            "name": "destinationMember",
            "baseName": "destinationMember",
            "type": "string"
        },
        {
            "name": "feeId",
            "baseName": "feeId",
            "type": "string"
        },
        {
            "name": "feeAmount",
            "baseName": "feeAmount",
            "type": "string"
        },
        {
            "name": "creditSender",
            "baseName": "creditSender",
            "type": "boolean"
        },
        {
            "name": "creditReceiver",
            "baseName": "creditReceiver",
            "type": "boolean"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "rejectReason",
            "baseName": "rejectReason",
            "type": "string"
        },
        {
            "name": "chargebackRefNum",
            "baseName": "chargebackRefNum",
            "type": "string"
        },
        {
            "name": "reconciliationAmount",
            "baseName": "reconciliationAmount",
            "type": "string"
        },
        {
            "name": "reconciliationCurrency",
            "baseName": "reconciliationCurrency",
            "type": "string"
        },
        {
            "name": "japanCommonMerchantCode",
            "baseName": "japanCommonMerchantCode",
            "type": "string"
        },
        {
            "name": "installmentData",
            "baseName": "installmentData",
            "type": "string"
        },
        {
            "name": "flexCode",
            "baseName": "flexCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FeeDetails.attributeTypeMap;
    }
}
