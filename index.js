#! /usr/bin/env node
import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        name: 'sentence',
        type: 'input',
        message: 'enter your sentence to count the word: '
    }
]);
const word = answers.sentence.trim().split(' ');
console.log(word);
console.log(`your sentence word count is ${word.length}`);
