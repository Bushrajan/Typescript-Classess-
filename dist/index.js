"use strict";
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx class 01 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
var _a;
//------------ any --------------
//------------ unknown ----------
//------------ unique -----------       
//------------ Union ------------      
//------------ Intersection -----        
//--------------type ------------
//--------------interface -------   
//--------------ENUMS -----------
//--------------Tuples ----------
//--------------classes  --------
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx type inference
// let a = 45;
// a = 50;
// a = "50" // error
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx type annotation (explicitly)
// let num: number = 67;
// console.log(num);
// let myStr: string = "mY sTRING";
// console.log(myStr);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// let b;
// b = 57;
// b = "hello"
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// const num1 = document.getElementById("num")! as HTMLInputElement
// const num2 = document.getElementById("num2")! as HTMLInputElement
// const Addtion = (n1:number , n2:number):number=>{
// return n1 + n2
// }
// /////// non-null assertion operator (!)
// document.getElementById("submit")?.addEventListener("click",()=>{
//     let result = Addtion(+num1.value , +num2.value)
//     console.log(result);
// } )
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// const num1 = document.getElementById("num")! as HTMLInputElement
// const num2 = document.getElementById("num2")! as HTMLInputElement
// const Addtion = ()=>{
//    console.log( +num1.value + +num2.value);
// }
// xxxxxxxxxxxxxxxxxxxxx non-null assertion operator
// document.getElementById("submit")?.addEventListener("click",Addtion)
const num1 = document.getElementById("num");
const num2 = document.getElementById("num2");
const Addtion = (n1, n2) => {
    console.log(+n1 + +n2);
};
(_a = document.getElementById("submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => Addtion(+num1.value, +num2.value));
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Class 02 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
let a = true;
const person1 = {
    name: "Ruhama",
    email: "abc@gmail.com",
    contact: 44454545,
    profImg: "fftr"
};
// const person2:Person = {
//     name: "Gull",
//     email: "xyz@gmail.com",
//     contact: 44454545,
// }
// console.log(person2);
// let persons: string[] =["Ruhama", "Hajra"];
// persons.push("Tuba");
// // persons.push(433);
const persons = [
    person1,
    {
        name: "Gull",
        email: "xyz@gmail.com",
        contact: 44454545,
    }
];
const sum = function (n1, n2) {
    return n1 + n2;
};
let result = sum(45, 56);
console.log(result);
let func; // declrae
func = function (x, y) {
    return x * y;
}; // initialization
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Class 03 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
let a1 = "hello";
console.log(a1);
function hello(a1, b2) {
    console.log(a1, b2);
}
hello(1, 4);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Class 04 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// console.log("hello");
// console.log("hello bacho");
// console.log("watch mode on");
////////////// Tuples  --- fixed length array with multiple / same data data type]
// type Elem = string|number|boolean
// let students: Elem[]  = ["student1", "student2",76 ]
// let students: string[]  = ["student1", "student2" ]
// let errorVar:[number, string] = [404 , "Page Not Found" ]
// let fixedStrError:[string, string] = ["404" , "Page Not Found" ]
// // errorVar[2] = "dfdf"
// errorVar.push("Zabardasti add hojao");
// console.log(errorVar);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Class 05 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
