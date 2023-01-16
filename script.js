const notes = {
    'c': new Note('c', "Cratchet 1 beat - taa", '1D15F', "crotchet.png"),
    'm': new Note('m', "Minim - 2 beats - taa-aa", '1D15E', "minim.png", 2),
    'r': new Note('r', "Cratchet rest - saa", '1D13D', "crotchet-rest.png"),
    'R': new Note('R', "2 bar rest", '1D129', 2),
    '(': new Note('(', "Repeat open", "1D106", "repeat-open.png", 0),
    ')': new Note(')', "Repeat close", "1D107", "repeat-close.png", 0),
}

function initialize() {
    // ------------Create Info-----------//
    let introelementul = document.getElementById("note-introduction").getElementsByTagName("ul")[0];
    for (const k in notes) {
        //&#x${notes[k].unicode}
        introelementul.innerHTML += `<li><strong>${k}</strong> - ${notes[k].description}, ${notes[k].icon ? "<img src=\"assets/" + notes[k].icon + "\" alt=\"icon\">" : ""}</li>`
    }
}

const rythem = [];
const crotchetsinbar = 4;
function setup() {
    initialize();
    // const canvas = createCanvas(windowWidth - 250, 400);
    // canvas.parent("note-visual")
}
// function windowResized() {
//     resizeCanvas(windowWidth - 250, 400);
// }
function draw() {
    noLoop();
    // background(255, 255, 0);
}

function keyPressed() {
    console.log(key);
    if (notes.hasOwnProperty(key)) {
        rythem.push(Object.assign(notes[key]));
    } else if (keyCode == BACKSPACE) {
        rythem.pop();
    }
    render();
    console.log(rythem);
}
let notevisual = document.getElementById("note-visual");
function render() {
    notevisual.innerHTML = "";
    for (const note of rythem) {
        notevisual.innerHTML += note.toIcon();
    }
}