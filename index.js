import inquirer from "inquirer";
const input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "kindly enter first number",
});
const input2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "kindly enter second number",
});
const operator = await inquirer.prompt({
    name: "oper",
    type: "list",
    message: "kindly enter operator",
    choices: ["add", "mult", "div", "sub"]
});
//condition 
if (operator.oper === "add") {
    let total = input1.num1 + input2.num2;
    console.log(total);
}
else if (operator.oper === "mult") {
    let total = input1.num1 * input2.num2;
    console.log(total);
}
else if (operator.oper === "div") {
    let total = input1.num1 / input2.num2;
    console.log(total);
}
else if (operator.oper === "sub") {
    let total = input1.num1 - input2.num2;
    console.log(total);
}
