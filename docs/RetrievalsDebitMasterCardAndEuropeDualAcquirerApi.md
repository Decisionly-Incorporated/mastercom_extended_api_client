# MasterCom.RetrievalsDebitMasterCardAndEuropeDualAcquirerApi

All URIs are relative to *https://api.mastercard.com/mastercom*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRetrievalRequestDebitMC**](RetrievalsDebitMasterCardAndEuropeDualAcquirerApi.md#createRetrievalRequestDebitMC) | **POST** /v6/claims/{claim-id}/retrievalrequests/debitmc | 
[**getRetrievalDocDebitMC**](RetrievalsDebitMasterCardAndEuropeDualAcquirerApi.md#getRetrievalDocDebitMC) | **GET** /v6/claims/{claim-id}/retrievalrequests/debitmc/{request-id}/documents | 
[**issuerResponseRetrievalDebitMCRequest**](RetrievalsDebitMasterCardAndEuropeDualAcquirerApi.md#issuerResponseRetrievalDebitMCRequest) | **POST** /v6/claims/{claim-id}/retrievalrequests/debitmc/{request-id}/fulfillments/response | 
[**retrieveFulfillmentDebitMCImageStatus**](RetrievalsDebitMasterCardAndEuropeDualAcquirerApi.md#retrieveFulfillmentDebitMCImageStatus) | **PUT** /v6/retrievalrequests/debitmc/imagestatus | 
[**retrieveFulfillmentDebitMCStatus**](RetrievalsDebitMasterCardAndEuropeDualAcquirerApi.md#retrieveFulfillmentDebitMCStatus) | **PUT** /v6/retrievalrequests/debitmc/status | 



## createRetrievalRequestDebitMC

> CreateRetrievalResponse createRetrievalRequestDebitMC(claimId, body)



Prior to creating a chargeback, an issuer uses this endpoint to create a retrieval request for a Debit Mastercard or Europe Dual Acquirer transaction for the acquirer to fulfill by providing a copy of the transaction information document (TID). The TID is used to satisfy a cardholder&#39;s inquiry or to satisfy an issuer&#39;s investigation of an original transaction.   NOTE: An issuer is not required to create a retrieval request in order to create a first chargeback on a claim.   NOTE:Â Creation of retrieval request is allowed only for reversalReasonCode (healthcare reason code (43)) starting on October 24th, 2021.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.RetrievalsDebitMasterCardAndEuropeDualAcquirerApi();
let claimId = "200002020654"; // String | Claim Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric
let body = new MasterCom.CreateRetrievalRequestSingle(); // CreateRetrievalRequestSingle | Create Retrieval Request
apiInstance.createRetrievalRequestDebitMC(claimId, body, (error, data, response) => {
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
 **claimId** | **String**| Claim Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric | 
 **body** | [**CreateRetrievalRequestSingle**](CreateRetrievalRequestSingle.md)| Create Retrieval Request | 

### Return type

[**CreateRetrievalResponse**](CreateRetrievalResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRetrievalDocDebitMC

> DocumentResponseStructure getRetrievalDocDebitMC(claimId, requestId, format)



Issuers and acquirers use this endpoint to retrieve all documents from acquirers associated with retrieval request fulfillment

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.RetrievalsDebitMasterCardAndEuropeDualAcquirerApi();
let claimId = "200002020654"; // String | The Claim Id.   Length: 1-19   Valid Values/Format: Numeric
let requestId = "300002296235"; // String | The Request Id.   Length: 1-19   Valid Values/Format: Numeric
let format = "ORIGINAL"; // String | File Format.   Length: 8-11   Valid Values/Format: ORIGINAL, MERGED_TIFF, MERGED_PDF
apiInstance.getRetrievalDocDebitMC(claimId, requestId, format, (error, data, response) => {
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
 **claimId** | **String**| The Claim Id.   Length: 1-19   Valid Values/Format: Numeric | 
 **requestId** | **String**| The Request Id.   Length: 1-19   Valid Values/Format: Numeric | 
 **format** | **String**| File Format.   Length: 8-11   Valid Values/Format: ORIGINAL, MERGED_TIFF, MERGED_PDF | 

### Return type

[**DocumentResponseStructure**](DocumentResponseStructure.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuerResponseRetrievalDebitMCRequest

> RetrievalResponse issuerResponseRetrievalDebitMCRequest(claimId, requestId, body)



After an acquirer fulfills a retrieval request, an issuer uses this endpoint to approve or reject a retrieval request fulfillment. The issuer approves the fulfillment or rejects the fulfillment if the documentation does not meet requirements.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.RetrievalsDebitMasterCardAndEuropeDualAcquirerApi();
let claimId = "200002020654"; // String | Claim Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric
let requestId = "300002296235"; // String | Request Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric
let body = new MasterCom.IssuerFulfillmentRequest(); // IssuerFulfillmentRequest | Issuer Fulfillment Response
apiInstance.issuerResponseRetrievalDebitMCRequest(claimId, requestId, body, (error, data, response) => {
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
 **claimId** | **String**| Claim Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric | 
 **requestId** | **String**| Request Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric | 
 **body** | [**IssuerFulfillmentRequest**](IssuerFulfillmentRequest.md)| Issuer Fulfillment Response | 

### Return type

[**RetrievalResponse**](RetrievalResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveFulfillmentDebitMCImageStatus

> RetrievalsImageStatusResponse retrieveFulfillmentDebitMCImageStatus(body)



Issuers and acquirers use this endpoint to search for documents that have a specific status (completed, pending, failed, unavailable, and document not applicable) for retrieval requests.   Note: For customers with high volumes of fulfillments or large numbers of BINs, Mastercom recommends using the Retrieval Fullfilment Status endpoint rather than the Retrieval Fullfilment Image Status endpoint.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.RetrievalsDebitMasterCardAndEuropeDualAcquirerApi();
let body = new MasterCom.RetrievalsImageStatusRequest(); // RetrievalsImageStatusRequest | Retrieval information
apiInstance.retrieveFulfillmentDebitMCImageStatus(body, (error, data, response) => {
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
 **body** | [**RetrievalsImageStatusRequest**](RetrievalsImageStatusRequest.md)| Retrieval information | 

### Return type

[**RetrievalsImageStatusResponse**](RetrievalsImageStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveFulfillmentDebitMCStatus

> RetrievalStatusResponse retrieveFulfillmentDebitMCStatus(body)



Issuers and acquirers use this endpoint to search for the status of documents that are associated with a specific list of retrieval requests.   Note: Issuers and acquirers may send a maximum of 2,000 retrieval fulfillment IDs within a single request.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.RetrievalsDebitMasterCardAndEuropeDualAcquirerApi();
let body = new MasterCom.RetrievalStatusRequest(); // RetrievalStatusRequest | Retrieval information
apiInstance.retrieveFulfillmentDebitMCStatus(body, (error, data, response) => {
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
 **body** | [**RetrievalStatusRequest**](RetrievalStatusRequest.md)| Retrieval information | 

### Return type

[**RetrievalStatusResponse**](RetrievalStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

