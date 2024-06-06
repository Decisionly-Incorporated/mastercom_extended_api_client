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
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MasterCom);
  }
}(this, function(expect, MasterCom) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MasterCom.CardholderDisputeChargebackDrfDocumentStructure();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CardholderDisputeChargebackDrfDocumentStructure', function() {
    it('should create an instance of CardholderDisputeChargebackDrfDocumentStructure', function() {
      // uncomment below and update the code to test CardholderDisputeChargebackDrfDocumentStructure
      //var instance = new MasterCom.CardholderDisputeChargebackDrfDocumentStructure();
      //expect(instance).to.be.a(MasterCom.CardholderDisputeChargebackDrfDocumentStructure);
    });

    it('should have the property transactionAmount (base name: "transactionAmount")', function() {
      // uncomment below and update the code to test the property transactionAmount
      //var instance = new MasterCom.CardholderDisputeChargebackDrfDocumentStructure();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new MasterCom.CardholderDisputeChargebackDrfDocumentStructure();
      //expect(instance).to.be();
    });

    it('should have the property deliveryDateOfGoodsOrServices (base name: "deliveryDateOfGoodsOrServices")', function() {
      // uncomment below and update the code to test the property deliveryDateOfGoodsOrServices
      //var instance = new MasterCom.CardholderDisputeChargebackDrfDocumentStructure();
      //expect(instance).to.be();
    });

    it('should have the property expectedDeliveryDateOfGoodOrServices (base name: "expectedDeliveryDateOfGoodOrServices")', function() {
      // uncomment below and update the code to test the property expectedDeliveryDateOfGoodOrServices
      //var instance = new MasterCom.CardholderDisputeChargebackDrfDocumentStructure();
      //expect(instance).to.be();
    });

    it('should have the property returnDate (base name: "returnDate")', function() {
      // uncomment below and update the code to test the property returnDate
      //var instance = new MasterCom.CardholderDisputeChargebackDrfDocumentStructure();
      //expect(instance).to.be();
    });

    it('should have the property cancellationDate (base name: "cancellationDate")', function() {
      // uncomment below and update the code to test the property cancellationDate
      //var instance = new MasterCom.CardholderDisputeChargebackDrfDocumentStructure();
      //expect(instance).to.be();
    });

    it('should have the property cardholderParticipation (base name: "cardholderParticipation")', function() {
      // uncomment below and update the code to test the property cardholderParticipation
      //var instance = new MasterCom.CardholderDisputeChargebackDrfDocumentStructure();
      //expect(instance).to.be();
    });

    it('should have the property disputeDetails (base name: "disputeDetails")', function() {
      // uncomment below and update the code to test the property disputeDetails
      //var instance = new MasterCom.CardholderDisputeChargebackDrfDocumentStructure();
      //expect(instance).to.be();
    });

    it('should have the property chargebackRepresentative (base name: "chargebackRepresentative")', function() {
      // uncomment below and update the code to test the property chargebackRepresentative
      //var instance = new MasterCom.CardholderDisputeChargebackDrfDocumentStructure();
      //expect(instance).to.be();
    });

  });

}));