# MasterCom.RetrievalsApi

All URIs are relative to *https://api.mastercard.com/mastercom*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acqFulfillRetrievalRequest**](RetrievalsApi.md#acqFulfillRetrievalRequest) | **POST** /v6/claims/{claim-id}/retrievalrequests/{request-id}/fulfillments | 
[**createRetrievalRequest**](RetrievalsApi.md#createRetrievalRequest) | **POST** /v6/claims/{claim-id}/retrievalrequests | 
[**getDataForCreateRetrievalRequest**](RetrievalsApi.md#getDataForCreateRetrievalRequest) | **GET** /v6/claims/{claim-id}/retrievalrequests/loaddataforretrievalrequests | 
[**getRetrievalDoc**](RetrievalsApi.md#getRetrievalDoc) | **GET** /v6/claims/{claim-id}/retrievalrequests/{request-id}/documents | 
[**issuerResponseRetrievalRequest**](RetrievalsApi.md#issuerResponseRetrievalRequest) | **POST** /v6/claims/{claim-id}/retrievalrequests/{request-id}/fulfillments/response | 
[**retrieveFulfillmentImageStatus**](RetrievalsApi.md#retrieveFulfillmentImageStatus) | **PUT** /v6/retrievalrequests/imagestatus | 
[**retrieveFulfillmentStatus**](RetrievalsApi.md#retrieveFulfillmentStatus) | **PUT** /v6/retrievalrequests/status | 



## acqFulfillRetrievalRequest

> AcquirerFulfillmentResponse acqFulfillRetrievalRequest(claimId, requestId, body)



After receiving a retrieval request from an issuer, an acquirer uses this endpoint to either provide a copy or substitute draft of the transaction information document (TID) or provide a reason for failing to fulfill the retrieval request.   NOTE: Below acquirerResponseCd codes will be accepted starting on February 26th, 2023.&lt;br&gt;  A - Funds Movement Request&lt;br&gt;  B - Refunded&lt;br&gt;  C - Initiating Refund&lt;br&gt;  E - Reject Collaboration&lt;br&gt;  F - IIAS Unfulfillable&lt;br&gt;  G - IIAS Invalid request information&lt;br&gt;  H - IIAS Fulfilled outside MasterCom system

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.RetrievalsApi();
let claimId = "200002020654"; // String | Claim Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric
let requestId = "300002296235"; // String | Request Id for the retrieval request.   Length: 1-19   Valid Values/Format: Numeric
let body = new MasterCom.AcquirerFulfillmentRequest(); // AcquirerFulfillmentRequest | Acquirer Retrieval Fulfillment information
apiInstance.acqFulfillRetrievalRequest(claimId, requestId, body, (error, data, response) => {
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
 **requestId** | **String**| Request Id for the retrieval request.   Length: 1-19   Valid Values/Format: Numeric | 
 **body** | [**AcquirerFulfillmentRequest**](AcquirerFulfillmentRequest.md)| Acquirer Retrieval Fulfillment information | 

### Return type

[**AcquirerFulfillmentResponse**](AcquirerFulfillmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRetrievalRequest

> CreateRetrievalResponse createRetrievalRequest(claimId, body)



Prior to creating a chargeback, an issuer uses this endpoint to create a retrieval request for the acquirer to fulfill by providing a copy of the transaction information document (TID). The TID is used to satisfy a cardholder&#39;s inquiry or to satisfy an issuer&#39;s investigation of an original transaction.   NOTE: an issuer is not required to create a retrieval request in order to create a first chargeback on a claim.   NOTE: Below retrievalRequestReason codes will be accepted until October 23th, 2021.&lt;br&gt;  6305 - Cardholder does not agree with amount billed&lt;br&gt;  6321 - Cardholder does not recognize transaction&lt;br&gt;  6322 - Request Transaction Certificate for a chip transaction&lt;br&gt;  6323 - Cardholder needs information for personal records&lt;br&gt;  6341 - Fraud investigation&lt;br&gt;  6342 - Potential chargeback or compliance documentation is required&lt;br&gt;  6343 - IIAS Audit (for healthcare transactions only)&lt;br&gt;  6390 - Identifies a syntax error return   NOTE: Below retrievalRequestReason code will be accepted for creation of retrieval request starting on October 24th, 2021.&lt;br&gt;  6343 - IIAS Audit (for healthcare transactions only)

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.RetrievalsApi();
let claimId = "200002020654"; // String | Claim Id for the retrieval request.   Length: 1-19   Valid Values/Format: Numeric
let body = new MasterCom.CreateRetrievalRequest(); // CreateRetrievalRequest | Create Retrieval Request
apiInstance.createRetrievalRequest(claimId, body, (error, data, response) => {
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
 **claimId** | **String**| Claim Id for the retrieval request.   Length: 1-19   Valid Values/Format: Numeric | 
 **body** | [**CreateRetrievalRequest**](CreateRetrievalRequest.md)| Create Retrieval Request | 

### Return type

[**CreateRetrievalResponse**](CreateRetrievalResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDataForCreateRetrievalRequest

> LoadDataForRetrievalResponse getDataForCreateRetrievalRequest(claimId)



An issuer uses this endpoint to retrieve values associated with a claim in preparation for creating a retrieval request.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.RetrievalsApi();
let claimId = "200002020654"; // String | Claim Id for the retrieval rrequest.   Length: 1-19   Valid Values/Format: Numeric
apiInstance.getDataForCreateRetrievalRequest(claimId, (error, data, response) => {
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
 **claimId** | **String**| Claim Id for the retrieval rrequest.   Length: 1-19   Valid Values/Format: Numeric | 

### Return type

[**LoadDataForRetrievalResponse**](LoadDataForRetrievalResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRetrievalDoc

> DocumentResponseStructure getRetrievalDoc(claimId, requestId, format)



Issuers and acquirers use this endpoint to retrieve all documents from acquirers associated with retrieval request fulfillment.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.RetrievalsApi();
let claimId = "200002020654"; // String | The Claim Id.   Length: 1-19   Valid Values/Format: Numeric
let requestId = "300002296235"; // String | The Request Id.   Length: 1-19   Valid Values/Format: Numeric
let format = "ORIGINAL"; // String | File Format.   Length: 8-11   Valid Values/Format: ORIGINAL, MERGED_TIFF, MERGED_PDF
apiInstance.getRetrievalDoc(claimId, requestId, format, (error, data, response) => {
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


## issuerResponseRetrievalRequest

> RetrievalResponse issuerResponseRetrievalRequest(claimId, requestId, body)



After an acquirer fulfills a retrieval request, an issuer uses this endpoint to approve or reject a retrieval request fulfillment. The issuer approves the fulfillment or rejects the fulfillment if the documentation does not meet requirements.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.RetrievalsApi();
let claimId = "200002020654"; // String | Claim Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric
let requestId = "300002296235"; // String | Request Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric
let body = new MasterCom.IssuerFulfillmentRequest(); // IssuerFulfillmentRequest | Issuer Fulfillment Response
apiInstance.issuerResponseRetrievalRequest(claimId, requestId, body, (error, data, response) => {
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


## retrieveFulfillmentImageStatus

> RetrievalsImageStatusResponse retrieveFulfillmentImageStatus(body)



Issuers and acquirers use this endpoint to search for documents that have a specific status (completed, pending, failed, unavailable, and document not applicable) for retrieval requests.   Note: For customers with high volumes of fulfillments or large numbers of BINs, Mastercom recommends using the Retrieval Fullfilment Status endpoint rather than the Retrieval Fullfilment Image Status endpoint.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.RetrievalsApi();
let body = new MasterCom.RetrievalsImageStatusRequest(); // RetrievalsImageStatusRequest | Retrieval information
apiInstance.retrieveFulfillmentImageStatus(body, (error, data, response) => {
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


## retrieveFulfillmentStatus

> RetrievalStatusResponse retrieveFulfillmentStatus(body)



Issuers and acquirers use this endpoint to search for the status of documents that are associated with a specific list of retrieval requests.   Note: issuers and acquirers may send a maximum of 2,000 retrieval fulfillment IDs within a single request.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.RetrievalsApi();
let body = new MasterCom.RetrievalStatusRequest(); // RetrievalStatusRequest | Retrieval information
apiInstance.retrieveFulfillmentStatus(body, (error, data, response) => {
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

