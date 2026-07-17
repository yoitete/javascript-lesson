// Q1
let random = Math.floor( Math.random() * 10 );
console.log(random);


// Q2
setTimeout(function() {
    console.log("Hello World!");
}, 3000);

// Q3
let num = 5;

if (num > 0) {
  console.log("num is greater than 0");
} else if (num < 0) {
  console.log("num is less than 0");
} else {
  console.log("num is 0");
}

// Q4
let numbers = [];
for (let i = 0; i <= 99; i++) {
  numbers.push(i);
}
console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
let item = 0;

for (let i = 0; i < mixed.length; i++) {
    let item = mixed[i];

    if (typeof item !== 'number') {
        console.log('not number');
    } else if (item % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

