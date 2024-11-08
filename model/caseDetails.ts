/**
 * Mastercom Extended API
 * The Mastercom Extended API consists of endpoints used by issuers and acquirers to manage Single Message System disputes.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: apisupport@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AmountDetails } from './amountDetails';
import { CaseActionHistory } from './caseActionHistory';

/**
* Details from an existing case.
*/
export class CaseDetails {
    /**
    * Current status of the case. *Valid Values:* OPEN, CLOSE 
    */
    'caseStatus'?: string;
    /**
    * Identifer used to specify if the case is a pre-arbitration, arbitration, pre-compliance, or compliance case.
    */
    'caseType'?: string;
    /**
    * Field used by customers to identify the specific case for internal auditing and tracing purposes.
    */
    'customerFilingNumber'?: string;
    /**
    * Reason code submitted for the pre-arbitration or arbitration case.
    */
    'reasonCode'?: string;
    'caseDisputeAmount'?: AmountDetails;
    /**
    * Identifier (issuer or acquirer) for the party filing the case.
    */
    'filingAs'?: string;
    /**
    * A unique number used to identify the party filing the case.
    */
    'filingIca'?: string;
    /**
    * A unique number used to identify the party the case was filed against.
    */
    'filedAgainstIca'?: string;
    /**
    * The name of the acceptor that should be recognizable by the cardholder and may include other descriptors, such as a store number.
    */
    'acceptorName'?: string;
    /**
    * Violation code submitted for the pre-compliance or compliance case.
    */
    'violationCode'?: string;
    /**
    * Date of the compliance violation.
    */
    'violationDate'?: string;
    /**
    * Date of the ruling by Mastercard Dispute Resolution Management.
    */
    'rulingDate'?: string;
    /**
    * Status of the ruling from Mastercard Dispute Resolution Management. Valid values are Reviewed, Filed In Error, Declined, Expired, Favor Sender, Favor Receiver.
    */
    'rulingStatus'?: string;
    /**
    * Identifier assigned by Mastercom to the claim, obtained from the ```POST /claims/searches``` endpoint. 
    */
    'claimId'?: string;
    /**
    * The identifier assigned by Mastercom Claims Manager to the claim.
    */
    'claimsManagerClaimId'?: string;
    /**
    * An array of actions taken by the customers on the case.
    */
    'caseActionHistories'?: Array<CaseActionHistory>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "caseStatus",
            "baseName": "caseStatus",
            "type": "string"
        },
        {
            "name": "caseType",
            "baseName": "caseType",
            "type": "string"
        },
        {
            "name": "customerFilingNumber",
            "baseName": "customerFilingNumber",
            "type": "string"
        },
        {
            "name": "reasonCode",
            "baseName": "reasonCode",
            "type": "string"
        },
        {
            "name": "caseDisputeAmount",
            "baseName": "caseDisputeAmount",
            "type": "AmountDetails"
        },
        {
            "name": "filingAs",
            "baseName": "filingAs",
            "type": "string"
        },
        {
            "name": "filingIca",
            "baseName": "filingIca",
            "type": "string"
        },
        {
            "name": "filedAgainstIca",
            "baseName": "filedAgainstIca",
            "type": "string"
        },
        {
            "name": "acceptorName",
            "baseName": "acceptorName",
            "type": "string"
        },
        {
            "name": "violationCode",
            "baseName": "violationCode",
            "type": "string"
        },
        {
            "name": "violationDate",
            "baseName": "violationDate",
            "type": "string"
        },
        {
            "name": "rulingDate",
            "baseName": "rulingDate",
            "type": "string"
        },
        {
            "name": "rulingStatus",
            "baseName": "rulingStatus",
            "type": "string"
        },
        {
            "name": "claimId",
            "baseName": "claimId",
            "type": "string"
        },
        {
            "name": "claimsManagerClaimId",
            "baseName": "claimsManagerClaimId",
            "type": "string"
        },
        {
            "name": "caseActionHistories",
            "baseName": "caseActionHistories",
            "type": "Array<CaseActionHistory>"
        }    ];

    static getAttributeTypeMap() {
        return CaseDetails.attributeTypeMap;
    }
}
