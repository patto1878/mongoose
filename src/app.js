require("./db/connection");
const { add } = require("./utils");
const yargs = require("yargs");
const command = process.argv[2];
const titleInput = yargs.argv.title;
const actorInput = yargs.argv.actor;
const watchedInput = yargs.argv.watched;

const app = () => {
    if (command === "add") {
        if (actorInput) {
            add ({ title: titleInput, actor: actorInput});
        } else {
        add({ title: titleInput});
        }
    } else if (command === "list") {
        //list function goes here // 
    }
};

app();