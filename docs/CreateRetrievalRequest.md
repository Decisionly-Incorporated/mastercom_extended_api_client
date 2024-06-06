# MasterCom.CreateRetrievalRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retrievalRequestReason** | **String** | Retrieval Request Reason Codes.   NOTE: Below retrievalRequestReason code will be accepted for creation of retrieval request starting on October 24th, 2021.&lt;br&gt;  6343 - IIAS Audit (for healthcare transactions only)   Length: 1-4   Valid Values/Format: 6343 - IIAS Audit (for healthcare transactions only) | 
**docNeeded** | **String** | Documentation Needed Indicator.   Length: 1   Valid Values/Format: 2 - Copy or image (photocopy, microfilm, fax) of original document, 4 - Substitute draft | 
**instructionsForHealthcare** | **String** | Instructions for Healthcare.   CONDITIONAL: Required when retrievalRequestReason &#x3D; 6343.   Length: 16-200   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&amp;*()_+{}|:\&quot;&lt;&gt;?,./;&#39;[]-&#x3D;) | [optional] 



## Enum: RetrievalRequestReasonEnum


* `6343` (value: `"6343"`)





## Enum: DocNeededEnum


* `2` (value: `"2"`)

* `4` (value: `"4"`)




