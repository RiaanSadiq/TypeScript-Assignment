"use strict";
// -----Question 44-----
function makeSandwich(...items) {
    console.log("Your order for sandwich items");
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
    console.log("Enjoy your sandwich!\n");
}
makeSandwich("Chicken", "Lettuce", "Mayo");
makeSandwich("Mutton", "Cheese", "Tomato");
makeSandwich("Butter", "Egg");
// --------------------
