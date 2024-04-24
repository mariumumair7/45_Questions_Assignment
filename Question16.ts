let oldGuests : string[] = ["Ali", "Ahmad", "Fatima"];
console.log("Great News ! I found a big Dinner table.");

oldGuests.unshift("Mohammad");
oldGuests.splice(Math.floor(oldGuests.length / 2), 0, "Sara");
oldGuests.push("Hassan");

console.log(`Hello ${oldGuests.join(", ")}, I would like to invite you to dinner.`);




