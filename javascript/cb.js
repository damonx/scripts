const CircuitBreaker = require('opossum');

async function callService() {
  if (Math.random() > 0.5) {
    throw new Error('Service failed');
  }
  return "Success";
}

// 配置 CB
const breaker = new CircuitBreaker(callService, {
  timeout: 3000, // 超过3秒算失败
  errorThresholdPercentage: 50, // 失败率超过50%触发熔断
  resetTimeout: 5000 // 5秒后进入 half-open
});

// fallback
breaker.fallback(() => 'Fallback response');

// 调用
breaker.fire()
  .then(console.log)
  .catch(console.error);