# MasterCom.ClaimsApi

All URIs are relative to *https://api.mastercard.com/mastercom*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClaim**](ClaimsApi.md#createClaim) | **POST** /v6/claims | 
[**getClaimDetail**](ClaimsApi.md#getClaimDetail) | **GET** /v6/claims/{claim-id} | 
[**updateClaim**](ClaimsApi.md#updateClaim) | **PUT** /v6/claims/{claim-id} | 



## createClaim

> ClaimResponse createClaim(body)



Issuers use this endpoint to create a new claim, which is required before creating a retrieval request or a first chargeback. If an issuer attempts to create a duplicate claim on an original transaction, the issuer receives a error message with the claim ID of the existing claim. Acquirers are not able to create claims. They receive claims from disputes that issuers initiate.   Note: issuers must have a first presentment in order to create a claim.   Note: issuers cannot create claims on first presentments that acquirers have reversed.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.ClaimsApi();
let body = new MasterCom.CreateClaimRequest(); // CreateClaimRequest | Create Claim Request
apiInstance.createClaim(body, (error, data, response) => {
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
 **body** | [**CreateClaimRequest**](CreateClaimRequest.md)| Create Claim Request | 

### Return type

[**ClaimResponse**](ClaimResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getClaimDetail

> ClaimDetail getClaimDetail(claimId)



Issuers and acquirers use this endpoint to retrieve details for an existing claim, including any cases with which the claim is associated.   Note: the Retrieve endpoint for claims contains document statuses (completed, pending, failed, unavailable, and document not applicable) for all documents attached to dispute events within a claim. Issuers and acquirers do not have to make a separate call to obtain document statuses, making the use of this endpoint efficient.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.ClaimsApi();
let claimId = "200002020654"; // String | Claim Id.   Length: 1-19   Valid Values/Format: Numeric
apiInstance.getClaimDetail(claimId, (error, data, response) => {
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

[**ClaimDetail**](ClaimDetail.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateClaim

> ClaimResponse updateClaim(claimId, body)



Issuers use this endpoint to take an action (reopen or close) on an existing claim.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.ClaimsApi();
let claimId = "200002020654"; // String | Claim Id.   Length: 1-19   Valid Values/Format: Numeric
let body = new MasterCom.UpdateClaimRequest(); // UpdateClaimRequest | Update Claim Request
apiInstance.updateClaim(claimId, body, (error, data, response) => {
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
 **body** | [**UpdateClaimRequest**](UpdateClaimRequest.md)| Update Claim Request | 

### Return type

[**ClaimResponse**](ClaimResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

