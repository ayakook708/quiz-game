// 変数
let ayako = "Hello World!";

// 定数
const bigAyako = "He...Hello World!";

// 配列
let inoki = ["いーち", "にーい", "さーん", "ダーー！"];

// ループ文
// let index = 0;
// while (index < inoki.length) {
//   console.log(inoki[index]);
//   index++;
// }

//if / else
// if (inoki.length > 5) {
//   console.log("ボンバイエ！");
// } else {
//   console.log("ボンバ・・・！");
// }

// 関数
const test = (arg) => {
  if (inoki.length > arg) {
    console.log("ボンバイエ！");
  } else {
    console.log("ボンバ・・・！");
  }
};

// オブジェクト
const ayako2 = {
  color: "yellow",
  size: "big",
  perfume: "floral",
  goGarden: () => {
    console.log("full in bloom!");
  },
};

console.log(
  document.getElementsByTagName("button")[0].addEventListener("click", () => {
    window.alert("Hello World!");
  })
);
