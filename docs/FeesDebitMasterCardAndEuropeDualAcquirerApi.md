# MasterCom.FeesDebitMasterCardAndEuropeDualAcquirerApi

All URIs are relative to *https://api.mastercard.com/mastercom*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFeeDebitMC**](FeesDebitMasterCardAndEuropeDualAcquirerApi.md#createFeeDebitMC) | **POST** /v6/claims/{claim-id}/fee/debitmc | 



## createFeeDebitMC

> FeeSingleResponse createFeeDebitMC(claimId, body)



Senders (issuers) use this endpoint to create a fee collection for receivers (acquirers) for Mastercard Debit or Europe Dual Acquirer. Receivers use this endpoint to reply to a fee collection.   Note: Senders should create fee collections using this endpoint only (a) when permitted by chargeback rules and (b) when the fee collections are related to disputes.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.FeesDebitMasterCardAndEuropeDualAcquirerApi();
let claimId = "200002020654"; // String | Claim Id for the fee item.   Length: 1-19   Valid Values/Format: Numeric
let body = new MasterCom.CreateFeeRequestSingle(); // CreateFeeRequestSingle | Create Fee Request
apiInstance.createFeeDebitMC(claimId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **claimId** | **String**| Claim Id for the fee item.   Length: 1-19   Valid Values/Format: Numeric | 
 **body** | [**CreateFeeRequestSingle**](CreateFeeRequestSingle.md)| Create Fee Request | 

### Return type

[**FeeSingleResponse**](FeeSingleResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

