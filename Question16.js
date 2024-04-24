var oldGuests = ["Ali", "Ahmad", "Fatima"];
console.log("Great News ! I found a big Dinner table.");
oldGuests.unshift("Mohammad");
oldGuests.splice(Math.floor(oldGuests.length / 2), 0, "Sara");
oldGuests.push("Hassan");
console.log("Hello ".concat(oldGuests.join(", "), ", I would like to invite you to dinner."));
console.log("Unfortunately, I can only invite two people for dinner.");
while (guest.length > 2) {
    var removedGuest = guest.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guest.splice(0, guest.length);
console.log(guest); // Shows an empty list
