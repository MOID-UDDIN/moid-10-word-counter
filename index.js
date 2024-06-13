#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`Welcome to my word counter!`);
let myLoop = true;
while (myLoop) {
    const userInput = await inquirer.prompt([
        {
            name: `para`,
            type: `input`,
            message: `Write a paragraph to count the words or letters: `,
        },
        {
            name: `ask`,
            type: `list`,
            message: `What do you want to count:`,
            choices: [`Letters`, `Words`, `Both`],
        },
    ]);
    let { para, ask } = userInput;
    if (para.length === 0)
        empty();
    if (ask === `Letters`)
        letters();
    if (ask === `Words`)
        words();
    if (ask === `Both`)
        both();
    function empty() {
        console.log(`Invalid Request!!!`);
    }
    function letters() {
        const letters = para.replace(/\s/g, "");
        console.log(`Your Input has ${letters.length} letters`);
    }
    function words() {
        let words = para.split(" ");
        console.log(`Your Input has ${words.length} words`);
    }
    function both() {
        letters();
        words();
    }
    let askAgain = await inquirer.prompt({
        name: `count`,
        type: `confirm`,
        message: `Do you want to count more?`,
        default: false,
    });
    if (askAgain.count === false) {
        myLoop = false;
        console.log(`Thank You!!!`);
    }
}
