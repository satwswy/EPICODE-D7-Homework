/*
Exercise 1
A list of main datatypes is
1.Numbers
2.Strings
3.Booleans
4.Undefined
5.Null

Now let me try to explain some properties about each main datatype.Let's start with Numbers: 
1.Numbers: as the name suggests is a numeric data type. We can give data a value of a number. Then this data becomes a number.
2.Strings: A string data type is a text.This text can be anything we choose to write .
3.Booleans: A boolean data type can only be either false or true. What it is depends on other variables.
4.Undefined: When a datatype is Undefined that means that we need to say what this data is because it is nothing if we do not say that it is something.
5.Null: When a data is null that means that the data is empty (it has no content). We can choose to put some content in it if we want to.
*/

/*
Exercise 2
I will try to explain what a variable is,
A variable is a container for some content. We can select the initial content of the variable(container) when we first declare the variable.
We can then change the content of the variable depending on what we want to do.
*/

//Exercise 3

console.log (12+20)

//Exercise 4

let x
x = 12
console.log (x)

//Exercise 5

let name = "John Doe";
console.log (name)

//Exercise 6

console.log (12-x)

//Exercise 7

let name1 = "john";
let name2 = "John";
let checkEqualityOfName1AndName2 = name1 === name2 ;
console.log(checkEqualityOfName1AndName2);
checkEqualityOfName1AndName2 = name1 === name2.toLowerCase() ;
console.log(checkEqualityOfName1AndName2);

//Exercise 8
let x8 = 2
if (x8 === 2 ) {console.log("two")}
else{console.log("wrong number")} ;

//Exercise 9

let check1 = 8
let check2 = check1 === 8 ? true : false ;
console.log(check2)

//Exercise extra1

let isMale = "male"
let gender = isMale === "male" ? 'male' : 'female' ;
console.log(gender)

//Exercise extra2

let integer1 = 5
let integer2 = 3
let isInteger1OrInteger2Eight = integer1 === 8 || integer2 === 8 ;
console.log(isInteger1OrInteger2Eight) 
let integerAddition = integer1 + integer2;
let integerSubtraction = integer1 - integer2;
let isTheIntegerAdditionEight = integerAddition === 8
let isTheIntegerSubtractionEight = integerSubtraction === 8

console.log(isTheIntegerAdditionEight)
console.log(isTheIntegerSubtractionEight)

//Exercise extra3

let stringOne = "This is"
let stringTwo = " some text"
let stringOneAndTwo = stringOne + stringTwo;
console.log(stringOneAndTwo)


