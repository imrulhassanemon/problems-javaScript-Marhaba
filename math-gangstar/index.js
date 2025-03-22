const eggPrice = 10;
const onionPrice = 20;

const total = eggPrice + onionPrice;
console.log(total);

console.log(eggPrice*onionPrice)
console.log(10/3);
console.log(10%3, 11%7);

const firstName = "andarkillah "
const lastName = "bandarban"
console.log(firstName + lastName);

const sugar = 20;
const daddy = '20';
console.log(sugar + daddy);



// practice 

// problem -01 
const income = 100;
const expense = 40;
console.log(income - expense);

// problem - 02 

const totalPencil = 10;
const usbleEveryTime = 2;
console.log(totalPencil/usbleEveryTime);

// problem - 03 
const totalMoney = 60;
const everyTimeSpendMoney = 15;
const expendableTime = 60/15;
const remainingmoney = 60%15;
console.log(expendableTime, remainingmoney);

// problems - 04
const first = "Hello";
const last = "World";
console.log(first + last);

// problems - 05 

const rice = 153;
const dal = 261;
console.log(rice + dal);


// problems - 06 

const total_taka = 500;
const everyTimeCost = 75;

const lastTaka = total_taka % everyTimeCost
console.log("baki thakbe", lastTaka);

const useKoraJabe = total_taka / everyTimeCost;
console.log(Math.floor(useKoraJabe));


// problems - 07 

const num1 = 8;
const num2 = 3;

const remainder = num1 % num2
console.log('the remainder will be', remainder);

const quotient = Math.floor(num1/num2)
console.log('The quotient will be',quotient);

// problems - 08

const number1 = 50;
const number2 = 9;

const rem = number1 % number2;
console.log('the remainder will be', rem);

// problems -09 

const fristword = 'Bangla';
const lastWord = 'desh'

console.log(fristword + lastWord)

// problems - 10 

const everyDaycost = 4;
const totalRice = 450;

const totalGetDays = totalRice / everyDaycost;
console.log(totalGetDays);

const TotalMonth  = totalGetDays / 30;
console.log('Total Month', Math.floor(TotalMonth));
console.log('Total days', totalGetDays%30);
console.log('total days', (TotalMonth - Math.floor(TotalMonth))*30);