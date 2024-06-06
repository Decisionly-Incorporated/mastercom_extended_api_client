# MasterCom.TransactionsApi

All URIs are relative to *https://api.mastercard.com/mastercom*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransactionClearingDetail**](TransactionsApi.md#getTransactionClearingDetail) | **GET** /v6/claims/{claim-id}/transactions/clearing/{transaction-id} | 
[**retrieveAuthorizationDetail**](TransactionsApi.md#retrieveAuthorizationDetail) | **GET** /v6/claims/{claim-id}/transactions/authorization/{transaction-id} | 
[**transactionSearch**](TransactionsApi.md#transactionSearch) | **POST** /v6/transactions/search | 



## getTransactionClearingDetail

> ClearingDetail getTransactionClearingDetail(claimId, transactionId)



After an issuer creates a claim, the issuer uses this endpoint to retrieve clearing details for the original transaction involved in the claim. Acquirers may also use this endpoint to retrieve clearing details associated with an original transaction.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.TransactionsApi();
let claimId = "200002020654"; // String | Claim Id.   Length: 1-19   Valid Values/Format: Numeric
let transactionId = "FIEaEgnM3bwPijwZgjc3Te+Y0ieLbN9ijUugqNSvJmVbO1xs6Jh5iIlmpOpkbax79L8Yj1rBOWBACx+Vj17rzvOepWobpgWNJNdsgHB4ag"; // String | Clearing transaction id.   Length: N/A   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
apiInstance.getTransactionClearingDetail(claimId, transactionId, (error, data, response) => {
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
 **transactionId** | **String**| Clearing transaction id.   Length: N/A   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&amp;*()_+{}|:\&quot;&lt;&gt;?,./;&#39;[]-&#x3D;) | 

### Return type

[**ClearingDetail**](ClearingDetail.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveAuthorizationDetail

> AuthorizationDetail retrieveAuthorizationDetail(claimId, transactionId)



After an issuer creates a claim, the issuer uses this endpoint to retrieve authorization details for the original transaction involved in the claim.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.TransactionsApi();
let claimId = "200002020654"; // String | Claim Id.   Length: 1-19   Valid Values/Format: Numeric
let transactionId = "FIEaEgnM3bwPijwZgjc3Te+Y0ieLbN9ijUugqNSvJmVbO1xs6Jh5iIlmpOpkbax79L8Yj1rBOWBACx+Vj17rzvOepWobpgWNJNdsgHB4ag"; // String | The Authorization Transaction Identifier from Authorization Summary Results.   Length: N/A   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;'[]-=)
apiInstance.retrieveAuthorizationDetail(claimId, transactionId, (error, data, response) => {
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
 **transactionId** | **String**| The Authorization Transaction Identifier from Authorization Summary Results.   Length: N/A   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&amp;*()_+{}|:\&quot;&lt;&gt;?,./;&#39;[]-&#x3D;) | 

### Return type

[**AuthorizationDetail**](AuthorizationDetail.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## transactionSearch

> TransactionSummary transactionSearch(body)



An issuer uses this endpoint to search for information about an original transaction. An issuer may use this information to take an action on the original transaction, such as creating a claim.   Note: Mastercom retrieves transactions normally when the clearing occurs within 150 days of authorization. To find late presentments and Brazilian installment transactions, provide the acquirer reference number (ARN) and the clearing date associated with the ARN of the first presentment in the request.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.TransactionsApi();
let body = new MasterCom.TransactionSearchRequest(); // TransactionSearchRequest | Transaction Search Request
apiInstance.transactionSearch(body, (error, data, response) => {
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
 **body** | [**TransactionSearchRequest**](TransactionSearchRequest.md)| Transaction Search Request | 

### Return type

[**TransactionSummary**](TransactionSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

