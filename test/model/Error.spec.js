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
    instance = new MasterCom.Error();
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

  describe('Error', function() {
    it('should create an instance of Error', function() {
      // uncomment below and update the code to test Error
      //var instance = new MasterCom.Error();
      //expect(instance).to.be.a(MasterCom.Error);
    });

    it('should have the property requestId (base name: "RequestId")', function() {
      // uncomment below and update the code to test the property requestId
      //var instance = new MasterCom.Error();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "Source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new MasterCom.Error();
      //expect(instance).to.be();
    });

    it('should have the property reasonCode (base name: "ReasonCode")', function() {
      // uncomment below and update the code to test the property reasonCode
      //var instance = new MasterCom.Error();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new MasterCom.Error();
      //expect(instance).to.be();
    });

    it('should have the property recoverable (base name: "Recoverable")', function() {
      // uncomment below and update the code to test the property recoverable
      //var instance = new MasterCom.Error();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "Details")', function() {
      // uncomment below and update the code to test the property details
      //var instance = new MasterCom.Error();
      //expect(instance).to.be();
    });

  });

}));
