const range = function (start, end, step = 1) {
    let result = [];
    if (start === end) return result;
    if (start > end) {
        for (let i = start; i >= end; i += step) {
            result.push(i);
        }
    } else {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    }
    return result;
};

const sum = function (numbers) {
    let total = 0;
    for (let number of numbers)
        total += number;
    return total;
};
