#! /usr/bin/env node

import inquirer from "inquirer";

// printing a wellcome message
console.log("\n\tWellcome To \' codeWithAmber")

// Asking questions from users through inuirer

const answers = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number ", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Additions", "Subtractions", "Multiplications", "Divisions"],
  },
]);

// conditional statement if - else
if(answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if(answers.operator === "subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if(answers.operator === "Multipliction") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if(answers.operator === "Division") {
  console.log(answers.firstNumber / answers.secondNumber);
} else {
  console.log("Please select valid operateor")
}
