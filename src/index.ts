
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx class 01 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

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



// const num1 = document.getElementById("num")! as HTMLInputElement
// const num2 = document.getElementById("num2")! as HTMLInputElement

// const Addtion = (n1: number, n2: number) => {
//     console.log(+n1 + +n2);
// }

// document.getElementById("submit")?.addEventListener("click", () => Addtion(+num1.value, +num2.value))



// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Class 02 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// let a: boolean = true;

// // type aliases

// type Person = {
//     name: string;
//     email: string;
//     contact: number;
//     profImg?: string;
// }


// const person1: Person = {
//     name: "Ruhama",
//     email: "abc@gmail.com",
//     contact: 44454545,
//     profImg: "fftr"
// }

// const person2:Person = {
//     name: "Gull",
//     email: "xyz@gmail.com",
//     contact: 44454545,

// }

// console.log(person2);


// let persons: string[] =["Ruhama", "Hajra"];
// persons.push("Tuba");
// // persons.push(433);


// const persons: Person[] = [
//     person1,
//     {
//         name: "Gull",
//         email: "xyz@gmail.com",
//         contact: 44454545,

//     }
// ]


// interfaces
// type MyStr = string
// let str: MyStr = "hello"

// interface User {
//     name: string;
//     email: string;
//     contact: number;
//     profImg? :string;
//     // size : string | number
// }


////////// Union |

// type X = string | number

// let size: X = "XL";

// console.log(size);

// size = 42
// size = "hello"

//////////////////////////// String Literals / literal types


// type X = "sm" | "lg" | "xl" | "xxl" |  42 | 48

// let size: X = "xl";

// console.log(size);

// size = 42
// size = 43 // error



/////////////////////// Function

// let myFunc: Function

// type MyFunc = (x: number, y: number) => number // declrae

// const sum: MyFunc = function (n1: number, n2: number): number {
//     return n1 + n2
// }

// let result = sum(45, 56);
// console.log(result);




// let func: (x: number, y: number) => number // declrae

// func = function (x: number, y: number): number {
//     return x * y
// }  // initialization



// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Class 03 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// let a1: string = "hello";

// console.log(a1);

// function hello(a1: number, b2: number) {
//     console.log(a1, b2);

// }

// hello(1, 4)


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

// // class syntax

// class Student {
//     name: string;
//     rollNo: number;
//     constructor(n: string, r: number) {
//         this.name = n;
//         this.rollNo = r;
//     }

// }


// let student1 = new Student("Ruhama", 123);
// let student2 = new Student("Hajra", 456);

// console.log(student1);
// console.log(student2);


//////////// Access Modifiers 1) public  2) private 3) protected

// class Person {
//     public name: string;
//     private age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a
//     }
// }


// const person1 = new Person("Sonia" , 10);

// console.log(person1);
// console.log(person1.name);
// console.log(person1.age); // error


// class Person {
// constructor(public name: string, private age: number) {
// }
// }


// const person1 = new Person("Sonia" , 10);

// console.log(person1);



///////////////// readonly

// class Car {
//     constructor(public name: string, public model: number, public cName: string, readonly price: number) {
//     }
// }

// let car1 = new Car("Haval", 2022, "havalH6", 6399000 );

// console.log(car1);
// car1.model = 2025;
// console.log(car1);
// // car1.price = 6399111


////////////////////////////////////////

// class Employee {
//     // public futureData: string= ""
//     private skills: string[] = []
//     constructor(public name: string, private id: number, readonly salary: number) {

//     }
// }


// const employee1 = new Employee("Ali", 1, 30000);
// console.log(employee1);
// employee1.skills.push("Next js")
// employee1.skills.push("TypeScript")
// employee1.skills.push("SQL")

// console.log(employee1);

// // employee1.skills.length = 0;
// employee1.skills = []

// console.log(employee1);


// class Teacher {
//     private skills: string[] = []
//     constructor(public name: string, private id: number, readonly salary: number) {

//     }


//     addSkill(skill: string) {
//         this.skills.push(skill)
//     }
// }


// const employee1 = new Teacher("Ruhama", 1, 30000);
// console.log(employee1);

// employee1.addSkill("Python")
// console.log(employee1);
// employee1.skills = []

//



// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Class 06 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
///////////// Encapsulation



// class Product {
//     constructor(
//         private id: number,
//         private name: string,
//         private price: number

//     ) { }

//     public getId(): number {
//         return this.id
//     }
//     public getName(): string {
//         return this.name
//     }
//     public getPrice(): number {
//         return this.price
//     }

// }



// let product1 = new Product(1, "Shampoo", 400);

// console.log(product1.getPrice());



//////////////////// getter / setter


// class Product {
//     constructor(
//         private _id: number,
//         private _name: string,
//         private _price: number,


//     ) { }

//     get id() {
//         return this._id
//     }


//     get name() {
//         return this._name
//     }


//     get price() {
//         return this._price
//     }



//     set name(value: string) {
//         if (!value) {
//             throw Error("Name cannot be empty")
//         }

//         this._name = value
//     }
// }




// let product1 = new Product(1, "Shampoo", 400);
// console.log(product1.price);


// product1.name =  "Soap"
// console.log(product1.name);



//////////// Inheritence

// parent class / super / base
// child class /  sub /  drived


// class ClothingProduct extends Product {

