# MasterCom.FraudDrfDocumentStructure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numberOfItems** | **String** | Numeric value of number of transactions being disputed.   Length: 0-19   Valid Values/Format: Numeric | [optional] 
**types** | **String** | Enter any of the valid values comma separated.   Length: 7-12   Valid Values/Format: CARD_CLOSED, REPORT_SAFE, CAPTURE_CARD, LOST_STOLEN, COUNTERFEIT, RC_4837, RC_4840 | [optional] 
**additionalInformation** | **String** | Additional information, if needed   Length: 0-1000   Valid Values/Format: Alphanumeric / Special Char (~!@#$%^&amp;*()_+{}|:\&quot;&lt;&gt;?,./;&#39;[]-&#x3D;) | [optional] 
**chargebackRepresentative** | **String** | Customer Service/Chargeback Representative   Length: 0-25   Valid Values/Format: Alphanumeric / Special Char (~!@#$%^&amp;*()_+{}|:\&quot;&lt;&gt;?,./;&#39;[]-&#x3D;) | [optional] 
**cardIssuerRegion** | **String** | The card issuer region.   Length: 2-6   Valid Values/Format: AP, Europe, NAM, LAC, MEA | [optional] 
**cardholderVerificationMethod** | [**CardholderVerificationMethodStructure**](CardholderVerificationMethodStructure.md) |  | [optional] 



## Enum: CardIssuerRegionEnum


* `AP` (value: `"AP"`)

* `Europe` (value: `"Europe"`)

* `NAM` (value: `"NAM"`)

* `LAC` (value: `"LAC"`)

* `MEA` (value: `"MEA"`)




