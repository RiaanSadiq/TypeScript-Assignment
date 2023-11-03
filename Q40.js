"use strict";
// -----Question 40-----
function makeAlbum(artist, title, tracks) {
    let album = {
        artist,
        title
    };
    return album;
}
// Different album objects
let album1 = makeAlbum("Artist1", "Album1");
let album2 = makeAlbum("Artist2", "Album2");
let album3 = makeAlbum("Artist3", "Album3", 12);
console.log(album1);
console.log(album2);
console.log(album3);
// --------------------
