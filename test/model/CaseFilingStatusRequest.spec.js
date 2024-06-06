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
    instance = new MasterCom.CaseFilingStatusRequest();
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

  describe('CaseFilingStatusRequest', function() {
    it('should create an instance of CaseFilingStatusRequest', function() {
      // uncomment below and update the code to test CaseFilingStatusRequest
      //var instance = new MasterCom.CaseFilingStatusRequest();
      //expect(instance).to.be.a(MasterCom.CaseFilingStatusRequest);
    });

    it('should have the property caseFilingList (base name: "caseFilingList")', function() {
      // uncomment below and update the code to test the property caseFilingList
      //var instance = new MasterCom.CaseFilingStatusRequest();
      //expect(instance).to.be();
    });

  });

}));
