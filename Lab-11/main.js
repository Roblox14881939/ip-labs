"use strict";

//Завдання 1
function task1_diamond() {
  const n = Number(prompt("Варіант 1 — Завдання 1\nВведіть n (ціле >= 1) для ромба:"));
  if (!Number.isInteger(n) || n < 1) {
    console.log("Некоректне n. Потрібно ціле число >= 1.");
    return;
  }

  console.log(`\n[Завдання 1] Ромб із цифр, n=${n}`);

  for (let i = 1; i <= n; i++) {
    let line = "";

    line += " ".repeat(n - i);

    for (let k = 1; k <= i; k++) line += k;

    for (let k = i - 1; k >= 1; k--) line += k;

    console.log(line);
  }

  for (let i = n - 1; i >= 1; i--) {
    let line = "";
    line += " ".repeat(n - i);

    for (let k = 1; k <= i; k++) line += k;
    for (let k = i - 1; k >= 1; k--) line += k;

    console.log(line);
  }
}

//Завдання 2
function task2_seriesSum() {
  const n = Number(prompt("Варіант 1 — Завдання 2\nВведіть n (кількість членів ряду, ціле >= 1):"));
  if (!Number.isInteger(n) || n < 1) {
    console.log("Некоректне n. Потрібно ціле число >= 1.");
    return;
  }

  console.log(`\n[Завдання 2] Ряд і сума, n=${n}`);

  let sum = 0;
  let rowText = "";

  for (let i = 1; i <= n; i++) {
    sum += 1 / i;
    rowText += (i === 1 ? "" : " + ") + `1/${i}`;
  }

  console.log("Ряд:", rowText);
  console.log("Сума =", sum);
  alert(`Ряд: ${rowText}\nСума = ${sum}`);
}

//Завдання 3
function task3_guessNumber() {
  console.log("\n[Завдання 3] Гра 'Вгадай число' (1..20)");

  const secret = Math.floor(Math.random() * 20) + 1;
  let tries = 0;

  while (true) {
    const input = prompt("Вгадайте число від 1 до 20 (або 'end' для виходу):");
    if (input === null) {
      alert("Гру завершено (Cancel).");
      break;
    }
    if (input.trim().toLowerCase() === "end") {
      alert("Вихід з гри.");
      break;
    }

    const guess = Number(input);
    if (!Number.isInteger(guess) || guess < 1 || guess > 20) {
      alert("Введіть ціле число від 1 до 20 або 'end'.");
      continue;
    }

    tries++;

    if (guess === secret) {
      alert(`✅ Вірно! Число: ${secret}. Спроб: ${tries}`);
      console.log(`Вгадано: ${secret}, спроб: ${tries}`);
      break;
    } else if (guess < secret) {
      alert("Більше");
    } else {
      alert("Менше");
    }
  }
}

task1_diamond();
task2_seriesSum();
task3_guessNumber();
