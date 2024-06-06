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
    instance = new MasterCom.GetQueueContentRequest();
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

  describe('GetQueueContentRequest', function() {
    it('should create an instance of GetQueueContentRequest', function() {
      // uncomment below and update the code to test GetQueueContentRequest
      //var instance = new MasterCom.GetQueueContentRequest();
      //expect(instance).to.be.a(MasterCom.GetQueueContentRequest);
    });

    it('should have the property queueName (base name: "queueName")', function() {
      // uncomment below and update the code to test the property queueName
      //var instance = new MasterCom.GetQueueContentRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedDateFrom (base name: "lastModifiedDateFrom")', function() {
      // uncomment below and update the code to test the property lastModifiedDateFrom
      //var instance = new MasterCom.GetQueueContentRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedDateTo (base name: "lastModifiedDateTo")', function() {
      // uncomment below and update the code to test the property lastModifiedDateTo
      //var instance = new MasterCom.GetQueueContentRequest();
      //expect(instance).to.be();
    });

    it('should have the property pageNb (base name: "pageNb")', function() {
      // uncomment below and update the code to test the property pageNb
      //var instance = new MasterCom.GetQueueContentRequest();
      //expect(instance).to.be();
    });

  });

}));
