var newMagicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("The Great ".concat(magician));
    });
    return greatMagicians;
}
var greatMagicians = make_great(newMagicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(newMagicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians);
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
