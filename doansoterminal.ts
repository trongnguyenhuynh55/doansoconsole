import { question } from "readline-sync";
let max: number = 0;
let min: number = 100;

console.log("Moi ban doan so tu 0 den 100 nhe");
let a: number = Math.floor(Math.random() * (max - min + 1) ) + min;
let b: number = Number(question("Nhap so ban doan: "));
if (a === b)
    console.log("Chuc mung ban da chien thang 100 diem")
else if (b < a)
    console.log("So ban nho mat roi")
else
    console.log("So ban lon mat roi")
let c: number = Number(question("Nhap so ban doan lan 2: "));
if (a === c)
    console.log("Chuc mung ban da chien thang 70 diem")
else if (c < a)
    console.log("So ban nho mat roi")
else
    console.log("So ban lon mat roi")
let d: number = Number(question("Nhap so ban doan lan 3: "));
if (a === d)
    console.log("Chuc mung ban da chien thang 50 diem")
else
    console.log("Game over!!! So can doan la " + String(a))   
