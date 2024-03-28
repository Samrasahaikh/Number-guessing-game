#! /usr/bin/env node 
import inquirer from "inquirer"

// 1) computer will generate a random number -Done 

// 2) user input for guessing number -Done

// 3) compair user input with computer generated number and show result -Done


const randomNamber = Math.floor(Math.random() * 6 + 1);


const answers =await inquirer.prompt([
    {
        name : "userGuesseNumber",
        type : "number",
        message :"Please guess a number between 1-10:",
    },
]);
if(answers.userGuesseNumber === randomNamber){
    console.log ("congratulations you guessed right number.")
}
else{
    console.log("you guessed wrong number");
}