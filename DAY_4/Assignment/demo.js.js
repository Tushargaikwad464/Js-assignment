//console.log("hey");
/* 
Question 8:
Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

*/
///////////////////////////////////
/* 

Question 7:

An integer number greater than 1 is called a prime
if it cannot be divided without a remainder by anything
except 1 and itself.

let n = 10;
let result = 0;

for (let i = 2; i <= n; i++) {
    var isPrime = true;

    for (let j = 2; j <= i; j++) {
        if (i % j === 0 && i !== j) {

            isPrime = false;
        }


    }
    if (isPrime === true) {
        console.log(i);
    }

} */

//////////////////////////////////////////

/* 
Question 6:

Rewrite the function using '?' or '||'

let n = +prompt("Enter the value of n\nwhich will display prime numbers\nfrom 2 to n interval",10);
console.log(`Printing prime from 2 to ${n}`);
checknextprime:
for(let i=2;i<=n;i++)
{
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
        continue checknextprime;
    }
    alert(i);
    console.log(`${i} is a prime number`,);
} */

//////////////////////////////////////////

/* Question 5:


You are managing a sales department for your company, you want to reward your employees based on
the sales made by them during the year.
The criteria is as follows:
1. Sales from 0-5000 : 2%
2. Sales from 5001 - 10000 : 5%
3. Sales from 10001 - 20000 : 7%
4. Above 20000 - 10%
 
console.log("reward");
let sales = +prompt("Enter your sales");
console.log("sales");

switch (true) {
    case sales <= 5000:
        console.log(sales * 0.02);
        break;

    case sales <= 5001 && sales >= 10000:
        console.log(sales * 0.05);
        break;

    case sales <= 20001 && sales >= 10000:
        console.log(sales * 0.07);
        break;

    case sales >= 20000:
        console.log(sales * 0.10);
        break;

    default:
        console.log("Wrong input")
        break;
}
*/


///////////////////////////////////////

/* 
Question 4 cal.

const ch = prompt("enter your operation e.g.= +,-,*,/,%");
const num1 = +prompt("Enter Num1");
const num2 = +prompt("Enter num2");

let result;


switch (ch) {
    case "+":
        result = num1 + num2;
        console.log(result);
        break;

    case "-":
        result = num1 - num2;
        console.log(result);
        break;

    case "*":
        result = num1 * num2;
        console.log(result);
        break;

    case "/":
        result = num1 / num2;
        console.log(result);
        break;

    case "%":
        result = num1 / num2 * 100;
        console.log(Math.round(result));
        console.log(result);
        break;

    default:
        break;
}

*/

//////////////////////////////////////

/*

Question 3 Grocery Shopping

let shoppingList = ['soap', 'handwash', 'glocary'];
console.log(shoppingList);

let shoppingBasket = [...shoppingList];
console.log("I need some more items:", shoppingBasket);

shoppingBasket.push('Cloths', 'Other Stuff');
console.log("listed and Non listed items are:", shoppingBasket);
 */

//////////////////////////

/*

Question 2

const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    },
}
const { name, age, projects: { diceGame } } = student;
console.log(name, age, diceGame);
//console.log(projects); 

*/

////////////////////////////////////////

/*

Question 1

let i;
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i, "fizz");

    } else if (i % 5 == 0) {
        console.log(i, "buzz");
    } else {
        console.log(i, "fizzbuzz");
    }
} */