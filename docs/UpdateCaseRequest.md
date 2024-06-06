# MasterCom.UpdateCaseRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | Action to be performed on case.   CONDITIONAL: ESCALATE is applicable on pre compliance and pre arbitration cases.   Length: 5-8   Valid Values/Format: ACCEPT, REJECT, REBUT, ESCALATE, WITHDRAW, DOC_RETRY. | 
**fileAttachment** | [**DocumentStructure**](DocumentStructure.md) |  | [optional] 
**memo** | **String** | Memo pertaining to the case.   CONDITIONAL:  This field is mandatory and applicable if the action code is ACCEPT, REJECT, REBUT or DOC_RETRY.   Length: 0-100   Valid Values/Format: Alphanumeric | [optional] 
**rebuttedAs** | **String** | Rebutted as Sender or Receiver.   CONDITIONAL: This field is mandatory and applicable if the action code is REBUT.   Length: 3   Valid Values/Format: SND,REC | [optional] 
**docRetryAs** | **String** | Uploading document as Sender or Receiver.   CONDITIONAL: This field is mandatory and applicable, if the action code is DOC_RETRY and not applicable for any Actions.   Length: 3   Valid Values/Format: SND,REC | [optional] 



## Enum: ActionEnum


* `ACCEPT` (value: `"ACCEPT"`)

* `REJECT` (value: `"REJECT"`)

* `REBUT` (value: `"REBUT"`)

* `ESCALATE` (value: `"ESCALATE"`)

* `WITHDRAW` (value: `"WITHDRAW"`)

* `DOC_RETRY` (value: `"DOC_RETRY"`)





## Enum: RebuttedAsEnum


* `SND` (value: `"SND"`)

* `REC` (value: `"REC"`)





## Enum: DocRetryAsEnum


* `SND` (value: `"SND"`)

* `REC` (value: `"REC"`)




