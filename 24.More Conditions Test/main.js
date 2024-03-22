var car = 'subaro';
var age = 25;
var numbers = [1, 2, 3, 4];
// //1 equality test
// console.log("is car == 'subaro'? i predict true");
// console.log(car == 'subaro');
//2 inequality test
// console.log("is car === 'subaro'? i predict false");
// console.log(car === 'subaro');
//3 inequality true
// console.log("Is car != 'Toyota' I predict True.");
// console.log(car != 'Toyota');
//4 inequality test false
// console.log("Is car !== 'subaro'? I predict False");
// console.log(car !== 'subaro');
//5 lowercase test true
console.log("Is car.toLowerCase() == 'subaro'? I predict True");
console.log(car.toLowerCase() == 'subaro');
//6 lowercasr test false
console.log("Is car === car.toLowercase()? I predict False");
console.log(car === car.toLowerCase());
//7
console.log("Is age == 25? I predict True");
console.log(age == 25);
//8
console.log("is age != 30? I predict False");
console.log();
//9 greater than or equal
console.log("is age > 30? I predict False");
console.log(age > 30);
//10 less than or equal
console.log("is age <= 25? I predict True");
console.log(age <= 25);
//*logical operators*
//11  AND TRUE
console.log("Is age > 20 && < 30? I predict True");
console.log(age > 20 && age < 30);
//12 OR false
console.log("Is age > 30 || age < 18? I predict False");
console.log(age > 30 || age < 18);
//**Array tests**
//13 in array true
console.log("IS 3 in numbers? I predict True");
console.log(3 in numbers);
//14 not in array false
console.log("Is 5 not in numbers? I predict True");
console.log(5 in numbers);
