# MasterCom.QueuesApi

All URIs are relative to *https://api.mastercard.com/mastercom*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getQueueSummary**](QueuesApi.md#getQueueSummary) | **GET** /v6/queues | 
[**getQueueSummaryPost**](QueuesApi.md#getQueueSummaryPost) | **POST** /v6/queues | 
[**getQueues**](QueuesApi.md#getQueues) | **GET** /v6/queues/names | 



## getQueueSummary

> [ClaimSummary] getQueueSummary(queueName)



An issuer or acquirer uses this endpoint to retrieve a list of claims from a queue. Claims are sorted by last modified date in descending order.   Note: The maximum amount of claims returned by the Retrieve Claims from Queue endpoint varies by payload size and request time. Issuers and acquirers should use the Retrieve Claims from Queue With Date Interval endpoint if they expect more than 10,000 claims.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.QueuesApi();
let queueName = "Rejects"; // String | The queue to be queried for a list of claims.   Length: 1-30   Valid Values/Format: Alpha
apiInstance.getQueueSummary(queueName, (error, data, response) => {
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
 **queueName** | **String**| The queue to be queried for a list of claims.   Length: 1-30   Valid Values/Format: Alpha | 

### Return type

[**[ClaimSummary]**](ClaimSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getQueueSummaryPost

> QueueContentSummary getQueueSummaryPost(body)



An issuer or acquirer uses this endpoint to retrieve a list of claims from a queue within a date interval. Claims are sorted by last modified date in descending order.  Note: The response is paginated with up to 2,000 claims per page. The total number of pages is included in the response.  Note: To get exact pageCount the lastModifiedDateFrom and lastModifiedDateTo are required and the date range should be less than or equal to 5 days in the request.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.QueuesApi();
let body = new MasterCom.GetQueueContentRequest(); // GetQueueContentRequest | Get queue content request
apiInstance.getQueueSummaryPost(body, (error, data, response) => {
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
 **body** | [**GetQueueContentRequest**](GetQueueContentRequest.md)| Get queue content request | 

### Return type

[**QueueContentSummary**](QueueContentSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getQueues

> [Queue] getQueues()



An issuer or acquirer uses this endpoint to retrieve a list of queues.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.QueuesApi();
apiInstance.getQueues((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Queue]**](Queue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

