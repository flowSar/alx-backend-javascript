const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should correctly round and sum two numbers', function () {
    assert.strictEqual(calculateNumber(1.4, 2.3), 3);
    assert.strictEqual(calculateNumber(1.5, 2.5), 4);
    assert.strictEqual(calculateNumber(0.1, 0.9), 1);
    assert.strictEqual(calculateNumber(-1.5, 1.5), 0);
    assert.strictEqual(calculateNumber(-0.9, 0.9), 0);
  });

  it('should handle rounding edge cases correctly', function () {
    assert.strictEqual(calculateNumber(0.499, 0.499), 1);
    assert.strictEqual(calculateNumber(1.5, 1.5), 4);
  });
});
