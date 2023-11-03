 let myName = "My name is Riaan";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

  const titleCase = myName.toLowerCase().split(' ');
  for (var i = 0; i < titleCase.length; i++) {
    titleCase[i] = titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1);
  }
  console.log( titleCase.join(' '));

