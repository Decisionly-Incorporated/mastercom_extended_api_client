# MasterCom.UpdateClaimRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**openClaimDueDate** | **String** | The due date for opening the claim.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd) | [optional] 
**action** | **String** | Action to perform on claim.   Length: 5-6   Valid Values/Format: REOPEN, CLOSE | 
**closeClaimReasonCode** | **String** | Reason code for closing the claim.   Length: 2   Valid Values/Format: 10, 20, 30, 40 | [optional] 



## Enum: ActionEnum


* `REOPEN` (value: `"REOPEN"`)

* `CLOSE` (value: `"CLOSE"`)





## Enum: CloseClaimReasonCodeEnum


* `10` (value: `"10"`)

* `20` (value: `"20"`)

* `30` (value: `"30"`)

* `40` (value: `"40"`)




