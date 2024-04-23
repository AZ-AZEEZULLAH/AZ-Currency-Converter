#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgBlue(`\n \t\t <<<==============================>>>`));
console.log(chalk.bold.bgBlue(`<<<=============== ${chalk.bold.bgBlue(`Welcome to the AZ-Currency-Converter`)} <<<===============>>>`));
console.log(chalk.bold.bgBlue(`\t\t <<<==============================>>>\n`));
const currency = {
    "USD": 1, // US Dollor
    "EUR": 0.9, // Euro
    "BDT": 108.5, // Bangladeshi Taka
    "AED": 3.67, // Arab Emir. Diram
    "CNY": 7.24, // Chinese Yuan
    "GBP": 0.80, // Geat British Pound
    "JPY": 154.73, // Japanese Yen
    "AFN": 71.11, // Afghan Afghani
    "IRR": 42.006, // Iranian Rial
    "PKR": 277.6, // Pakistan Rupee
    "IND": 83.38, // Indain Rupee
    "VND": 25.45 // Vientnamese Dong
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from Currency",
        type: 'list',
        choices: ["USD", "EUR", "BDT", "AED", "CNY", "GBP", "JPY", "AFN", "IRR", "PKR", "IND", "VND"]
    },
    {
        name: 'to',
        message: "Enter to Currency",
        type: 'list',
        choices: ["USD", "EUR", "BDT", "AED", "CNY", "GBP", "JPY", "AFN", "IRR", "PKR", "IND", "VND"]
    },
    {
        name: 'amount',
        message: "Enter Your Amount",
        type: 'number',
    }
]);
let userfromCurrency = user_answer.from;
let usertoCurrency = user_answer.to;
let fromAmount = currency[userfromCurrency];
let toAmount = currency[usertoCurrency];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`Converted Amount ${chalk.bgBlue(convertedAmount.toFixed(3))}`);
