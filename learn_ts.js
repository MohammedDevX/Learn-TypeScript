"use strict";
/*
    - Data types :
*/
Object.defineProperty(exports, "__esModule", { value: true });
// String : 
let nom;
nom = "Mohemmed";
let newNom = nom.toUpperCase();
console.log(newNom);
// Number
let age;
age = 20;
console.log(age);
// Boolean : 
// let isValid: boolean; // Here when the code is compiled to js if we doesnt give a default value to a bool var 
// we are going to see some thing like that in the compiled js => let isValid, so this return undefined value
let isValid = false;
console.log(isValid);
// Array : 
let names;
names = ["mohammed", "achraf"];
let nums;
nums = [1, 2, 3, 4, 5];
let res = nums.filter(n => n > 2); // return only nums > 2
console.log(res);
let number = nums.find((n) => n == 4); // return number == 4
console.log(number);
// Enums : 
var colors;
(function (colors) {
    colors[colors["Red"] = 1] = "Red";
    colors[colors["Green"] = 2] = "Green";
    colors[colors["Black"] = 3] = "Black";
})(colors || (colors = {}));
let color = colors.Green;
console.log(color);
let tNums;
function getNums(n1, n2) {
    return [n1, n2];
}
tNums = getNums(12, 5);
console.log(tNums[0]);
let any;
any = "test";
any = 12;
// Function : 
function Add(n1, n2) {
    return n1 + n2;
}
console.log(Add(3, 3));
// Arrow function :
const somme = (n1, n2) => { let res = n1 + n2; return res; };
console.log(somme(1, 2));
let tab = [1, 2, 3];
// This is called spread operator => remove [] from a table, for ex [1, 2, 3] became (1, 2, 3)
console.log(...tab);
console.log(Math.max(...tab));
// This called rest operator => add [] to a group of data, for ex (1, 2, 3) becale [1, 2, 3]
function regrouper(...tab) {
    console.log(tab);
}
regrouper(1, 2, 3);
// Generique functions : 
// Here getTab get an array of T
function getTab(tab) {
    // Here we return an arrat of 
    return new Array().concat(tab);
}
console.log(getTab([1, 2, 3]));
//# sourceMappingURL=learn_ts.js.map