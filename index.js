import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "ToDo",
            message: "What do you want to add in your To DO list?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more in your To Do?",
            default: false
        }
    ]);
    const { ToDo, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (ToDo) {
        todos.push(ToDo);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("Your To Do list :\n");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No ToDOs Found!");
}
;
