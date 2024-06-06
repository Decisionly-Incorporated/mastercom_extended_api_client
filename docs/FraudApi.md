# MasterCom.FraudApi

All URIs are relative to *https://api.mastercard.com/mastercom*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFraudMasterCard**](FraudApi.md#createFraudMasterCard) | **POST** /v6/claims/{claim-id}/fraud/mastercard | 
[**getDataForCreateFraud**](FraudApi.md#getDataForCreateFraud) | **GET** /v6/claims/{claim-id}/fraud/loaddataforfraud | 



## createFraudMasterCard

> FraudResponse createFraudMasterCard(claimId, body)



An issuer uses this endpoint to create a new fraud item when the issuer determines that a transaction was fraudulent.   Note: Mastercom allows issuers to create fraud items in the Fraud and Loss database. However, issuers must use the Fraud and Loss application to make further updates to fraud items.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.FraudApi();
let claimId = "200002020654"; // String | Claim Id for the fraud item.   Length: 1-19   Valid Values/Format: Numeric
let body = new MasterCom.CreateFraudMasterCardRequest(); // CreateFraudMasterCardRequest | Create Fraud MasterCard Request
apiInstance.createFraudMasterCard(claimId, body, (error, data, response) => {
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
 **claimId** | **String**| Claim Id for the fraud item.   Length: 1-19   Valid Values/Format: Numeric | 
 **body** | [**CreateFraudMasterCardRequest**](CreateFraudMasterCardRequest.md)| Create Fraud MasterCard Request | 

### Return type

[**FraudResponse**](FraudResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDataForCreateFraud

> LoadDataForFraudResponse getDataForCreateFraud(claimId)



Issuers use this endpoint to obtain fraud-related information associated with a claim before creating a fraud item for the claim.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.FraudApi();
let claimId = "200002020654"; // String | Claim Id for the fraud item.   Length: 1-19   Valid Values/Format: Numeric
apiInstance.getDataForCreateFraud(claimId, (error, data, response) => {
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
 **claimId** | **String**| Claim Id for the fraud item.   Length: 1-19   Valid Values/Format: Numeric | 

### Return type

[**LoadDataForFraudResponse**](LoadDataForFraudResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

