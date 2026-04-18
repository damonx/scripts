const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { demand } = require('yargs');


// Create a yargs instance, customize it, then register commands
const y = yargs(hideBin(process.argv));

y.version('1.1.0');

// add, remove, read, list
// Create add command
y.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
});


// Create remove command
y.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
});

// Create read command
y.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading the note!');
    }
});

// Create list command
y.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        console.log('Listing out all notes!');
    }
});

const args = y.argv;
//y.parse();



// const msg = notes.getNotes();
// console.log(msg);

// console.log(chalk.underline.italic.inverse.bold.green('Success!'));

//console.log(process.argv[2]);
