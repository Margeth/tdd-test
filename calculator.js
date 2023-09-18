const mathOperations = {
    sum: (a, b) => a + b,
    diff: (a, b) => a - b,
    product: (a, b) => a * b,
    divide: (a, b) => (b === 0 ? 'Cannot divide by zero' : a / b),
};

module.exports = mathOperations;
