# MasterCom.HealthCheckApi

All URIs are relative to *https://api.mastercard.com/mastercom*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthcheck**](HealthCheckApi.md#healthcheck) | **GET** /v6/healthcheck | 



## healthcheck

> HealthCheckResponse healthcheck()



This resource retrieves the status of the Mastercom API suite.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.HealthCheckApi();
apiInstance.healthcheck((error, data, response) => {
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

[**HealthCheckResponse**](HealthCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

