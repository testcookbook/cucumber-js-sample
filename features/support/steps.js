const {Given, Then, When} = require('cucumber');
const assert = require('assert');

let a, b, t;

Given('numbers {int} and {int}', function(int, int2) {
    a = int;
    b = int2;
});

When('they are added together', function() {
    t = a + b;
});

Then('the total should be {int}', function(int) {
	assert.equal(t, 7)
});