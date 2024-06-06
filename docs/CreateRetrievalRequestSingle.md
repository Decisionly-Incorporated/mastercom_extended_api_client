# MasterCom.CreateRetrievalRequestSingle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentType** | **String** | The document type field indicates what type of documentation is sent supporting the retrieval.   Length: 1   Valid Values/Format: 2, 4 | 
**replacementAmount** | **String** | Replacement Amount.  The replacement amount should reflect the final amount of the transaction value that should remain applied to the cardholder balance.   Length: 4-12   Valid Values/Format: Numeric | 
**reversalReasonCode** | **String** | MDS dispute reason code for healthcare toÂ createÂ the dispute item.   NOTE:Â Creation of retrieval request is allowed only for reversalReasonCode (healthcare reason code (43)) starting on October 24th, 2021.   Length: 2   Valid Values/Format: 43   | 
**usageCode** | **String** | The usage code indicates the type of retrieval request record processed.   Length: 1   Valid Values/Format: 1, 2, 3, 6, 7 | 
**additionalInformation** | **String** | Any additional information or note may be entered in this field.   Length: 1-38   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&amp;*()_+{}|:\&quot;&lt;&gt;?,./;&#39;[]-&#x3D;) | [optional] 
**controlNumber** | **String** | Control Number.  Used to identify the specific transaction for internal auditing and tracing purposes.   Length: 1-5   Valid Values/Format: Numeric | [optional] 



## Enum: DocumentTypeEnum


* `2` (value: `"2"`)

* `4` (value: `"4"`)





## Enum: UsageCodeEnum


* `1` (value: `"1"`)

* `2` (value: `"2"`)

* `3` (value: `"3"`)

* `6` (value: `"6"`)

* `7` (value: `"7"`)




