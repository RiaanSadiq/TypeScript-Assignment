"use strict";
// -----Question 33-----
let ordinal_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinal_num.length; i++) {
    let order;
    if (ordinal_num[i] == 1) {
        order = "st";
    }
    else if (ordinal_num[i] == 2) {
        order = "nd";
    }
    else if (ordinal_num[i] == 3) {
        order = "rd";
    }
    else {
        order = "th";
    }
    console.log(ordinal_num[i] + order);
}
// --------------------
