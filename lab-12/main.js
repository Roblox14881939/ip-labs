"use strict";

// 1
function calculateSum(n) {
  if (!Number.isInteger(n) || n < 1) return NaN;
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

// 2
const multiply = function (a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) return NaN;
  return a * b;
};

// 3
const power = (a, b) => {
  if (!Number.isFinite(a) || !Number.isInteger(b)) return NaN;
  return a ** b;
};

// 4
function harmonicSeries(n) {
  if (!Number.isInteger(n) || n < 1) return NaN;
  if (n === 1) return 1;
  return harmonicSeries(n - 1) + 1 / n;
}

// 5
function createMultiplier(multiplier) {
  if (!Number.isFinite(multiplier)) return () => NaN;
  return function (number) {
    if (!Number.isFinite(number)) return NaN;
    return number * multiplier;
  };
}

// 6
function processSet(set, callback) {
  if (!(set instanceof Set)) throw new Error("Перший аргумент має бути Set");
  if (typeof callback !== "function") throw new Error("callback має бути функцією");

  const result = new Set();
  for (const item of set) {
    result.add(callback(item));
  }
  return result;
}

console.log("=== Lab12 / Варіант 1 ===");

const n1 = Number(prompt("Варіант 1: Введіть n (ціле >=1) для calculateSum та harmonicSeries:"));
console.log("calculateSum(n) =", calculateSum(n1));
console.log("harmonicSeries(n) =", harmonicSeries(n1));

const a = Number(prompt("Варіант 1: Введіть a для multiply(a,b) і power(a,b):"));
const b = Number(prompt("Варіант 1: Введіть b:"));
console.log("multiply(a,b) =", multiply(a, b));
console.log("power(a,b) =", power(a, Math.trunc(b)));

const k = Number(prompt("Варіант 1: Введіть multiplier для createMultiplier(multiplier):"));
const timesK = createMultiplier(k);
const x = Number(prompt("Варіант 1: Введіть число x, щоб помножити на multiplier:"));
console.log(`createMultiplier(${k})(${x}) =`, timesK(x));

const demoSet = new Set([1, 2, 3, 4, 5]);
const squared = processSet(demoSet, (v) => v * v);
console.log("processSet Set([1..5]) => квадрат:", squared);
