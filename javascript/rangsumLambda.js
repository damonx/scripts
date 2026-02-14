const range = (start, end, step = 1) => {
  if (start === end) return [];

  const length = Math.floor(Math.abs((end - start) / step)) + 1;

  return Array.from({ length }, (_, i) => start + i * step);
};

const sum = numbers => numbers.reduce((total, number) => total + number, 0);

