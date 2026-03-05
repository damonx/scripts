// crack.js

// 模拟真实密码
const correctPassword = "37";

// 模拟连接 WiFi
function joinWifi(networkID, code) {
  return new Promise((resolve, reject) => {
    console.log("Trying:", code);

    if (code === correctPassword) {
      // 完整密码正确
      resolve("Connected!");
    } else if (!correctPassword.startsWith(code)) {
      // 不是前缀，立刻失败
      reject("Wrong password");
    }
    // 如果是正确前缀但不完整
    // 什么也不做（保持 pending）
  });
}

// 超时包装函数
function withTimeout(promise, time) {
  return new Promise((resolve, reject) => {
    promise.then(resolve, reject);

    setTimeout(() => {
      reject("Timed out");
    }, time);
  });
}

// 破解函数（async 版本）
async function crackPasscode(networkID) {
  for (let code = "";;) {
    for (let digit = 0;; digit++) {
      let newCode = code + digit;

      try {
        await withTimeout(joinWifi(networkID, newCode), 100);
        return newCode;
      } catch (failure) {
        if (failure === "Timed out") {
          console.log("Prefix correct:", newCode);
          code = newCode;
          break;
        } else if (digit === 9) {
          throw failure;
        }
      }
    }
  }
}

// 运行
crackPasscode("MyWifi")
  .then(result => {
    console.log("\n✅ Password cracked:", result);
  })
  .catch(err => {
    console.error("❌ Failed:", err);
  });