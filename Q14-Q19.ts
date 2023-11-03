// -----Question 14 and 15 -----
let guest = ["Ameen", "Alyan", "Ali muhammed", "Sinan"];
for (let a = 0; a < guest.length; a++) {
  console.log(`Dear ${guest[a]}, you are invited to dinner. `);
}

let guest_cant_make_it = "Alyan";
console.log("\nGuest who can't make it to come");
console.log(`${guest_cant_make_it} can't make it to the dinner. \n `);

// replacing the guest with new guest
let new_guest = "Ayaan";
guest.splice(1, 1, new_guest);
console.log("New invitation");

for (let a = 0; a < guest.length; a++) {
  console.log(`Dear ${guest[a]}, you are invited to dinner. `);
}

console.log(`\n ${guest} We found a bigger dinner table\n`);

//--------------------------------------------------------

// -----Question 16-----

// adding 1 guest at begining of array

guest.unshift("Sultan");

// adding at middle
new_guest = "Nayab";
let midIndex: number = Math.floor(guest.length / 2);
guest.splice(midIndex, 0, new_guest);

// adding at the last
new_guest = "Asim";
guest.push(new_guest);
console.log(guest);

// --------------------

// -----Question 17-----

console.log("I can invite only two people for dinner");

let guestLen = guest.length;
for (let a = guest.length; a > 2; a--) {
  let removed = guest.pop();
  console.log(`Sorry ${removed} I cant invite you to dinner`);
}

console.log("\n");

for (let a = 0; a < guest.length; a++) {
  console.log(`${guest[a]}, You are invited to the dinner`);
}

//removing last 2 name in the list
guest.pop();
guest.pop();

console.log(guest);
// --------------------

// -----Question 19-----
console.log(`\nTotal number of people I invited are ${guestLen}\n`);
// --------------------
