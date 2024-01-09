import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "paragraph",
        message: "Write Your Paragraph To Find Word Count:"
    }
]);
const words = answers.paragraph.trim().split(" ");
console.log(`Your Paragraph Word Count Is:${words.length}`);
