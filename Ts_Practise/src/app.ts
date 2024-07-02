// let x: string = "10";

// const data = JSON.parse('"sdasds"');

// console.warn(typeof data);


// let u: any = true;

// u = "string";

// console.log(Math.round(u));

// let y: undefined = undefined;

// console.log(typeof y);


// let x: null = null;

// console.log(typeof x);

// array-------------------------------------------------------------------------

// let data: number[] = [23, 34, 56];
// data.push(67);

// let datastr: string[] = [];
// datastr.push("67");
// console.log(datastr);

// const numbers = [1, 2, 3, 4];
// numbers.push(8);

// // numbers.push('9');

// console.log(numbers);
// let head: number = numbers[0]; // no error
// console.log(head);


// Tuples---------------------------------------------------------------------------------------

// let persondata: readonly [number, string, boolean] = [45, "dipali", true];

// console.log(persondata);


// object-------------------------------------------------------------------
// interface usertype {
//     name: string,
//     age: number,
//     // address: any
// }


// let person: usertype = {
//     name  : "dipali",
//     age: 23,
// }

// person.name = "3223";

// console.log(person);

// interface userdata {
//     [index: string]: number,
// }
// const obj: userdata = {}

// obj.age = 23;


// console.log("obj-------", obj);




// Union ----------------------------------------------------------------

// let data: string | number = 334;


// data = 30
// data = true
// data = { name: "fdgfg", age: "fgfdg" }
// data = undefined
// data = null
// console.warn(data);


// function--------------------------------------------------------------

// (Return Type)-------------
// type of the value returned by the function can be explicitly defined
// function getdata(): number {
//     return new Date().getTime()
// }
// console.log("getdata()", getdata());

// (voide Type)------------------
// void can be used to indicate a function doesn't return any value
// function getdata(): void {
//     return console.log("sdsfd");
// }
// getdata()


// (if you are passing arrgument you have to define it's data type too)-----------------
// function getdata(a: number) {
//     return a;
// }
// getdata(10);


// (TypeScript will assume all parameters are required,but they can be explicitly marked as optional.)
// Optional Parameters---------------

// function add(a: number, b: number, c?: number) {
//     return a + b + (c || 0)
// }
// console.log("add(10, 2, 6)", add(10, 2));

// function add(a: number, b?: string): string | number {
//     return b ? a + b : a;
// }

// console.log(add(7));


// interface/type Aliases---------------------------------------------
// (Aliases (user for string,array,object) )
// type Carname = string;


// const carname: Carname = "asdasdsa";
// console.log(carname);

// (interface (use only for object))

// interface userdata {
//     name: string,
//     age: number
// }
// const userData: userdata = {
//     name: "dfdgf",
//     age: 45
// }


// class-----------------------------------------------------------------------------

// class App {
//     name;

//     constructor(a: string) {
//         this.name = a
//     }

//     getname(): string {
//         return this.name;
//     }
// }

// const ai = new App("dipali nikam");
// console.log("ai", ai.getname());


// (private, protected,public)------------------------------------------
// Public members can be accessed from anywhere.
// Private members can only be accessed within the class where they are defined.
// Protected members can be accessed within the class where they are defined and in any subclass.

// class App {
//     public name: string = "dipali";

//     private id: number = 34;

//     protected description: string;

//     constructor(name: string, id: number, description: string) {
//         this.name = name;
//         this.id = id
//         this.description = description
//     }

//     public getName(): string {
//         return this.name
//     }

//     private getId(): number {
//         return this.id
//     }

//     protected getDescription(): string {
//         return this.description
//     }

// }

// const data = new App("apple", 1, "this is an app");
// // console.log("data.name--", data.name);
// // console.log("-------", data.getName());


// class Child extends App {
//     constructor(name: string, id: number, description: string) {
//         super(name, id, description)
//     }
//     public getAppdescription(): string {
//         return this.getDescription();
//     }
// }

// const extendedAppInstance = new Child("extended name", 2, "extended description ")
// console.log("C", extendedAppInstance.getAppdescription());

//you can also give visibility modifiers to the parameter-------------------------------

// class App {
//     public constructor(private name: string) { }

//     public getName(): string {
//         return this.name;
//     }
// }

// const data = new App("dipali");
// console.log(data.getName());


// Readonly----------------------------------

// class App {
//     private readonly age: string
//     constructor(name: string) {
//         this.age = name;
//         this.age = "fgfdg"
//     }

//     getName() {
//         return this.age;
//     }
// }

// const person = new App("dipali");
// console.log(person.getName());


// (if you are passing value to function define undefined in option in type (in case if you won't pass anything ))

// class Person {
//     name: string | undefined;
// }
// const person = new Person();
// person.name = "Jane";

// console.log(person);


// Override-----------------------------

// class App {
//     public constructor(protected readonly width: number, protected readonly height: number) { }


//     getAre(): number {
//         return this.width * this.height;
//     }

//     toString(): string {
//         return `Rectangle =[width${this.width} ,height${this.height}]`
//     }
// }

// // const Rectangle = new App(10, 20);
// // console.log(Rectangle.toString());

// class Square extends App {
//     constructor(width: number) {
//         super(width, width)
//     }

//     public  toString(): string {
//         return `Square:[width=${this.width}] `
//     }
// }

// const squre = new Square(200)
// console.log(squre.toString());



// inheritance-----------------------------------------------------------------------------

// class Parent {
//     name: string | undefined;

//     setName(name: string): void {
//         this.name = name;
//     }
// }

// class Child extends Parent {
//     // name = "nirali";

