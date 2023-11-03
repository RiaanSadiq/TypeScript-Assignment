// -----Question 36 & 37-----
function make_shirt(size: string, message: string) {
  console.log(`Size: ${size} , Message: ${message}`);
}

make_shirt("Medium", "Pakistan Zindabad");

// --------------------
// -----Question 37-----
function make_shirt2(size: string = "Large", message: string = "I love TypeScript") {
  console.log(`Size: ${size}, Message: ${message}`);
}


make_shirt2();


make_shirt2("Medium");


make_shirt2("Small", "Riaan Sadiq");


// --------------------