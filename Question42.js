var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log("The Great ".concat(magician));
    });
}
show_magicians(magicians);
