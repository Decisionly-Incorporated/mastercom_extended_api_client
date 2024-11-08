"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
    }
    Queue.getAttributeTypeMap = function () {
        return Queue.attributeTypeMap;
    };
    Queue.discriminator = undefined;
    Queue.attributeTypeMap = [
        {
            "name": "queue",
            "baseName": "queue",
            "type": "QueueDetails"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Array<QueueFieldNameValue>>"
        }
    ];
    return Queue;
}());
exports.Queue = Queue;