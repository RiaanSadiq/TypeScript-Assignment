"use strict";
// -----Question 32-----
let current_users = ["Riaan", "Ali", "Nayab", "Sultan", "Naqeeb"];
let new_users = ["Ayaan", "Razeen", "Ali", "Zayan", "Naqeeb"];
for (let i = 0; i < new_users.length; i++) {
    let userTaken = false;
    for (let y = 0; y < current_users.length; y++) {
        if (new_users[i].toLowerCase() == current_users[y].toLowerCase()) {
            userTaken = true;
        }
    }
    if (userTaken == true) {
        console.log(`Sorry, the username ${new_users[i]} is already taken.`);
    }
    else {
        console.log(`The username ${new_users[i]} is available.`);
    }
}
// --------------------
