// -----Question 22-----
let numbers: number[];
numbers = [1, 2, 3, 4, 5];
try {
  let index = 10;
  if (index < 0 || index >= numbers.length) {
    throw new Error("Index out of bounds");
  }
  let value= numbers[index];
  console.log(`Value : ${value}`);
} catch (error) {
  console.error(`Error: ${error}`);
}

// --------------------