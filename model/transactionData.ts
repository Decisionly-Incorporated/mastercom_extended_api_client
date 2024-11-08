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
import { TransactionSingleMessage } from './transactionSingleMessage';

/**
* Root element for a list of transaction details.
*/
export class TransactionData {
    /**
    * Aggregated single list of all Single Message components of the transaction search results.
    */
    'singleMessages'?: Array<TransactionSingleMessage>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "singleMessages",
            "baseName": "singleMessages",
            "type": "Array<TransactionSingleMessage>"
        }    ];

    static getAttributeTypeMap() {
        return TransactionData.attributeTypeMap;
    }
}
