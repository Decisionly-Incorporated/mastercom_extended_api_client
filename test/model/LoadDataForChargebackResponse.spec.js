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
    instance = new MasterCom.LoadDataForChargebackResponse();
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

  describe('LoadDataForChargebackResponse', function() {
    it('should create an instance of LoadDataForChargebackResponse', function() {
      // uncomment below and update the code to test LoadDataForChargebackResponse
      //var instance = new MasterCom.LoadDataForChargebackResponse();
      //expect(instance).to.be.a(MasterCom.LoadDataForChargebackResponse);
    });

    it('should have the property currencies (base name: "currencies")', function() {
      // uncomment below and update the code to test the property currencies
      //var instance = new MasterCom.LoadDataForChargebackResponse();
      //expect(instance).to.be();
    });

    it('should have the property docIndicators (base name: "docIndicators")', function() {
      // uncomment below and update the code to test the property docIndicators
      //var instance = new MasterCom.LoadDataForChargebackResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageTexts (base name: "messageTexts")', function() {
      // uncomment below and update the code to test the property messageTexts
      //var instance = new MasterCom.LoadDataForChargebackResponse();
      //expect(instance).to.be();
    });

    it('should have the property reasonCodes (base name: "reasonCodes")', function() {
      // uncomment below and update the code to test the property reasonCodes
      //var instance = new MasterCom.LoadDataForChargebackResponse();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new MasterCom.LoadDataForChargebackResponse();
      //expect(instance).to.be();
    });

  });

}));
