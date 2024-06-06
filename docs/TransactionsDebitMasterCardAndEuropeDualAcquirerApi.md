# MasterCom.TransactionsDebitMasterCardAndEuropeDualAcquirerApi

All URIs are relative to *https://api.mastercard.com/mastercom*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transactionDebitMCMessageDetail**](TransactionsDebitMasterCardAndEuropeDualAcquirerApi.md#transactionDebitMCMessageDetail) | **GET** /v6/{claim-id}/transactions/debitmc/detail | 
[**transactionMessageSearchDebitMC**](TransactionsDebitMasterCardAndEuropeDualAcquirerApi.md#transactionMessageSearchDebitMC) | **POST** /v6/transactions/debitmc/search | 



## transactionDebitMCMessageDetail

> TransactionSingleMessageDetail transactionDebitMCMessageDetail(claimId)



After an issuer creates a claim, the issuer uses this endpoint to retrieve details for the Mastercard Debit or Europe Dual Acquirer original transaction involved in the claim.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.TransactionsDebitMasterCardAndEuropeDualAcquirerApi();
let claimId = "200002020654"; // String | Claim Id.   Length: 1-19   Valid Values/Format: Numeric
apiInstance.transactionDebitMCMessageDetail(claimId, (error, data, response) => {
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
 **claimId** | **String**| Claim Id.   Length: 1-19   Valid Values/Format: Numeric | 

### Return type

[**TransactionSingleMessageDetail**](TransactionSingleMessageDetail.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## transactionMessageSearchDebitMC

> TransactionSingleMessageSummaryList transactionMessageSearchDebitMC(body)



An issuer uses this endpoint to search for information about an Mastercard Debit or Europe Dual Acquirer original transaction. An issuer may use this information to take an action on the original transaction, such as creating a claim.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.TransactionsDebitMasterCardAndEuropeDualAcquirerApi();
let body = new MasterCom.TransactionSingleSearchRequest(); // TransactionSingleSearchRequest | Transaction DebitMC Message Search Request
apiInstance.transactionMessageSearchDebitMC(body, (error, data, response) => {
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
 **body** | [**TransactionSingleSearchRequest**](TransactionSingleSearchRequest.md)| Transaction DebitMC Message Search Request | 

### Return type

[**TransactionSingleMessageSummaryList**](TransactionSingleMessageSummaryList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

