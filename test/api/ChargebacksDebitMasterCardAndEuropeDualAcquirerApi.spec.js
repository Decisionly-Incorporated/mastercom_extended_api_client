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
    instance = new MasterCom.ChargebacksDebitMasterCardAndEuropeDualAcquirerApi();
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

  describe('ChargebacksDebitMasterCardAndEuropeDualAcquirerApi', function() {
    describe('acknowledgeChargebacksDebitMC', function() {
      it('should call acknowledgeChargebacksDebitMC successfully', function(done) {
        //uncomment below and update the code to test acknowledgeChargebacksDebitMC
        //instance.acknowledgeChargebacksDebitMC(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createChargebackDebitMC', function() {
      it('should call createChargebackDebitMC successfully', function(done) {
        //uncomment below and update the code to test createChargebackDebitMC
        //instance.createChargebackDebitMC(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createChargebackReversalDebitMC', function() {
      it('should call createChargebackReversalDebitMC successfully', function(done) {
        //uncomment below and update the code to test createChargebackReversalDebitMC
        //instance.createChargebackReversalDebitMC(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChargebackDocDebitMC', function() {
      it('should call getChargebackDocDebitMC successfully', function(done) {
        //uncomment below and update the code to test getChargebackDocDebitMC
        //instance.getChargebackDocDebitMC(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveChargebackImageStatusDebitMC', function() {
      it('should call retrieveChargebackImageStatusDebitMC successfully', function(done) {
        //uncomment below and update the code to test retrieveChargebackImageStatusDebitMC
        //instance.retrieveChargebackImageStatusDebitMC(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveChargebackStatusDebitMC', function() {
      it('should call retrieveChargebackStatusDebitMC successfully', function(done) {
        //uncomment below and update the code to test retrieveChargebackStatusDebitMC
        //instance.retrieveChargebackStatusDebitMC(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateChargebackDebitMC', function() {
      it('should call updateChargebackDebitMC successfully', function(done) {
        //uncomment below and update the code to test updateChargebackDebitMC
        //instance.updateChargebackDebitMC(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
