// Q1
let nickname = 'ひだい';
let age = '私は' + nickname + 'です。' + '年齢は' + 28 + '歳です。';
console.log(age);

// Q2
let language = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let languageText = `私の好きな言語は${language[0]}です。次は${language[3]}を勉強してみたいです。`;
console.log(languageText);

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

// Q6
function sayHello() {
    console.log('Hello');
}
sayHello();

const sayWorld = function() {
    console.log('World');
};
sayWorld();

// Q7
user.birthday = '2000-09-27';
user.sayHello = function () {
  console.log("Hello!");
}
user.sayHello();

// Q8
let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
};
calc.add(3, 4);


calc.subtract = function(x, y) {
  console.log(x - y);
};
calc.subtract(15, 5);


calc.multiply = function(x, y) {
  console.log(x * y);
};
calc.multiply(7, 7);


calc.divide = function(x, y) {
  console.log(x / y);
};
calc.divide(25, 5);

// Q9
function remainder(x, y){
    let Number = x % y;
    return Number;
}
console.log('5 を 3 で割った余りは' + remainder(5, 3) + 'です。');

// Q10 スコープ

// function foo() {
//   let x = 1;
// }
// console.log(x);

// 回答
// 変数xは関数内にありスコープしているconsole.log(x);が関数外にあるためxに代入されている1は参照できない
