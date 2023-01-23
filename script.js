function count() {
  switch (mark) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;
  }
}

let num1 = +prompt("Введіть перше число");
while (num1 === null || num1 === "" || isNaN(num1)) {
  num1 = +prompt("Введіть перше число знову", num1);
}
let num2 = +prompt("Введіть друге число");
while (num2 === null || num2 === "" || isNaN(num2)) {
  num2 = +prompt("Введіть друге число знову", num2);
}
let mark = prompt("Введіть оператор (+, - , * , /)");

let a = count();

console.log(a);
