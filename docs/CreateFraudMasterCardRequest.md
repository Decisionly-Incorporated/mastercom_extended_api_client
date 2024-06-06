# MasterCom.CreateFraudMasterCardRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acctStatus** | **String** | Account status.   Length: 12-20   Valid Values/Format: ACCT_IS_OPEN, ACCT_HAS_BEEN_CLOSED | [optional] 
**chgbkIndicator** | **String** | Chargeback Indicator.   Length:    Valid Values/Format: (VALUES)/(Numeric, Alphanumeric, Special Char) | 
**cvcInvalidIndicator** | **String** | CVC Invalid Indicator.   Length: 1   Valid Values/Format: Y, *, M, N, P, U, ?, E | 
**deviceType** | **String** | Account Device Type.   Length: 1   Valid Values/Format: 1, 2, 3, 4, A, B, C, D, E, F, G, H, I, J | [optional] 
**fraudType** | **String** | Fraud Type.   Length: 2   Valid Values/Format: 00, 01, 02, 03 ,04 ,05, 06, 07, 51 | 
**reportDate** | **String** | Fraud Report Date.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd) | 
**subType** | **String** | Fraud Sub Type.   Length: 1   Valid Values/Format: K, N, P, U | 



## Enum: AcctStatusEnum


* `IS_OPEN` (value: `"ACCT_IS_OPEN"`)

* `HAS_BEEN_CLOSED` (value: `"ACCT_HAS_BEEN_CLOSED"`)





## Enum: ChgbkIndicatorEnum


* `0` (value: `"0"`)

* `1` (value: `"1"`)





## Enum: CvcInvalidIndicatorEnum


* `Y` (value: `"Y"`)

* `STAR` (value: `"*"`)

* `M` (value: `"M"`)

* `N` (value: `"N"`)

* `P` (value: `"P"`)

* `U` (value: `"U"`)

* `QUESTION_MARK` (value: `"?"`)

* `E` (value: `"E"`)





## Enum: DeviceTypeEnum


* `1` (value: `"1"`)

* `2` (value: `"2"`)

* `3` (value: `"3"`)

* `4` (value: `"4"`)

* `A` (value: `"A"`)

* `B` (value: `"B"`)

* `C` (value: `"C"`)

* `D` (value: `"D"`)

* `E` (value: `"E"`)

* `F` (value: `"F"`)

* `G` (value: `"G"`)

* `H` (value: `"H"`)

* `I` (value: `"I"`)

* `J` (value: `"J"`)





## Enum: FraudTypeEnum


* `00` (value: `"00"`)

* `01` (value: `"01"`)

* `02` (value: `"02"`)

* `03` (value: `"03"`)

* `04` (value: `"04"`)

* `05` (value: `"05"`)

* `06` (value: `"06"`)

* `07` (value: `"07"`)

* `51` (value: `"51"`)





## Enum: SubTypeEnum


* `K` (value: `"K"`)

* `N` (value: `"N"`)

* `P` (value: `"P"`)

* `U` (value: `"U"`)




