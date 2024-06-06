# MasterCom.ReconciliationApi

All URIs are relative to *https://api.mastercard.com/mastercom*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reconReportDataAcknowledge**](ReconciliationApi.md#reconReportDataAcknowledge) | **POST** /v6/reconreport/data/request | 
[**reconReportDataRetrieval**](ReconciliationApi.md#reconReportDataRetrieval) | **POST** /v6/reconreport/data/retrieval/{reportIdentifier} | 



## reconReportDataAcknowledge

> ReconReportDataAcknowledgeResponse reconReportDataAcknowledge(reconDataRequest)



An issuer or acquirer uses this endpoint to request that Mastercom generate a reconciliation report or enhanced reconciliation report for a specified date range.   Note: The issuer or acquirer receives a unique report identifier in the response. Using the unique report identifier from this endpoint, the issuer or acquirer then retrieves the report from the Retrieve Reconciliation Report endpoint.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.ReconciliationApi();
let reconDataRequest = new MasterCom.ReconReportDataAcknowledgeRequest(); // ReconReportDataAcknowledgeRequest | Reconciliation data request
apiInstance.reconReportDataAcknowledge(reconDataRequest, (error, data, response) => {
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
 **reconDataRequest** | [**ReconReportDataAcknowledgeRequest**](ReconReportDataAcknowledgeRequest.md)| Reconciliation data request | 

### Return type

[**ReconReportDataAcknowledgeResponse**](ReconReportDataAcknowledgeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reconReportDataRetrieval

> ReconReportDataRetrivalResponse reconReportDataRetrieval(reportIdentifier)



An issuer or acquirer uses this endpoint to retrieve a reconciliation report or enhanced reconciliation report.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.ReconciliationApi();
let reportIdentifier = "123e4567-e89b-42d3-a456-556642440000"; // String | A reconciliation id that identifies the report to be retrieved.   Length: 36   Valid Values/Format: Alphanumeric
apiInstance.reconReportDataRetrieval(reportIdentifier, (error, data, response) => {
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
 **reportIdentifier** | **String**| A reconciliation id that identifies the report to be retrieved.   Length: 36   Valid Values/Format: Alphanumeric | 

### Return type

[**ReconReportDataRetrivalResponse**](ReconReportDataRetrivalResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

