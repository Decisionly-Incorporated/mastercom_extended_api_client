# MasterCom.CardholderDisputeChargebackDrfDocumentStructure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionAmount** | **String** | The transaction amount.   Length: 0-12   Valid Values/Format: Numeric | [optional] 
**type** | **String** | Type of Carholder Dispute.   Length: 11-22   Valid Values/Format: PRODUCT_DISPUTE,NOT_PROVIDED,DIGITAL_GOODS,CREDIT_NOT_PROCESSED,COUNTERFEIT,RECURRING_CANCELLED,RECURRING_DISCLOSURE,ADDENDUM_DISPUTE,HOTEL_NO_SHOW,PURCHASE_INCOMPLETE,CANCELLATION_AGREEMENT,POSTED_CREDIT,FAILED_TRAVEL | [optional] 
**deliveryDateOfGoodsOrServices** | **String** | CONDITIONAL: In case of PRODUCT_DISPUTE, delivery date of the goods or services.   Length: 11   Valid Values/Format: Date (dd-MMM-yyyy) | [optional] 
**expectedDeliveryDateOfGoodOrServices** | **String** | CONDITIONAL: In case of NOT_PROVIDED, expected delivery date of the goods or services.   Length: 11   Valid Values/Format: Date (dd-MMM-yyyy) | [optional] 
**returnDate** | **String** | CONDITIONAL: In case of DIGITAL_GOODS, return or cancellation of the goods or services.   Length: 11   Valid Values/Format: Date (dd-MMM-yyyy) | [optional] 
**cancellationDate** | **String** | CONDITIONAL: In case of RECURRING_CANCELLED, cancellation of the goods or services.   Length: 11   Valid Values/Format: Date (dd-MMM-yyyy) | [optional] 
**cardholderParticipation** | **Boolean** | Did the cardholder participate in the transaction?   Length: 4-5   Valid Values/Format: true / false | [optional] 
**disputeDetails** | **String** | Describe the cardholderâ€™s compliant in sufficient detail to meet the requirements for the chargeback as described in the Chargeback Guide and to enable all parties to understand the dispute.   Length: 0-3000   Valid Values/Format: Alphanumeric / Special Char (~!@#$%^&amp;*()_+{}|:\&quot;&lt;&gt;?,./;&#39;[]-&#x3D;) | [optional] 
**chargebackRepresentative** | **String** | Customer Service/Chargeback Representative.   Length: 0-25   Valid Values/Format: Alphanumeric / Special Char (~!@#$%^&amp;*()_+{}|:\&quot;&lt;&gt;?,./;&#39;[]-&#x3D;) | [optional] 



## Enum: TypeEnum


* `PRODUCT_DISPUTE` (value: `"PRODUCT_DISPUTE"`)

* `NOT_PROVIDED` (value: `"NOT_PROVIDED"`)

* `DIGITAL_GOODS` (value: `"DIGITAL_GOODS"`)

* `CREDIT_NOT_PROCESSED` (value: `"CREDIT_NOT_PROCESSED"`)

* `COUNTERFEIT` (value: `"COUNTERFEIT"`)

* `RECURRING_CANCELLED` (value: `"RECURRING_CANCELLED"`)

* `RECURRING_DISCLOSURE` (value: `"RECURRING_DISCLOSURE"`)

* `ADDENDUM_DISPUTE` (value: `"ADDENDUM_DISPUTE"`)

* `HOTEL_NO_SHOW` (value: `"HOTEL_NO_SHOW"`)

* `PURCHASE_INCOMPLETE` (value: `"PURCHASE_INCOMPLETE"`)

* `CANCELLATION_AGREEMENT` (value: `"CANCELLATION_AGREEMENT"`)

* `POSTED_CREDIT` (value: `"POSTED_CREDIT"`)

* `FAILED_TRAVEL` (value: `"FAILED_TRAVEL"`)




