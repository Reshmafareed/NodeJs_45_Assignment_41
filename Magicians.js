"use strict";
// Magicians: Make a array of magician’s names. Pass the array 
// to a function called show_magicians(), which prints 
// the name of each magician in the array.
let magician = ['Hery Poter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function show_magicians(magicians) {
    magicians.forEach(elements => {
        console.log(elements);
    });
}
show_magicians(magician);
