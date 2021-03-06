const fruits = ['π', 'π', 'π', 'π'];

//1. λ°°μ΄μ λΉκΈ λΉκΈ λλ©΄μ μνλκ²(μ½λ°±ν¨μ)μ ν λ
fruits.forEach(function (value,index,array) {
  console.log(value);
  //console.log(index);  μ¬μ©νμ§ μλ μΈμλ μλ΅μ΄ κ°λ₯νλ€.
  //console.log(array);
});
fruits.forEach((value) => console.log(value));

// 2. μ‘°κ±΄μ λ§λ(μ½λ°±ν¨μ) μμ΄νμ μ°Ύμλ
//Q.λ°°μ΄μμ μΏ ν€λ₯Ό μ°ΎκΈ°!
// find: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
const item1 = { name: 'π₯', price: 2 };
const item2 = { name: 'πͺ', price: 3 };
const item3 = { name: 'π', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((item) => item.name === 'πͺ');
console.log(result);

// 3. findIndex: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν (μ‘°κ±΄μ΄ λ§λ€λ©΄ true)
result = products.findIndex((item) => item.name === 'πͺ');
console.log(result);

// 4. some : λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.some((item) => item.name === 'πͺ');
console.log(result);

//5.  every : λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.every((item) => item.name === 'πͺ');
console.log(result);

// 6. filter : μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘!
result = products.filter((item) => item.name === 'πͺ');
console.log(result);

console.clear();

// 7. Map λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ, λ³νν΄μ μλ‘μ΄ λ°°μ΄ μμ±!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2); //2λ°°μ© κ³±ν΄μ μλ‘μ΄ λ°°μ΄ λ°ν
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// 8. Flatmap: μ€μ²©λ λ°°μ΄μ μ«μ ν΄μ μλ‘μ΄ λ°°μ΄λ‘!
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// 9. sort λ°°μ΄μ μμ΄νλ€μ μ λ ¬
// λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);  //λ¬Έμμ΄ ννλ‘ λ³νλμ΄ 1λ΄μ 10μ΄μ¨λ€
// < 0 : aκ° μμΌλ‘ μ λ ¬, μ€λ¦μ°¨μ
// > 0 : bκ° μμΌλ‘ μ λ ¬, λ΄λ¦Όμ°¨μ
numbers.sort((a, b) => a - b);
console.log(numbers);

// 10. reduce λ°°μ΄μ μμλ€μ μ μ΄μ μ μ΄μ κ°μ νλλ‘!
//sumμ λν΄μ μ μ₯λλ λ³μ , 0 μ λ§¨μ²μμ μ΄κΈ°ν λλ κ°
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);
