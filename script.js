const notes = {
    'c': new Note('c', "Cratchet 1 beat - taa", '1D15F', "crotchet.png"),
    'm': new Note('m', "Minim - 2 beats - taa-aa", '1D15E', "minim.png"),
    'r': new Note('r', "Cratchet rest - saa", '1D13D', "crotchet-rest.png"),
    'R': new Note('R', "2 bar rest", '1D129'),
    '(': new Note('(', "Repeat open", "1D106", "repeat-close.png"),
    ')': new Note(')', "Repeat close", "1D107", "repeat-open.png"),
}
const music = [];
function setup() {
    initialize();
    //createCanvas(windowWidth, windowHeight);
}
function draw() {
    // background(0);
}
let shift = false;
function keyPressed() {
    if (notes.hasOwnProperty(key)) {
        console.log(notes[key].description);
    }
}





function initialize() {
    // ------------Create Info-----------//
    let introelementul = document.getElementById("note-introduction").getElementsByTagName("ul")[0];
    for (const k in notes) {
        //&#x${notes[k].unicode}
        introelementul.innerHTML += `<li><strong>${k}</strong> - ${notes[k].description}, ${notes[k].icon ? "<img src=\"assets/" + notes[k].icon + "\" alt=\"icon\">" : ""}</li>`
    }
}