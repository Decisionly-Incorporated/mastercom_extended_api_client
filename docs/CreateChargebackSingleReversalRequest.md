# MasterCom.CreateChargebackSingleReversalRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replacementAmount** | **String** | Replacement Amount.  The replacement amount should reflect the final amount of the transaction value that should remain applied to the cardholder balance.   Length: 3-12   Valid Values/Format: Numeric | 
**reversalReasonCode** | **String** | Dispute reason code for reversing the chargeback item.   Length: 2   Valid Values/Format: 03 / 82 | 
**controlNumber** | **String** | Control Number.  Discretionary data input field used by issuers, acquirers, and  Mastercard.   Length: 1-5   Valid Values/Format: Numeric | [optional] 



## Enum: ReversalReasonCodeEnum


* `03` (value: `"03"`)

* `82` (value: `"82"`)




