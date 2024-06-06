# MasterCom.CreateFeeRequestSingle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquirerCustomerId** | **String** | Acquirer ICA number that is taken from the transaction and supplied by Single Message Transaction Manager.   Length: 1-6   Valid Values/Format: Numeric | 
**conditionIndicator** | **String** | Condition Indicator identifies the Message Reason Code (MRC) for a chargeback..   Length: 1   Valid Values/Format: A, B, C, D | 
**controlNumber** | **String** | Allows the issuer to identify the progressive handling fee message being created. The control number must be 20 positions in length and right-justified, zero-filled if less.   Length: 1-20   Valid Values/Format: Alphanumeric | 
**functionCode** | **String** | Determines whether the progressive handling fee is being applied to a First Chargeback.   Length: 3   Valid Values/Format: 700 | 
**handlingFee** | **String** | Any monetary amount can be entered in this field. There is a USD 25 limit for the First Chargeback (Reason Code 22).   Length: 4-9   Valid Values/Format: Numeric | 
**reasonCode** | **String** | Reason code for applying handling fee.   Length: 2   Valid Values/Format: 22 - First Chargeback Handling Fee | 
**declineDate** | **String** | This is the date the authorization request was declined. This field is required when conditionIndicator is A.   Length: 6   Valid Values/Format: Date(MMDDYY) | [optional] 
**issuerCustomerID** | **String** | Issuer ICA number that is taken from the transaction and supplied by Single Message Transaction Manager.   Length: 1-6   Valid Values/Format: Numeric | [optional] 



## Enum: ConditionIndicatorEnum


* `A` (value: `"A"`)

* `B` (value: `"B"`)

* `C` (value: `"C"`)

* `D` (value: `"D"`)





## Enum: FunctionCodeEnum


* `700` (value: `"700"`)





## Enum: ReasonCodeEnum


* `22` (value: `"22"`)




