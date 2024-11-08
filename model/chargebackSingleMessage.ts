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

export class ChargebackSingleMessage {
    /**
    * Field used by issuers, acquirers, and Mastercard to identify the specific transaction for internal auditing and tracing purposes.  *Valid Values/Format:* Numeric 
    */
    'controlNumber'?: string;
    /**
    * The No Show Reason associated to the chargeback. This field is mandatory when the Reason Code is 59.
    */
    'noShowReason'?: ChargebackSingleMessage.NoShowReasonEnum;
    /**
    * The No Show Code associated to the chargeback.  This field is mandatory when Reason Code 59 and noShowReason is RS_5_GUARANTEED_RESERVATION_SERVICE.
    */
    'noShowCode'?: ChargebackSingleMessage.NoShowCodeEnum;
    /**
    * Type of card program with the account number. This field is mandatory when the Reason Code is 49.  *Valid Values/Format:* Uppercase Alpha 
    */
    'program'?: string;
    /**
    * The three-digit Global Security Bulletin number. This field is mandatory when the brand is MD and the reason code is 49. Format is YMM. (For example, the format of the bulletin number of 6 June 2008 would be entered as 806).  *Valid Values/Format:* Numeric (YMM) 
    */
    'securityBulletinNumber'?: string;
    /**
    * Cancellation number of the reservation. This field is mandatory when Reason Code 59 and No Show Code = 1.  *Valid Values/Format:* Uppercase alphanumeric 
    */
    'cancelNumber'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "controlNumber",
            "baseName": "controlNumber",
            "type": "string"
        },
        {
            "name": "noShowReason",
            "baseName": "noShowReason",
            "type": "ChargebackSingleMessage.NoShowReasonEnum"
        },
        {
            "name": "noShowCode",
            "baseName": "noShowCode",
            "type": "ChargebackSingleMessage.NoShowCodeEnum"
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
            "name": "cancelNumber",
            "baseName": "cancelNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ChargebackSingleMessage.attributeTypeMap;
    }
}

export namespace ChargebackSingleMessage {
    export enum NoShowReasonEnum {
        _3AtmDispute = <any> 'RS_3_ATM_DISPUTE',
        _5GuaranteedReservationService = <any> 'RS_5_GUARANTEED_RESERVATION_SERVICE',
        _7AddendumDispute = <any> 'RS_7_ADDENDUM_DISPUTE'
    }
    export enum NoShowCodeEnum {
        _1CardholderCanceledReservationHasValidCancellationNumber = <any> 'NS_1_CARDHOLDER_CANCELED_RESERVATION_HAS_VALID_CANCELLATION_NUMBER',
        _2CardholderCanceledReservationNoValidCancellationNumber = <any> 'NS_2_CARDHOLDER_CANCELED_RESERVATION_NO_VALID_CANCELLATION_NUMBER',
        _3CardholderUsedTheAccommodations = <any> 'NS_3_CARDHOLDER_USED_THE_ACCOMMODATIONS',
        _4CardAcceptorProvidedAlternateAccommodations = <any> 'NS_4_CARD_ACCEPTOR_PROVIDED_ALTERNATE_ACCOMMODATIONS',
        _5NoShowChargeDifferedFromQuotedRate = <any> 'NS_5_NO_SHOW_CHARGE_DIFFERED_FROM_QUOTED_RATE',
        _6CardAcceptorDidNotAdviseOfFeeCharge = <any> 'NS_6_CARD_ACCEPTOR_DID_NOT_ADVISE_OF_FEE_CHARGE'
    }
}