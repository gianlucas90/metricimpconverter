/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function (input) {
    let num = input.match(/\d+\.\d+\/\d+|\d+\.\d+|\d\/\d|\d+|\d+/g).toString();
    return eval(num);
    // return Math.round((num + Number.EPSILON) * 100) / 100;
  };

  this.getUnit = function (input) {
    return input.match(/[a-zA-Z]+/g).toString();
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
        console.log(`Sorry, we are out of cases.`);
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
