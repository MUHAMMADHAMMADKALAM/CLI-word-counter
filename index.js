#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright.bgYellowBright.underline.bold.italic("\n.........*** WELCOME TO THE WORD COUNTER ***.........\n"));
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
// Remove the white spaces and covert sentence to the array in words.
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is: ${words.length}`);