//     constructor(
//         id: number,
//         name: string,
//         price: number,
//         private _size: "S" | "M" | "L" | "XL",
//         private _fabric: "lawn" | "silk" | "velvet" /// inky getter or setter aap banaen

//     ) {
//         super(id, name, price)

//     }

// }


// let tShirt = new ClothingProduct(1, "Shirt", 600, "S", "velvet");
// console.log(tShirt);



// class ElectricProduct extends Product {

//     constructor(
//         id: number,
//         name: string,
//         price: number,
//         private _model: string,
//         private _brand: "Sony" | "Samsung" | "Dowlance" /// inky getter or setter aap banaen

//     ) {
//         super(id, name, price)

//     }

// }

// let washingMachine = new ElectricProduct(1, "Washing Machine", 42000, "2025", "Dowlance");
// console.log(washingMachine);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Class 07 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// abstract class Animal {
//     constructor(private _name: string) {
//     }

//     get name(): string {
//         return this._name
//     }

//     set name(newName: string) {
//         if (!newName) {
//             throw Error("Animal name  is not defined")
//         }

//         this._name = newName
//     }

//     abstract makeSound(): void

// }



// // let animal1 = new Animal("cat") // Cannot create an instance of an abstract class


// class Cat extends Animal {
//     constructor(name: string, public behaviour: string) {
//         super(name)
//     }

//     makeSound(): void {
//         console.log("Meow Meow Meow");

//     }
// }
// class Dog extends Animal {
//     makeSound(): void {
//         console.log("Woof Woof");

//     }
// }


// let cat1 = new Cat("Bella", "scratch");
// let dog1 = new Dog("German shephered");

// console.log(cat1.makeSound());
// console.log(dog1.makeSound());



// /////////////// Singleton

// // static method . propeties >>>> inka relation class se hota hai instance se nahi

// class Util {
//     constructor() { }
// }

// let util1 = new Util()
// let util2 = new Util()

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Class 08 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



/////// SingleTon


// class Util {

//     private static instance: Util
//      static PI: string = "123456789"
//     private constructor() { }
//     static getInstance() {
//         if (!this.instance) {
//             this.instance = new Util();
//         }

//         return this.instance;
//     }

// }

// console.log(Util.PI);

// let util1 = new Util() // error




/////////// Ex

// interface ObjectType {theme:string , ln:string}

// class Config {


//     private static instance: Config;

//     private _settings:ObjectType = {
//         theme: "dark",
//         ln: "en"
//     }




//     private constructor() { }

//     static getInstance() {
//         if (!this.instance) {
//             this.instance = new Config();
//         }
//         return this.instance;
//     }


//     getSettings(key: string) {
//             return  this._settings[key as keyof ObjectType]
//     }

// }


// let appConf1 = Config.getInstance();
// let theme = appConf1.getSettings("theme");


// let appConf2 = Config.getInstance();
// let ln = appConf2.getSettings("ln");

// console.log(appConf1 === appConf2) //




// ////////////////// UNION / Intersection

// type A = {
//     name: string;
//     age: number;
// }

// type B = {
//     email: string;
//     contact: number;
// }


// type C = A | B;

// let person:C ={
//     name: "string",
//     age: 123,
//     email: "string",
//     contact: 1212,
//     // abc:"jdjfd" // error

// }

/////////////// intersection

// type D = A & B


// let person2:D ={
//     name: "string",
//     age: 123,
//     email: "string",
//     contact: 1212,

// }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx Class 09 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

/////////////// intersection

// type A ={
//     type:"A";
// name:string;
// age:number
// }
// type B ={
//     type:"B";
//     email:string;
//     contact:number
// }


// type D = A | B

// let person2:D ={
//     type:"A", // allow only one type
//     name: "string",
//     age: 123,
// }


///////////// intersection
// type D = A & B


// let person2:D ={
//     name: "string",
//     contact: 1212,
//     age: 123,
//     email: "string",

// }



//////////////// Interface

// interface A {
//     name: string;
//     age?: number;
//     greet(): void
// }
// interface B {
//     email: string;
//     contact: number;
// }
// interface E { id: number }


// interface C extends A, B { }
// interface D extends C , E { }


// let person: C = {
//     name: "Ruhama",
//     // age:10,
//     email: "string",
//     contact: 34734736473,
//     greet() {
//         console.log("hello " + this.name);
//     }
// }

// console.log(person);


///////////////// interface with class

// class Person implements C {
//     constructor(public name: string, public email: string, public contact: number) { }

//     greet(): void {
//         console.log("Hello " + this.name);

//     }
// }


// let person1: C = new Person("Ruhama" ,"abc@gmail.com",56565 )
// console.log(person1.greet());


///////////////////////////////////

// same name ki type nahi ban sakti

// interface User {
//     id:number,
// }

// interface User {
//     name:string,
// }


// let user1:User ={  /// Merge
//     id:1,
//     name:"ruhama"
// }




/////////////////////      Type Casting  <>  ,,,,, as

// let myStr:unknown = "Hello";
// console.log((<string>myStr).length);


// myStr = 789.45
// console.log(Math.round(myStr as number));


////////////////   Generics


// function merge  <T, U>(objA: T, objB: U){
//     return {...objA, ...objB}
// }


// const merged = merge({name:"Ruhama"}, {id:1})

// console.log(merged);
// console.log(merged);
