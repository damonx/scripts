const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...';
}

const addNote = (title, body) => {
    const notes = loadNotes(title, body);
    if (!notes.some(({ Title }) => Title === title)) {
        notes.push({
            Title: title,
            Body: body
        })
       saveNotes(notes);
       console.log(chalk.underline.italic.inverse.bold.green('New note added!'));
    } else {
       console.log(chalk.underline.italic.inverse.bold.red('Note title taken!'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.Title !== title);
    if (notes.length > notesToKeep.length) {
        console.log(chalk.underline.italic.inverse.bold.green('Note removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.underline.italic.inverse.bold.red('No note found!'));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.Title === title);
    if (note) {
        console.log(chalk.underline.italic.inverse.bold.blue(note.Title));
        console.log(note.Body);
    } else {
        console.log(chalk.underline.italic.inverse.bold.red('Note not found!'));
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.underline.italic.inverse.bold.blue('Your notes'));
    notes.forEach((note) => console.log(note.Title));
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}