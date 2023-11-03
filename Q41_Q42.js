"use strict";
// -----Question 41  &  42-----
let magician = ["Suhani", "Neel", "David", "Ricky"];
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
show_magicians(magician);
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
makeGreat(magician);
show_magicians(magician);
// --------------------
