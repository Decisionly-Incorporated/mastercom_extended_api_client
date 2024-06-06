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
    instance = new MasterCom.TransactionSummary();
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

  describe('TransactionSummary', function() {
    it('should create an instance of TransactionSummary', function() {
      // uncomment below and update the code to test TransactionSummary
      //var instance = new MasterCom.TransactionSummary();
      //expect(instance).to.be.a(MasterCom.TransactionSummary);
    });

    it('should have the property authorizationSummaryCount (base name: "authorizationSummaryCount")', function() {
      // uncomment below and update the code to test the property authorizationSummaryCount
      //var instance = new MasterCom.TransactionSummary();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new MasterCom.TransactionSummary();
      //expect(instance).to.be();
    });

    it('should have the property authorizationSummary (base name: "authorizationSummary")', function() {
      // uncomment below and update the code to test the property authorizationSummary
      //var instance = new MasterCom.TransactionSummary();
      //expect(instance).to.be();
    });

  });

}));