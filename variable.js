
// Simple manager for 10 values that must sum to at most 330.
const MAX_POINTS = 330;
const COUNT = 10;
const values = new Array(COUNT).fill(0);

function getValues() {
	return values.slice();
}

function getSum() {
	return values.reduce((a, b) => a + b, 0);
}

function getRemaining() {
	return MAX_POINTS - getSum();
}

// Set value at index (0-9). If requested value would make sum > MAX_POINTS,
// it will be clamped to the highest allowed number so total stays <= MAX_POINTS.
// Returns the actual value set.
function setValue(index, requested) {
	if (!Number.isInteger(index) || index < 0 || index >= COUNT) {
		throw new RangeError('index must be integer between 0 and 9');
	}
	if (typeof requested !== 'number' || Number.isNaN(requested)) {
		throw new TypeError('requested must be a number');
	}
	// don't allow negative numbers; clamp lower bound to 0
	let value = Math.max(0, Math.floor(requested));

	const current = values[index];
	const otherSum = getSum() - current;
	const maxAllowedForIndex = MAX_POINTS - otherSum;

	if (value > maxAllowedForIndex) value = maxAllowedForIndex;

	values[index] = value;
	return value;
}

// Example helpers for UI integration
function increment(index, delta = 1) {
	return setValue(index, values[index] + delta);
}

function reset() {
	for (let i = 0; i < COUNT; i++) values[i] = 0;
}

// Exports for Node/browser
if (typeof module !== 'undefined' && module.exports) {
	module.exports = { getValues, getSum, getRemaining, setValue, increment, reset };
} else {
	window.pointManager = { getValues, getSum, getRemaining, setValue, increment, reset };
}
