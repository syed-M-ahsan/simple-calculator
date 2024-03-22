#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([{ message: "Enter first number", type: "number", name: 'Firstnumber' },
    { message: "enter second number", type: "number", name: "Secondnumber" },
    { message: "select an operator to perform operation", type: "list", name: "operator", choices: ["addition",
            "subtraction", "multiplication", "division"]
    }]);
if (answer.operator === "addition") {
    console.log(answer.Firstnumber + answer.Secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
else {
    console.log("please enter an valid operator");
}
