// test.js
console.log("Running tests...");
if (Math.random() > 0.1) {
  console.log("✅ All tests passed!");
  process.exit(0); // 成功
} else {
  console.log("❌ Some tests failed!");
  process.exit(1); // 失敗（故意有 10% 機率失敗，方便後續看效果）
}