// -----Question 30 & 31-----
let usernames = ["Riaan", "Razeen", "Ayaan", "admin", "Naqeeb"];
// usernames.pop()
// usernames.pop()
// usernames.pop()
// usernames.pop()
// usernames.pop()
if (usernames.length == 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
  }
}

// --------------------