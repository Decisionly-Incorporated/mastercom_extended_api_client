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
exports.CaseTakeActionArbitration = void 0;
var CaseTakeActionArbitration = /** @class */ (function () {
    function CaseTakeActionArbitration() {
    }
    CaseTakeActionArbitration.getAttributeTypeMap = function () {
        return CaseTakeActionArbitration.attributeTypeMap;
    };
    CaseTakeActionArbitration.discriminator = undefined;
    CaseTakeActionArbitration.attributeTypeMap = [
        {
            "name": "action",
            "baseName": "action",
            "type": "CaseTakeActionArbitration.ActionEnum"
        },
        {
            "name": "documentUploadedId",
            "baseName": "documentUploadedId",
            "type": "string"
        },
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string"
        }
    ];
    return CaseTakeActionArbitration;
}());
exports.CaseTakeActionArbitration = CaseTakeActionArbitration;
(function (CaseTakeActionArbitration) {
    var ActionEnum;
    (function (ActionEnum) {
        ActionEnum[ActionEnum["Accept"] = 'ACCEPT'] = "Accept";
        ActionEnum[ActionEnum["Escalate"] = 'ESCALATE'] = "Escalate";
        ActionEnum[ActionEnum["Reject"] = 'REJECT'] = "Reject";
        ActionEnum[ActionEnum["Withdraw"] = 'WITHDRAW'] = "Withdraw";
    })(ActionEnum = CaseTakeActionArbitration.ActionEnum || (CaseTakeActionArbitration.ActionEnum = {}));
})(CaseTakeActionArbitration || (exports.CaseTakeActionArbitration = CaseTakeActionArbitration = {}));