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

export class CreateFeeRequestSingle {
    /**
    * Acquirer ICA number that is taken from the transaction and supplied by Single Message Transaction Manager.   Length: 1-6   Valid Values/Format: Numeric
    */
    'acquirerCustomerId': string;
    /**
    * Condition Indicator identifies the Message Reason Code (MRC) for a chargeback..   Length: 1   Valid Values/Format: A, B, C, D
    */
    'conditionIndicator': CreateFeeRequestSingle.ConditionIndicatorEnum;
    /**
    * Allows the issuer to identify the progressive handling fee message being created. The control number must be 20 positions in length and right-justified, zero-filled if less.   Length: 1-20   Valid Values/Format: Alphanumeric
    */
    'controlNumber': string;
    /**
    * Determines whether the progressive handling fee is being applied to a First Chargeback.   Length: 3   Valid Values/Format: 700
    */
    'functionCode': CreateFeeRequestSingle.FunctionCodeEnum;
    /**
    * Any monetary amount can be entered in this field. There is a USD 25 limit for the First Chargeback (Reason Code 22).   Length: 4-9   Valid Values/Format: Numeric
    */
    'handlingFee': string;
    /**
    * Reason code for applying handling fee.   Length: 2   Valid Values/Format: 22 - First Chargeback Handling Fee
    */
    'reasonCode': CreateFeeRequestSingle.ReasonCodeEnum;
    /**
    * This is the date the authorization request was declined. This field is required when conditionIndicator is A.   Length: 6   Valid Values/Format: Date(MMDDYY)
    */
    'declineDate'?: string;
    /**
    * Issuer ICA number that is taken from the transaction and supplied by Single Message Transaction Manager.   Length: 1-6   Valid Values/Format: Numeric
    */
    'issuerCustomerID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acquirerCustomerId",
            "baseName": "acquirerCustomerId",
            "type": "string"
        },
        {
            "name": "conditionIndicator",
            "baseName": "conditionIndicator",
            "type": "CreateFeeRequestSingle.ConditionIndicatorEnum"
        },
        {
            "name": "controlNumber",
            "baseName": "controlNumber",
            "type": "string"
        },
        {
            "name": "functionCode",
            "baseName": "functionCode",
            "type": "CreateFeeRequestSingle.FunctionCodeEnum"
        },
        {
            "name": "handlingFee",
            "baseName": "handlingFee",
            "type": "string"
        },
        {
            "name": "reasonCode",
            "baseName": "reasonCode",
            "type": "CreateFeeRequestSingle.ReasonCodeEnum"
        },
        {
            "name": "declineDate",
            "baseName": "declineDate",
            "type": "string"
        },
        {
            "name": "issuerCustomerID",
            "baseName": "issuerCustomerID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateFeeRequestSingle.attributeTypeMap;
    }
}

export namespace CreateFeeRequestSingle {
    export enum ConditionIndicatorEnum {
        A = <any> 'A',
        B = <any> 'B',
        C = <any> 'C',
        D = <any> 'D'
    }
    export enum FunctionCodeEnum {
        _700 = <any> '700'
    }
    export enum ReasonCodeEnum {
        _22 = <any> '22'
    }
}