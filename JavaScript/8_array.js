'use strict'

//Array

//1. Declaration μ μΈ
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['π','π','π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);  //μ μΌ λ§μ§λ§ μΈλ±μ€

//3. looping over an array
//a. for
console.clear();
for (let i=0; i<fruits.length;i++) {
    console.log(fruits[i]);
}

//b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

//c. forEach
fruits.forEach((fruit, index, array) => console.log(fruit));

//4. Addiction, deletion, copy
//push : add an item to the end
fruits.push('π­','π');
console.log(fruits);

//pop : remove an item from the end
fruits.pop();
console.log(fruits);

//unshift : add an item to the beginning
fruits.unshift('π₯ͺ','π§');
console.log(fruits);

//shift : remove an item to the beginning
fruits.shift();
console.log(fruits);

//μ£Όμ!! λ§€μ°λλ¦Ό note!! shift , unshif are slower than pop, push!!!!! 

//splice : remove an item by index position
fruits.push('π₯―','π');
console.log(fruits);
fruits.splice(1,1);  // start index , deleteCount 
console.log(fruits);
fruits.splice(1,1,'π','π£');
console.log(fruits);

//concat : combine two arrays
const fruit2 = ['π','π'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);


//5. searching
//indexOf : find the Index
//indexκ° μμΌλ©΄ -1λ‘ λνλ¨!
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π£'));
console.log(fruits.indexOf('π­'));

//includes
console.log(fruits.includes('λ '));
console.log(fruits.includes('π'));

//lastIndexOf
console.clear();
fruits.push('π­');
console.log(fruits);
console.log(fruits.indexOf('π­'));  //λ§¨μ²¨μ μΈλ±μ€κ° μΆλ ₯
console.log(fruits.lastIndexOf('π­'));  //λ§¨ λ§μ§λ§μ μΈλ±μ€κ° μΆλ ₯