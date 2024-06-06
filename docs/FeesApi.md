# MasterCom.FeesApi

All URIs are relative to *https://api.mastercard.com/mastercom*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFee**](FeesApi.md#createFee) | **POST** /v6/claims/{claim-id}/fee | 
[**getDataForCreateFee**](FeesApi.md#getDataForCreateFee) | **POST** /v6/claims/{claim-id}/fees/loaddataforfees | 



## createFee

> FeeResponse createFee(claimId, body)



Senders (issuers or acquirers) use this endpoint to create a fee collection for receivers (issuers or acquirers). Receivers use this endpoint to reply to a fee collection.   Note: Senders should create fee collections using this endpoint only (a) when permitted by chargeback rules and (b) when the fee collections are related to disputes.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.FeesApi();
let claimId = "200002020654"; // String | Claim Id for the Fee item.   Length: 1-19   Valid Values/Format: Numeric
let body = new MasterCom.CreateFeeRequest(); // CreateFeeRequest | Create Fee Request
apiInstance.createFee(claimId, body, (error, data, response) => {
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
 **claimId** | **String**| Claim Id for the Fee item.   Length: 1-19   Valid Values/Format: Numeric | 
 **body** | [**CreateFeeRequest**](CreateFeeRequest.md)| Create Fee Request | 

### Return type

[**FeeResponse**](FeeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDataForCreateFee

> LoadDataForFeeResponse getDataForCreateFee(claimId, body)



Senders (issuers or acquirers) use this endpoint to obtain information about a potential fee collection associated with a claim.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.FeesApi();
let claimId = "200002020654"; // String | Claim Id for the Fee.   Length: 1-19   Valid Values/Format: Numeric
let body = new MasterCom.LoadDataForFeesRequest(); // LoadDataForFeesRequest | Load Data For Fee Request
apiInstance.getDataForCreateFee(claimId, body, (error, data, response) => {
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
 **claimId** | **String**| Claim Id for the Fee.   Length: 1-19   Valid Values/Format: Numeric | 
 **body** | [**LoadDataForFeesRequest**](LoadDataForFeesRequest.md)| Load Data For Fee Request | 

### Return type

[**LoadDataForFeeResponse**](LoadDataForFeeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

