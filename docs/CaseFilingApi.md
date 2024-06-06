# MasterCom.CaseFilingApi

All URIs are relative to *https://api.mastercard.com/mastercom*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCaseFiling**](CaseFilingApi.md#createCaseFiling) | **POST** /v6/cases | 
[**getCaseFilingDoc**](CaseFilingApi.md#getCaseFilingDoc) | **GET** /v6/cases/{case-id}/documents | 
[**retrieveCaseFilingImageStatus**](CaseFilingApi.md#retrieveCaseFilingImageStatus) | **PUT** /v6/cases/imagestatus | 
[**retrieveCaseFilingStatus**](CaseFilingApi.md#retrieveCaseFilingStatus) | **PUT** /v6/cases/status | 
[**retrieveClaims**](CaseFilingApi.md#retrieveClaims) | **PUT** /v6/cases/retrieve/claims | 
[**updateCaseFiling**](CaseFilingApi.md#updateCaseFiling) | **PUT** /v6/cases/{case-id} | 



## createCaseFiling

> CaseFilingResponse createCaseFiling(body)



Issuer or acquirers use this endpoint to file a pre-arbitration, arbitration, pre-compliance, or compliance case and optionally upload documents. Issuers and acquirers also have the option to use the endpoint to create an Expedited Billing Dispute Form (EBDF) and attach it to the claim.   Note: issuers or acquirers should not attach documents while requesting the automatic generation of the EBDF. Therefore, if issuers or acquirers need to submit the EBDF with additional documentation, they must complete the EBDF and include it in a ZIP file with any additional documentation.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.CaseFilingApi();
let body = new MasterCom.CreateCaseRequest(); // CreateCaseRequest | Create Case Filing information
apiInstance.createCaseFiling(body, (error, data, response) => {
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
 **body** | [**CreateCaseRequest**](CreateCaseRequest.md)| Create Case Filing information | 

### Return type

[**CaseFilingResponse**](CaseFilingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCaseFilingDoc

> DocumentResponseStructure getCaseFilingDoc(caseId, format, opts)



Issuers and acquirers use this endpoint to retrieve all documents in a desired format associated with a case.   Note: this endpoint returns all documents that either party has submitted for the case.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.CaseFilingApi();
let caseId = "536092"; // String | The case filing id.   Length: 0-19   Valid Values/Format: Numeric
let format = "ORIGINAL"; // String | File Format.   Length: 8-11   Valid Values/Format: ORIGINAL, MERGED_TIFF, MERGED_PDF
let opts = {
  'memo': "Memo" // String | Adding field for future use. Please leave blank at this time.   Length: N/A    Valid Values/Format: Alphanumeric
};
apiInstance.getCaseFilingDoc(caseId, format, opts, (error, data, response) => {
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
 **caseId** | **String**| The case filing id.   Length: 0-19   Valid Values/Format: Numeric | 
 **format** | **String**| File Format.   Length: 8-11   Valid Values/Format: ORIGINAL, MERGED_TIFF, MERGED_PDF | 
 **memo** | **String**| Adding field for future use. Please leave blank at this time.   Length: N/A    Valid Values/Format: Alphanumeric | [optional] 

### Return type

[**DocumentResponseStructure**](DocumentResponseStructure.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveCaseFilingImageStatus

> CaseFilingImageStatusResponse retrieveCaseFilingImageStatus(body)



Issuers and acquirers use this endpoint to search documents that have a specific status (completed, pending, failed, unavailable, and document not applicable) for case filings.   Note: For customers with high volumes of chargebacks or large numbers of BINs, Mastercom recommends using the Case Filing Status endpoint rather than the Case Filing Image Status endpoint.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.CaseFilingApi();
let body = new MasterCom.CaseFilingImageStatusRequest(); // CaseFilingImageStatusRequest | Case Filing information
apiInstance.retrieveCaseFilingImageStatus(body, (error, data, response) => {
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
 **body** | [**CaseFilingImageStatusRequest**](CaseFilingImageStatusRequest.md)| Case Filing information | 

### Return type

[**CaseFilingImageStatusResponse**](CaseFilingImageStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveCaseFilingStatus

> CaseFilingStatusResponse retrieveCaseFilingStatus(body)



Issuers and acquirers use this endpoint to search for the status of documents of a specific list of cases.   Note: issuers and acquirers may send a maximum of 2,000 case IDs within a single request.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.CaseFilingApi();
let body = new MasterCom.CaseFilingStatusRequest(); // CaseFilingStatusRequest | Case Filing information
apiInstance.retrieveCaseFilingStatus(body, (error, data, response) => {
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
 **body** | [**CaseFilingStatusRequest**](CaseFilingStatusRequest.md)| Case Filing information | 

### Return type

[**CaseFilingStatusResponse**](CaseFilingStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveClaims

> CaseFilingClaimsResponse retrieveClaims(body)



Issuers or acquirers use this endpoint to retrieve a list of claims associated with existing cases.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.CaseFilingApi();
let body = new MasterCom.CaseFilingClaimsRequest(); // CaseFilingClaimsRequest | Case Filing Retrieve Claims request information
apiInstance.retrieveClaims(body, (error, data, response) => {
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
 **body** | [**CaseFilingClaimsRequest**](CaseFilingClaimsRequest.md)| Case Filing Retrieve Claims request information | 

### Return type

[**CaseFilingClaimsResponse**](CaseFilingClaimsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCaseFiling

> CaseFilingResponse updateCaseFiling(caseId, body)



Issuers or acquirers use this endpoint to take action (accept, reject, rebut, escalate, withdraw) on a case filing. Issuers and acquirers may take action with or without attaching documents.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.CaseFilingApi();
let caseId = "536092"; // String | Case filing Id.   Length: 1-19   Valid Values/Format: Numeric
let body = new MasterCom.UpdateCaseRequest(); // UpdateCaseRequest | Update Case Filing information
apiInstance.updateCaseFiling(caseId, body, (error, data, response) => {
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
 **caseId** | **String**| Case filing Id.   Length: 1-19   Valid Values/Format: Numeric | 
 **body** | [**UpdateCaseRequest**](UpdateCaseRequest.md)| Update Case Filing information | 

### Return type

[**CaseFilingResponse**](CaseFilingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

