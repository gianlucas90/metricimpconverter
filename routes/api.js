/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get(function (req, res) {
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);

    let data;

    if (initUnit === 'invalid unit' && initNum === 'invalid number') {
      data = 'invalid number and unit';
    } else if (initUnit === 'invalid unit') {
      data = 'invalid unit';
    } else if (initNum === 'invalid number') {
      data = 'invalid number';
    } else {
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      );
      data = {
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: toString,
      };
    }

    res.json(data);
  });
};
