let newMagicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]) {
  let greatMagicians: string[] = [];
  magicians.forEach((magician) => {
    greatMagicians.push(`The Great ${magician}`);
  });
  return greatMagicians;
}

let greatMagicians = make_great(newMagicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(newMagicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians);

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}


