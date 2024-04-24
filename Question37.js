// Functios parameters
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("The shirt size is ".concat(size, " and the message is ").concat(message));
}
make_shirt();
make_shirt('medium', 'I love JavaScript');
make_shirt('small');
make_shirt('extra large', 'I love Java');
make_shirt('extra extra large', 'I love C#');
