import inquirer from "inquirer";
import qr from "qr-image";

inquirer
    .prompt([
        { message: "Type in your favorite URL: ", name: "URL" }
    ])
    .then((answers) => {
        console.log(answers)
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });