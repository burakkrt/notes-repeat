const button = document.querySelector("#getRandom");
const getText = document.querySelector("#text");
const getCategory = document.querySelector("#category");
const getCountdown = document.querySelector("#countdown");

let countdown = 0;

button.addEventListener("click", () => {
  const randomCategory = Math.floor(Math.random() * functionsList.length);
  const randomFunc = Math.floor(
    Math.random() * functionsList[randomCategory].codes.length
  );

  countdown++;

  getCountdown.textContent = countdown;
  getCategory.textContent = functionsList[randomCategory].category;
  getText.textContent = functionsList[randomCategory].codes[randomFunc];
});

const functionsList = [
  // STRING
  {
    category: "STRING",
    codes: [
      "concat",
      "includes",
      "indexOf",
      "localeCompare",
      "padStart",
      "padEnd",
      "repeat",
      "replace",
      "replaceAll",
      "slice",
      "split",
      "startsWith",
      "endsWith",
      "substring",
      "toLocaleLowerCase",
      "toLocaleUpperCase",
      "toString",
      "trim",
      "trimStart",
      "trimEnd",
      "charAt",
    ],
  },
  // ARRAY
  {
    category: "ARRAY",
    codes: [
      "concat",
      "copyWithin",
      "every",
      "filter",
      "forEach",
      "indexOf",
      "lastIndexOf",
      "map",
      "reduce",
      "reverse",
      "toReversed",
      "slice",
      "some",
      "sort",
      "toSorted",
      "splice",
      "fill",
      "find",
      "findIndex",
      "includes",
      "join",
      "pop",
      "shift",
      "push",
      "unshift",
    ],
  },
  // NUMBER
  {
    category: "NUMBER",
    codes: [
      "+",
      "Number",
      "parseFloat",
      "parseInt",
      "toFixed",
      "toPrecision",
      "toLocaleString",
      "Number.isInteger",
      "Math.abs",
      "Math.ceil",
      "Math.floor",
      "Math.max",
      "Math.min",
      "Math.pow",
      "Math.random",
      "Math.round",
      "Math.sing",
    ],
  },
  // OBJECT
  {
    category: "OBJECT",
    codes: [
      "Dışarıdan değer ekleme",
      "Değer silme",
      "Fonksiyon ekleme",
      "this anahtarı",
      "Object.entries",
      "Object.keys",
      "Object.values",
      "Object.assign",
      "Object.freeze",
      "Object.seal",
    ],
  },
];
