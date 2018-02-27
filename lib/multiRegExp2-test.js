'use strict';

var _multiRegExp = require('./multiRegExp2');

var _multiRegExp2 = _interopRequireDefault(_multiRegExp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testCaseNr = 0;

var assertRegExpConversion = function assertRegExpConversion(initial, expected) {
  var result = new _multiRegExp2.default(initial).regexp;

  testCaseNr++;
  if (result.source === expected) {
    console.log('TestCase ' + testCaseNr + ' passed: ' + initial.source + ' => ' + result.source + ' === ' + expected);
  } else {
    console.error('TestCase ' + testCaseNr + ' failed: Asserting that ' + initial.source + ' => ' + result.source + ' === ' + expected);
  }
};

var assertRegExpExecution = function assertRegExpExecution(func, expected) {
  var result = func();

  var fStr = func.toString();
  var funcBody = fStr.substring(fStr.indexOf('{') + 1, fStr.lastIndexOf('}')).trim();

  testCaseNr++;
  if (JSON.stringify(result) === JSON.stringify(expected)) {
    console.log('TestCase ' + testCaseNr + ' passed: ' + funcBody + ' => ' + JSON.stringify(expected));
  } else {
    console.error('TestCase ' + testCaseNr + ' failed. Asserting that ' + JSON.stringify(result) + ' === ' + JSON.stringify(expected));
  }
};

// ### Beginning of TestCases #########################################################################

assertRegExpConversion(/a(?:(b))?/, "(a)(?:(b))?");
assertRegExpConversion(/a(?:c(b))?/, "(a)(?:(c)(b))?");

assertRegExpExecution(function () {
  return new _multiRegExp2.default(/\(/).execForAllGroups("a(b");
}, [{ match: "(", start: 1, end: 2 }]);
//# sourceMappingURL=multiRegExp2-test.js.map