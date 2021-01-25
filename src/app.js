const yargs = require("yargs");
const { addNote, listNotes } = require("../utils/notes");

const command = process.argv[2];

/*console.log(process.argv);
console.log(yargs.argv);
if (process.argv[2] == "ian") {
    console.log("Hey, that's spicy!");
} else {
    console.log("That's not my name!");
}*/

if (command == "add") {
    console.log("adding a note...");
    addNote(yargs.argv.note);
} else if (command == "remove") {
    console.log("command removed");
} else if (command == "list") {
    console.log("listing a note...");
    listNotes();
} else {
    console.log("command not recognised");
} 



