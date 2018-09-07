var apples = 14;

console.log(apples);
console.log('I have ' + apples + ' apples');

var materials = ['wood', 'metal', 'stone']
var words = {};
words.elephant = "The world's largest land mammal.";
words.school = 'A place of learning.';
words.iceCream = 'A delicious milk-based dessert.';
console.log(words)

var num = 16;

if (num > 10) {
  console.log(num + 'is greater than 10.');
} else if (num === 10) {
  console.log(num + 'is exactly 10.');
} else {
  console.log(num + 'must be less than 10.');
}


for (var i = 0; i < 10; i++) {
  console.log("Do the same thing over and over.");
}

base = 5
for (var i = 0; i < 20; i++) {
  console.log(base + i)
}
total = 0
for (var i = 0; i < 100; i++) {
  console.log(total + i)
}

for (var i = 3; i < 15; i++) {
  if (i > 9)
  console.log("You can ride the ride");
  else
  console.log("You can't ride the ride");
}

var containers = ['purse', 'wallet', 'backpack'];
for (var i = 0; i < containers.length; i++) {
  console.log(containers[i])
}

var hello = "Hello world";
console.log(hello)

function addNumbers(firstNum, secondNum) {
  return firstNum + secondNum;
}

var amount = 0

amount = addNumbers(9, 11)
console.log(amount)
