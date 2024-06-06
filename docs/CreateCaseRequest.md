# MasterCom.CreateCaseRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caseType** | **String** | Type of Case Filing.   Length: 1   Valid Values/Format: 1-Pre-arbitration, 2-Arbitration, 3-Pre-compliance, 4-Compliance | 
**chargebackRefNum** | **[String]** | A list of Chargeback Reference numbers.   CONDITIONAL: This field is mandatory and applicable if the case type is pre-arbitration or arbitration or if the primary account number field is not populated.   Pre-Arbitration and Arbitration case will have one chargeback to one case filing. Pre-Compliance and Compliance case can have many chargeback to one case filing.   Length: 0-10   Valid Values/Format: Numeric | [optional] 
**customerFilingNumber** | **String** | Customer filing number which is the filing party&#39;s internal number.   Length: 0-15   Valid Values/Format: Numeric | [optional] 
**disputeAmount** | **String** | Dispute amount. The currency will be determined by the ICA region entered in the Filed ICA and Filed Against ICA.   Length: 1-10 (Integer Part). 2 (Decimal Part)   Valid Values/Format: Decimal | 
**currencyCode** | **String** | The case currency. Value should be standard alpha currency code.   For domestic transactions: domestic currency or USD   For cross-border transactions: USD or EUR, per Global Clearing Management System rules   Length: 3   Valid values/format: USD, EUR, GBP, MXN etc and A-Z (uppercase alphabetic letter)   | 
**dueDate** | **String** | Due date when the response is required.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd) | [optional] 
**fileAttachment** | [**DocumentStructure**](DocumentStructure.md) |  | [optional] 
**filedAgainstIca** | **String** | Filed Against ICA.   Length: 1-11   Valid Values/Format: Numeric | 
**filingAs** | **String** | Filing case as Issuer or Acquirer.   Length: 1   Valid Values/Format: I, A | 
**filingIca** | **String** | Filing ICA.   Length: 1-11   Valid Values/Format: Numeric | 
**memo** | **String** | Enter a Memo pertaining to the case.   Length: 1-13000   Valid Values/Format: Alphanumeric and Special Characters (~!@#$%^&amp;*()_+{}|:\&quot;&lt;&gt;?,./;&#39;[]-&#x3D;) | 
**messageText** | **String** | Enter a MessageText pertaining to the case.   CONDITIONAL: Applicable only for filing pre-arbitration and arbitration case for sender while creating the case.   Length: 1-100   Valid Values/Format: Alphanumeric and Special Characters (~!@#$%^&amp;*()_+{}|:\&quot;&lt;&gt;?,./;&#39;[]-&#x3D;) | [optional] 
**changeReasonCodeFlag** | **String** | Change reason code Flag.   CONDITIONAL: Applicable only for filing pre-arbitration and arbitration case for sender while creating the case.   Length: 1   Valid Values/Format: Y,N | [optional] 
**updatedChargebackReasonCode** | **String** | Updated Chargeback Reason Code.   CONDITIONAL: Required and applicable for filing pre-arbitration and arbitration case for sender while creating the case and if changeReasonCodeFlag is Y.   Length: 2-4   Valid Values/Format: 4863,4899,2001,2002,2003,2004,2005,2008,2011,2700,2701,2702,2703,2704,2705,2706,2707,2708,2709,2710,2711,2712,2713,4801,4802,4807,4808,4809,4812,4831,4834,4835,4837,4840,4841,4842,4846,4847,4849,4850,4853,4854,4855,4856,4857,4859,4860,4862,4900,4901,4902,4903,4905,4908,2000,4870,4871,03,06,17,30,69,70,71,73,74,75,79,80,82,85,95,96,97,98,13,10,20,24,25,26,27,28,29 | [optional] 
**changeReasonCodeReason** | **String** | Change reason Code reason.   CONDITIONAL: Required and applicable for filing pre-arbitration and arbitration case for sender while creating the case and if changeReasonCodeFlag is Y.   Length: 1-1000   Valid Values/Format: Alphanumeric and Special Characters (~!@#$%^&amp;*()_+{}|:\&quot;&lt;&gt;?,./;&#39;[]-&#x3D;) | [optional] 
**primaryAccountNum** | **String** | The primary account number.   CONDITIONAL: This field is mandatory and applicable if the chargeback ref number field is not populated.   Length: 1-19   Valid Values/Format: Numeric | [optional] 
**acquirerRefNum** | **String** | The acquirer reference number.   CONDITIONAL: This field is mandatory and applicable if case is created using primary account number.   Length: 1-23   Valid Values/Format: Numeric | [optional] 
**chargebackReasonCode** | **String** | Chargeback Reason Code.   CONDITIONAL: Required and applicable for filing pre-arbitration and arbitration case.   Length: 2-4   Valid Values/Format: 4863,4899,2001,2002,2003,2004,2005,2008,2011,2700,2701,2702,2703,2704,2705,2706,2707,2708,2709,2710,2711,2712,2713,4801,4802,4807,4808,4809,4812,4831,4834,4835,4837,4840,4841,4842,4846,4847,4849,4850,4853,4854,4855,4856,4857,4859,4860,4862,4900,4901,4902,4903,4905,4908,2000,4870,4871,03,06,17,30,69,70,71,73,74,75,79,80,82,85,95,96,97,98,13,10,20,24,25,26,27,28,29 | [optional] 
**merchantName** | **String** | Merchant name.   CONDITIONAL: This is required and applicable for filing pre-arbitration and arbitration case.   Length: 0-100   Valid Values/Format: Alphanumeric and Special Characters (~!@#$%^&amp;*()_+{}|:\&quot;&lt;&gt;?,./;&#39;[]-&#x3D;) | [optional] 
**violationCode** | **String** | Violation code.   CONDITIONAL: This is only applicable and mandatory in case of pre-compliance and compliance types of cases   Length: 1-20   Valid Values/Format: Alphanumeric and Special Character (.) | [optional] 
**violationDate** | **String** | Violation Date.   CONDITIONAL: This is only applicable and mandatory in case of pre-compliance and compliance types of cases.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd) | [optional] 
**chargebackDate** | **String** | Chargeback Date.   CONDITIONAL:  This is only applicable and mandatory in case of pre-compliance and compliance types of cases with a violation code of 1.4.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd) | [optional] 
**creditDate** | **String** | Credit Date.   CONDITIONAL:  This is only applicable and mandatory in case of pre-compliance and compliance types of cases with a violation code of 1.4.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd) | [optional] 
**caseFilingEbdfDocuments** | [**CaseFilingEbdfStructure**](CaseFilingEbdfStructure.md) |  | [optional] 



## Enum: CaseTypeEnum


* `1` (value: `"1"`)

* `2` (value: `"2"`)

* `3` (value: `"3"`)

* `4` (value: `"4"`)





## Enum: FilingAsEnum


* `I` (value: `"I"`)

* `A` (value: `"A"`)





## Enum: UpdatedChargebackReasonCodeEnum


* `4863` (value: `"4863"`)

* `4899` (value: `"4899"`)

* `2001` (value: `"2001"`)

* `2002` (value: `"2002"`)

* `2003` (value: `"2003"`)

* `2004` (value: `"2004"`)

* `2005` (value: `"2005"`)

* `2008` (value: `"2008"`)

* `2011` (value: `"2011"`)

* `2700` (value: `"2700"`)

* `2701` (value: `"2701"`)

* `2702` (value: `"2702"`)

* `2703` (value: `"2703"`)

* `2704` (value: `"2704"`)

* `2705` (value: `"2705"`)

* `2706` (value: `"2706"`)

* `2707` (value: `"2707"`)

* `2708` (value: `"2708"`)

* `2709` (value: `"2709"`)

* `2710` (value: `"2710"`)

* `2711` (value: `"2711"`)

* `2712` (value: `"2712"`)

* `2713` (value: `"2713"`)

* `4801` (value: `"4801"`)

* `4802` (value: `"4802"`)

* `4807` (value: `"4807"`)

* `4808` (value: `"4808"`)

* `4809` (value: `"4809"`)

* `4812` (value: `"4812"`)

* `4831` (value: `"4831"`)

* `4834` (value: `"4834"`)

* `4835` (value: `"4835"`)

* `4837` (value: `"4837"`)

* `4840` (value: `"4840"`)

* `4841` (value: `"4841"`)

* `4842` (value: `"4842"`)

* `4846` (value: `"4846"`)

* `4847` (value: `"4847"`)

* `4849` (value: `"4849"`)

* `4850` (value: `"4850"`)

* `4853` (value: `"4853"`)

* `4854` (value: `"4854"`)

* `4855` (value: `"4855"`)

* `4856` (value: `"4856"`)

* `4857` (value: `"4857"`)

* `4859` (value: `"4859"`)

* `4860` (value: `"4860"`)

* `4862` (value: `"4862"`)

* `4900` (value: `"4900"`)

* `4901` (value: `"4901"`)

* `4902` (value: `"4902"`)

* `4903` (value: `"4903"`)

* `4905` (value: `"4905"`)

* `4908` (value: `"4908"`)

* `2000` (value: `"2000"`)

* `4870` (value: `"4870"`)

* `4871` (value: `"4871"`)

* `03` (value: `"03"`)

* `06` (value: `"06"`)

* `17` (value: `"17"`)

* `30` (value: `"30"`)

* `69` (value: `"69"`)

* `70` (value: `"70"`)

* `71` (value: `"71"`)

* `73` (value: `"73"`)

* `74` (value: `"74"`)

* `75` (value: `"75"`)

* `79` (value: `"79"`)

* `80` (value: `"80"`)

* `82` (value: `"82"`)

* `85` (value: `"85"`)

* `95` (value: `"95"`)

* `96` (value: `"96"`)

* `97` (value: `"97"`)

* `98` (value: `"98"`)

* `13` (value: `"13"`)

* `10` (value: `"10"`)

* `20` (value: `"20"`)

* `24` (value: `"24"`)

* `25` (value: `"25"`)

* `26` (value: `"26"`)

* `27` (value: `"27"`)

* `28` (value: `"28"`)

* `29` (value: `"29"`)





## Enum: ChargebackReasonCodeEnum


* `4863` (value: `"4863"`)

* `4899` (value: `"4899"`)

* `2001` (value: `"2001"`)

* `2002` (value: `"2002"`)

* `2003` (value: `"2003"`)

* `2004` (value: `"2004"`)

* `2005` (value: `"2005"`)

* `2008` (value: `"2008"`)

* `2011` (value: `"2011"`)

* `2700` (value: `"2700"`)

* `2701` (value: `"2701"`)

* `2702` (value: `"2702"`)

* `2703` (value: `"2703"`)

* `2704` (value: `"2704"`)

* `2705` (value: `"2705"`)

* `2706` (value: `"2706"`)

* `2707` (value: `"2707"`)

* `2708` (value: `"2708"`)

* `2709` (value: `"2709"`)

* `2710` (value: `"2710"`)

* `2711` (value: `"2711"`)

* `2712` (value: `"2712"`)

* `2713` (value: `"2713"`)

* `4801` (value: `"4801"`)

* `4802` (value: `"4802"`)

* `4807` (value: `"4807"`)

* `4808` (value: `"4808"`)

* `4809` (value: `"4809"`)

* `4812` (value: `"4812"`)

* `4831` (value: `"4831"`)

* `4834` (value: `"4834"`)

* `4835` (value: `"4835"`)

* `4837` (value: `"4837"`)

* `4840` (value: `"4840"`)

* `4841` (value: `"4841"`)

* `4842` (value: `"4842"`)

* `4846` (value: `"4846"`)

* `4847` (value: `"4847"`)

* `4849` (value: `"4849"`)

* `4850` (value: `"4850"`)

* `4853` (value: `"4853"`)

* `4854` (value: `"4854"`)

* `4855` (value: `"4855"`)

* `4856` (value: `"4856"`)

* `4857` (value: `"4857"`)

* `4859` (value: `"4859"`)

* `4860` (value: `"4860"`)

* `4862` (value: `"4862"`)

* `4900` (value: `"4900"`)

* `4901` (value: `"4901"`)

* `4902` (value: `"4902"`)

* `4903` (value: `"4903"`)

* `4905` (value: `"4905"`)

* `4908` (value: `"4908"`)

* `2000` (value: `"2000"`)

* `4870` (value: `"4870"`)

* `4871` (value: `"4871"`)

* `03` (value: `"03"`)

* `06` (value: `"06"`)

* `17` (value: `"17"`)

* `30` (value: `"30"`)

* `69` (value: `"69"`)

* `70` (value: `"70"`)

* `71` (value: `"71"`)

* `73` (value: `"73"`)

* `74` (value: `"74"`)

* `75` (value: `"75"`)

* `79` (value: `"79"`)

* `80` (value: `"80"`)

* `82` (value: `"82"`)

* `85` (value: `"85"`)

* `95` (value: `"95"`)

* `96` (value: `"96"`)

* `97` (value: `"97"`)

* `98` (value: `"98"`)

* `13` (value: `"13"`)

* `10` (value: `"10"`)

* `20` (value: `"20"`)

* `24` (value: `"24"`)

* `25` (value: `"25"`)

* `26` (value: `"26"`)

* `27` (value: `"27"`)

* `28` (value: `"28"`)

* `29` (value: `"29"`)




