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
    instance = new MasterCom.FraudDrfDocumentStructure();
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

  describe('FraudDrfDocumentStructure', function() {
    it('should create an instance of FraudDrfDocumentStructure', function() {
      // uncomment below and update the code to test FraudDrfDocumentStructure
      //var instance = new MasterCom.FraudDrfDocumentStructure();
      //expect(instance).to.be.a(MasterCom.FraudDrfDocumentStructure);
    });

    it('should have the property numberOfItems (base name: "numberOfItems")', function() {
      // uncomment below and update the code to test the property numberOfItems
      //var instance = new MasterCom.FraudDrfDocumentStructure();
      //expect(instance).to.be();
    });

    it('should have the property types (base name: "types")', function() {
      // uncomment below and update the code to test the property types
      //var instance = new MasterCom.FraudDrfDocumentStructure();
      //expect(instance).to.be();
    });

    it('should have the property additionalInformation (base name: "additionalInformation")', function() {
      // uncomment below and update the code to test the property additionalInformation
      //var instance = new MasterCom.FraudDrfDocumentStructure();
      //expect(instance).to.be();
    });

    it('should have the property chargebackRepresentative (base name: "chargebackRepresentative")', function() {
      // uncomment below and update the code to test the property chargebackRepresentative
      //var instance = new MasterCom.FraudDrfDocumentStructure();
      //expect(instance).to.be();
    });

    it('should have the property cardIssuerRegion (base name: "cardIssuerRegion")', function() {
      // uncomment below and update the code to test the property cardIssuerRegion
      //var instance = new MasterCom.FraudDrfDocumentStructure();
      //expect(instance).to.be();
    });

    it('should have the property cardholderVerificationMethod (base name: "cardholderVerificationMethod")', function() {
      // uncomment below and update the code to test the property cardholderVerificationMethod
      //var instance = new MasterCom.FraudDrfDocumentStructure();
      //expect(instance).to.be();
    });

  });

}));
