// Utility: flatten a single level of nested arrays
function flattenOne(nestedArrays) {
	if (!Array.isArray(nestedArrays)) return [];
	return nestedArrays.reduce((acc, cur) => acc.concat(cur), []);
}

// Utility: map each item then flatten one level (flatMap)
function flatMap(arr, mapper) {
	return flattenOne(arr.map(mapper));
}

// Example usage when run directly
if (require.main === module) {
	const arrays = [[1, 2, 3], [4, 5], [6]];
	console.log(flattenOne(arrays));
	// → [1, 2, 3, 4, 5, 6]
}

module.exports = { flattenOne, flatMap };