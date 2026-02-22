class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (error) {
      if (error instanceof MultiplicatorUnitFailure) {
        // 这是我们预期的错误 → 继续重试
        console.log("Retrying...");
      } else {
        // 不是我们要处理的错误 → 重新抛出
        throw error;
      }
    }
  }
}


console.log(reliableMultiply(8, 8));
// → 64