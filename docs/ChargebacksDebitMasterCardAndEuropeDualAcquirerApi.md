# MasterCom.ChargebacksDebitMasterCardAndEuropeDualAcquirerApi

All URIs are relative to *https://api.mastercard.com/mastercom*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acknowledgeChargebacksDebitMC**](ChargebacksDebitMasterCardAndEuropeDualAcquirerApi.md#acknowledgeChargebacksDebitMC) | **PUT** /v6/chargebacks/debitmc/acknowledge | 
[**createChargebackDebitMC**](ChargebacksDebitMasterCardAndEuropeDualAcquirerApi.md#createChargebackDebitMC) | **POST** /v6/claims/{claim-id}/chargebacks/debitmc | 
[**createChargebackReversalDebitMC**](ChargebacksDebitMasterCardAndEuropeDualAcquirerApi.md#createChargebackReversalDebitMC) | **POST** /v6/claims/{claim-id}/chargebacks/debitmc/{chargeback-id}/reversal | 
[**getChargebackDocDebitMC**](ChargebacksDebitMasterCardAndEuropeDualAcquirerApi.md#getChargebackDocDebitMC) | **GET** /v6/claims/{claim-id}/chargebacks/debitmc/{chargeback-id}/documents | 
[**retrieveChargebackImageStatusDebitMC**](ChargebacksDebitMasterCardAndEuropeDualAcquirerApi.md#retrieveChargebackImageStatusDebitMC) | **PUT** /v6/chargebacks/debitmc/imagestatus | 
[**retrieveChargebackStatusDebitMC**](ChargebacksDebitMasterCardAndEuropeDualAcquirerApi.md#retrieveChargebackStatusDebitMC) | **PUT** /v6/chargebacks/debitmc/status | 
[**updateChargebackDebitMC**](ChargebacksDebitMasterCardAndEuropeDualAcquirerApi.md#updateChargebackDebitMC) | **PUT** /v6/claims/{claim-id}/chargebacks/debitmc/{chargeback-id} | 



## acknowledgeChargebacksDebitMC

> ChargebackMarkProcessedResponse acknowledgeChargebacksDebitMC(body)



Issuers and acquirers use this endpoint to acknowledge a chargeback or second presentment. Acknowledging a chargeback or second presentment moves the claim from the Unworked queue to the Worked queue. Acknowledging the chargeback or second presentment does not close the claim. Issuers and acquirers may take further actions on acknowledged claims.   Note: for efficient processing, issuers and acquirers should send 100 acknowledgments or fewer in a single request.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.ChargebacksDebitMasterCardAndEuropeDualAcquirerApi();
let body = new MasterCom.ChargebackMarkProcessedRequest(); // ChargebackMarkProcessedRequest | Chargeback Receiver information
apiInstance.acknowledgeChargebacksDebitMC(body, (error, data, response) => {
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
 **body** | [**ChargebackMarkProcessedRequest**](ChargebackMarkProcessedRequest.md)| Chargeback Receiver information | 

### Return type

[**ChargebackMarkProcessedResponse**](ChargebackMarkProcessedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createChargebackDebitMC

> ChargebackResponse createChargebackDebitMC(claimId, body)



Issuers use this endpoint to create chargebacks for Debit Mastercard or Europe Dual Acquirer transactions and optionally to upload supporting documents. Issuers should only use this endpoint when the transaction has a single-message issuer, dual-message acquirer, and a transaction without a PIN.   Note: If the API call to this endpoint times out, customers should use the Chargeback Status or Retrieve Claim endpoint to determine the success or failure of document processing.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.ChargebacksDebitMasterCardAndEuropeDualAcquirerApi();
let claimId = "200002020654"; // String | Claim Id where the chargeback will be added.   Length: 1-19   Valid Values/Format: Numeric
let body = new MasterCom.CreateChargebackSingleRequest(); // CreateChargebackSingleRequest | Create Chargeback information
apiInstance.createChargebackDebitMC(claimId, body, (error, data, response) => {
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
 **claimId** | **String**| Claim Id where the chargeback will be added.   Length: 1-19   Valid Values/Format: Numeric | 
 **body** | [**CreateChargebackSingleRequest**](CreateChargebackSingleRequest.md)| Create Chargeback information | 

### Return type

[**ChargebackResponse**](ChargebackResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createChargebackReversalDebitMC

> ChargebackResponse createChargebackReversalDebitMC(claimId, chargebackId, body)



Issuers use this endpoint to reverse an existing Debit Mastercard or Europe Dual Acquirer chargeback when they create a chargeback in error.   Note: issuers may only create reversals on chargebacks after the chargebacks are processed by Mastercard Debit Switch (MDS).

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.ChargebacksDebitMasterCardAndEuropeDualAcquirerApi();
let claimId = "200002020654"; // String | Claim Id for the chargeback.   Length: 1-19   Valid Values/Format: Numeric
let chargebackId = "300018439680"; // String | Chargeback Id.   Length: 1-19   Valid Values/Format: Numeric
let body = new MasterCom.CreateChargebackSingleReversalRequest(); // CreateChargebackSingleReversalRequest | Create Chargeback Reversal information
apiInstance.createChargebackReversalDebitMC(claimId, chargebackId, body, (error, data, response) => {
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
 **claimId** | **String**| Claim Id for the chargeback.   Length: 1-19   Valid Values/Format: Numeric | 
 **chargebackId** | **String**| Chargeback Id.   Length: 1-19   Valid Values/Format: Numeric | 
 **body** | [**CreateChargebackSingleReversalRequest**](CreateChargebackSingleReversalRequest.md)| Create Chargeback Reversal information | 

### Return type

[**ChargebackResponse**](ChargebackResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getChargebackDocDebitMC

> DocumentResponseStructure getChargebackDocDebitMC(claimId, chargebackId, format)



Issuers and acquirers use this endpoint to retrieve documents in a desired format associated with any type of chargeback.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.ChargebacksDebitMasterCardAndEuropeDualAcquirerApi();
let claimId = "200002020654"; // String | The Claim Id.   Length: 1-19   Valid Values/Format: Numeric
let chargebackId = "300002063556"; // String | Chargeback Id.   Length: 1-19   Valid Values/Format: Numeric
let format = "ORIGINAL"; // String | File format.   Length: 8-11   Valid Values/Format: ORIGINAL, MERGED_TIFF, MERGED_PDF
apiInstance.getChargebackDocDebitMC(claimId, chargebackId, format, (error, data, response) => {
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
 **chargebackId** | **String**| Chargeback Id.   Length: 1-19   Valid Values/Format: Numeric | 
 **format** | **String**| File format.   Length: 8-11   Valid Values/Format: ORIGINAL, MERGED_TIFF, MERGED_PDF | 

### Return type

[**DocumentResponseStructure**](DocumentResponseStructure.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveChargebackImageStatusDebitMC

> ChargebackImageStatusResponse retrieveChargebackImageStatusDebitMC(body)



Issuers and acquirers use this endpoint to search for documents that have a specific status (completed, pending, failed, unavailable, and document not applicable) for chargebacks.   Note: For customers with high volumes of chargebacks or large numbers of BINs, Mastercom recommends using the Chargebacks Status endpoint rather than the Chargebacks Image Status endpoint.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.ChargebacksDebitMasterCardAndEuropeDualAcquirerApi();
let body = new MasterCom.ChargebackImageStatusRequest(); // ChargebackImageStatusRequest | Chargeback information
apiInstance.retrieveChargebackImageStatusDebitMC(body, (error, data, response) => {
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
 **body** | [**ChargebackImageStatusRequest**](ChargebackImageStatusRequest.md)| Chargeback information | 

### Return type

[**ChargebackImageStatusResponse**](ChargebackImageStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveChargebackStatusDebitMC

> ChargebackStatusResponse retrieveChargebackStatusDebitMC(body)



Issuers and acquirers use this endpoint to search for the status of documents of a specific list of claim IDs and chargeback IDs.   Note: issuers and acquirers may send a maximum of 2,000 chargeback IDs within a single request.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.ChargebacksDebitMasterCardAndEuropeDualAcquirerApi();
let body = new MasterCom.ChargebackStatusRequest(); // ChargebackStatusRequest | Chargeback information
apiInstance.retrieveChargebackStatusDebitMC(body, (error, data, response) => {
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
 **body** | [**ChargebackStatusRequest**](ChargebackStatusRequest.md)| Chargeback information | 

### Return type

[**ChargebackStatusResponse**](ChargebackStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateChargebackDebitMC

> ChargebackResponse updateChargebackDebitMC(claimId, chargebackId, body)



Issuers use this endpoint to update an existing Debit Mastercard or Europe Dual Acquirer chargeback with memos or documents if they did not attach memos or documents when creating the chargeback.   Note: If the API call to this endpoint times out, customers should use the Chargeback Status or Retrieve Claim endpoint to determine the success or failure of document processing.

### Example

```javascript
import MasterCom from 'master_com';

let apiInstance = new MasterCom.ChargebacksDebitMasterCardAndEuropeDualAcquirerApi();
let claimId = "200002020654"; // String | Claim Id for the chargeback.   Length: 1-19   Valid Values/Format: Numeric
let chargebackId = "300018439680"; // String | Chargeback Id.   Length: 1-19   Valid Values/Format: Numeric
let body = new MasterCom.UpdateChargebackRequest(); // UpdateChargebackRequest | Update Chargeback information
apiInstance.updateChargebackDebitMC(claimId, chargebackId, body, (error, data, response) => {
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
 **claimId** | **String**| Claim Id for the chargeback.   Length: 1-19   Valid Values/Format: Numeric | 
 **chargebackId** | **String**| Chargeback Id.   Length: 1-19   Valid Values/Format: Numeric | 
 **body** | [**UpdateChargebackRequest**](UpdateChargebackRequest.md)| Update Chargeback information | 

### Return type

[**ChargebackResponse**](ChargebackResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