//     getName(): string | undefined {
//         return this.name;
//     }
// }

// const a1 = new Child();
// a1.setName("niral");
// console.log(a1.getName());


// Casting-------------------------------------------------------------------

// (process of overriding a type)

// let a: unknown = "gfdgfdgf";

// console.log("a", (a as string).length);

// casting-- <>

// let a: unknown = 5;
// console.log((<string>a).length);

// Force casting--------------
// (change variable to unknown first)

// let x = "heelo"
// console.log(((x as unknown) as number).length); // Runtime error because x is still string
// console.log(((x as unknown) as string).length);




// const obj: shape = {
//     getArea: function () {
//         return console.log("dfgfdg");


//     }
// }



// Basic Generics---------------------------------------------

// (generics create type class that can be use create class, function that don't need to explicitly define the types they use)

// function generics
// function getdata<S, T>(v1: S, v2: T): [S, T] {
//     return [v1, v2];
// }

// console.log(getdata<string, number>("dipali", 34));

// class generics--------

// class App<T> {

//     value: T | undefined;

//     constructor(private name: string) { }

//     setdata(a: T) {
//         this.value = a
//     }

//     getdata(): T | undefined {
//         return this.value
//     }

//     tostring(): string {
//         return `${this.name}: ${this.value}`

//     }
// }

// const data = new App<number>("dipali");
// console.log(data.setdata(23));
// console.log(data.getdata());
// console.log(data.tostring());



// (normal class)
// class Appdata {

//     name: string | undefined

//     constructor(a: string) {
//         this.name = a;
//     }

//     getdata() {
//         return this.name
//     }
// }

// const adata = new Appdata("gfhgfh");
// console.log(adata.getdata());

// console.log(adata("fsdffdf"));

// Type Aliases (generics)-------------------------------------------------
// (types that are more reusable)

// type cartype<T> = T
// const carname: cartype<string> = "fdff";
// console.log("carname", carname);


// type wrapped<T> = { value: T }
// const wrappedValue: wrapped<number> = { value: 10 }
// const data: wrapped<string> = { value: "esfdesdf" };

// console.log("wrappedValue", wrappedValue);
// console.log("data", data);

// Extends------------------

// function createlogin<s extends string | number, t extends string | number>(v1: s, v2: t): [s, t] {
//     console.log(`creating pair :v1='${v1}', v2='${v2}'`);
//     return [v1, v2]
// }

// createlogin(12, "sasdad");


// Utility Types-------------------------------


// Partial - properties in an object to be optional
// interface point {
//     x: string,
//     y: number
//     age: string
// }

// const data: Partial<point> = {
//     age: "fgdfdg",
//     x: "essedf"
// };

// console.log("data", data);

//---------------------

// Required - properties in an object to be required / similar to normal interface
// interface point {
//     x: string,
//     y: number
//     age: string
// }

// const data: Required<point> = {
//     age: "fgdfdg",
//     x: "essedf",
//     y: 56
// };

// console.log("data", data);

//---------------------

// Record is a shortcut to defining an object type with a specific key type and value type
// const nameage :Record<string,number> ={
//     "name":12,
//     "bob":23
// }

// Record < string, number > is equivalent to { [key: string]: number }

//-----------------------------
// omit(keys from an object type)


// interface persondata {
//     age: number,
//     name: string,
//     location: string
// }
// const bob: Omit<persondata, "age"> = {
//     name: "dipali",
//     location: "dfgdfg"
// }

// console.log("bob", bob);

//------------------------------
// pick(remove all keys but kept specified key from an object type )

// interface persondata {
//     age: number,
//     name: string,
//     location: string
// }
// const bob: Pick<persondata, "age"> = {
//     age: 67
// }
// console.log("bob", bob);



//------------------------------
// exclude(remove types from a union)

// type data = string | number | boolean

// const value: Exclude<data, string> = true

//------------------------------
// ReturnType(extracts the return type of a function type)

// type PointGenerator = () => { x: number, y: string }

// const point: ReturnType<PointGenerator> = {
//     x: 23,
//     y: "34324"
// }


//------------------------------
// Parameters (extracts the parameter types of a function type as an array)

// type PointGenerator = (p: { x: number, y: string }) => void

// type pointparam = Parameters<PointGenerator>[0]

// const point: pointparam =
//     { x: 1, y: "hello" }

// console.log("point", point);



//------------------------------
// Readonly (properties are readonly)

// interface persondata {
//     age: number,
//     name: string
// }

// const person: Readonly<persondata> = {
//     age: 867,
//     name: "fgfd"
// }
// console.log("person", person);


//------------------------------------------------------------------------------------------------------------------------
// keyof with explicit keys (with explicit keys, keyof creates a union type with those keys)

// interface persondata {
//     age: number,
//     name: string
// }

// function printperson(person: persondata, property: keyof persondata) {
//     console.log(`Printing person property ${property}: "${person[property]}"`)
// }

// let person = {
//     name: "Max",
//     age: 27
// }

// printperson(person, "age")

// TypeScript Null & Undefined--------------------------------------------------------------------------

// let value: string | undefined | null = null;
// value = 'hello';
// value = undefined;

// console.log(value);

// // Nullish Coalescence(??)

// function printMileage(mileage: number | null | undefined) {
//     console.log(`Mileage: ${mileage ?? 'Not Available'}`);
// }


// printMileage(null);
// printMileage(undefined);


// Null Assertion--------------------------------

function getvalue(): string | undefined {
    return "helo";
}

let value = getvalue();
console.log("value.length", value!.length);




























