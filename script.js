const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generateEl = document.getElementById("generate-el");
let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");

generateEl.addEventListener("click", function () {
  console.log(generateEl);
  passwordOneEl.textContent = "";
  passwordTwoEl.textContent = "";

  //   passwordOneEl.textContent = characters[randomPasswordOne];
  //   passwordTwoEl.textContent = characters[randomPasswordTwo];
  for (let i = 0; i <= 14; i++) {
    let randomPasswordOne = Math.floor(Math.random() * characters.length);
    let randomPasswordTwo = Math.floor(Math.random() * characters.length);

    passwordOneEl.textContent += characters[randomPasswordOne];
    passwordTwoEl.textContent += characters[randomPasswordTwo];

    // navigator.clipboard.writeText(passwordOneEl.textContent);
    // navigator.clipboard.writeText(passwordTwoEl.textContent);
  }
});

passwordOneEl.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordOneEl.textContent).then(() => {
    alert("Password 1 copied to clipboard " + passwordOneEl.textContent);
  });
});

passwordTwoEl.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordTwoEl.textContent).then(() => {
    alert("Password 2 copied to clipboard " + passwordTwoEl.textContent);
  });
});

// console.log(generateEl);
// console.log(passwordOneEl);
// console.log(passwordTwoEl);
