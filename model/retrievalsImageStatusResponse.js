"use strict";
/**
 * MasterCom
 * MasterCom
 *
 * The version of the OpenAPI document: v6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrievalsImageStatusResponse = void 0;
var RetrievalsImageStatusResponse = /** @class */ (function () {
    function RetrievalsImageStatusResponse() {
    }
    RetrievalsImageStatusResponse.getAttributeTypeMap = function () {
        return RetrievalsImageStatusResponse.attributeTypeMap;
    };
    RetrievalsImageStatusResponse.discriminator = undefined;
    RetrievalsImageStatusResponse.attributeTypeMap = [
        {
            "name": "retrievalImageStatusList",
            "baseName": "retrievalImageStatusList",
            "type": "Array<RetrievalsImageStatusResponseStructure>"
        }
    ];
    return RetrievalsImageStatusResponse;
}());
exports.RetrievalsImageStatusResponse = RetrievalsImageStatusResponse;