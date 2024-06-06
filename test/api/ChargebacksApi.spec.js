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
    instance = new MasterCom.ChargebacksApi();
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

  describe('ChargebacksApi', function() {
    describe('acknowledgeChargebacks', function() {
      it('should call acknowledgeChargebacks successfully', function(done) {
        //uncomment below and update the code to test acknowledgeChargebacks
        //instance.acknowledgeChargebacks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createChargeback', function() {
      it('should call createChargeback successfully', function(done) {
        //uncomment below and update the code to test createChargeback
        //instance.createChargeback(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createChargebackReversal', function() {
      it('should call createChargebackReversal successfully', function(done) {
        //uncomment below and update the code to test createChargebackReversal
        //instance.createChargebackReversal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChargebackDoc', function() {
      it('should call getChargebackDoc successfully', function(done) {
        //uncomment below and update the code to test getChargebackDoc
        //instance.getChargebackDoc(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDataForCreateChargeback', function() {
      it('should call getDataForCreateChargeback successfully', function(done) {
        //uncomment below and update the code to test getDataForCreateChargeback
        //instance.getDataForCreateChargeback(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveChargebackImageStatus', function() {
      it('should call retrieveChargebackImageStatus successfully', function(done) {
        //uncomment below and update the code to test retrieveChargebackImageStatus
        //instance.retrieveChargebackImageStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveChargebackStatus', function() {
      it('should call retrieveChargebackStatus successfully', function(done) {
        //uncomment below and update the code to test retrieveChargebackStatus
        //instance.retrieveChargebackStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateChargeback', function() {
      it('should call updateChargeback successfully', function(done) {
        //uncomment below and update the code to test updateChargeback
        //instance.updateChargeback(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
