/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

const { init } = require('../server');

function ConvertHandler() {
  this.getNum = function (input) {
    let num = input.match(/\d+\.\d+\/\d+|\d+\.\d+|\d\/\d|\d+|\d+/g);
    if (!num) return 1;
    return eval(num.toString());
  };

  this.getUnit = function (input) {
    let initUnit = input
      .toLowerCase()
      .match(/[a-zA-Z]+/g)
      .toString();

    switch (initUnit) {
      case 'gal':
        result = 'gal';
        break;
      case 'lbs':
        result = 'lbs';
        break;
      case 'lbs':
        result = 'lbs';
        break;

      case 'l':
        result = 'L';
        break;
      case 'kg':
        result = 'kg';
        break;
      case 'km':
        result = 'km';
        break;
      default:
        result = 'invalid unit';
    }

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    switch (initUnit) {
      // imp to metric
      case 'gal':
        result = 'L';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'mi':
        result = 'km';
        break;

      // metric to imp
      case 'L':
        result = 'gal';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = 'not defined return unit';
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit) {
      // imp to metric
      case 'gal':
        result = galToL * initNum;
        break;
      case 'lbs':
        result = lbsToKg * initNum;
        break;
      case 'mi':
        result = miToKm * initNum;
        break;

      // metric to imp
      case 'L':
        result = initNum / galToL;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        console.log(`Sorry, we are out of cases.`);
    }

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    result = `${initNum} ${getFullName(
      initUnit
    )} converts to ${returnNum} ${getFullName(returnUnit)}`;

    return result;

    function getFullName(input) {
      switch (input) {
        // imperial
        case 'gal':
          return 'gallons';
          break;
        case 'lbs':
          return 'libes';
          break;
        case 'mi':
          return 'miles';
          break;

        // metric
        case 'L':
          return 'litres';
          break;
        case 'kg':
          return 'kilograms';
          break;
        case 'km':
          return 'kilometers';
          break;
        default:
          console.log(`Sorry, we are out of cases.`);
          return;
      }
    }
  };
}

module.exports = ConvertHandler;
