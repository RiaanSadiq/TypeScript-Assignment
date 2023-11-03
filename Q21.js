"use strict";
// -----Question 21-----
let cities = [
    {
        name: "Karachi",
        country: "Pakistan",
        Landline_Area_Code: 21,
    },
    {
        name: "Lahore",
        country: "Pakistan",
        Landline_Area_Code: 42,
    },
    {
        name: "Peshawer",
        country: "Pakistan",
        Landline_Area_Code: 91,
    },
    {
        name: "Quetta",
        country: "Pakistan",
        Landline_Area_Code: 81,
    },
];
console.log("\n");
for (let a = 0; a < cities.length; a++) {
    let city = cities[a];
    console.log(`City: ${city.name}`);
    console.log(`Country: ${city.country}`);
    console.log(`Landline Area Code: ${city.Landline_Area_Code}\n`);
}
// --------------------
