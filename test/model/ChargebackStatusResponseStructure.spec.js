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
    instance = new MasterCom.ChargebackStatusResponseStructure();
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

  describe('ChargebackStatusResponseStructure', function() {
    it('should create an instance of ChargebackStatusResponseStructure', function() {
      // uncomment below and update the code to test ChargebackStatusResponseStructure
      //var instance = new MasterCom.ChargebackStatusResponseStructure();
      //expect(instance).to.be.a(MasterCom.ChargebackStatusResponseStructure);
    });

    it('should have the property chargebackId (base name: "chargebackId")', function() {
      // uncomment below and update the code to test the property chargebackId
      //var instance = new MasterCom.ChargebackStatusResponseStructure();
      //expect(instance).to.be();
    });

    it('should have the property claimId (base name: "claimId")', function() {
      // uncomment below and update the code to test the property claimId
      //var instance = new MasterCom.ChargebackStatusResponseStructure();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new MasterCom.ChargebackStatusResponseStructure();
      //expect(instance).to.be();
    });

  });

}));