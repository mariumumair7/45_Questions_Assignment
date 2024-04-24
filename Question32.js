var current_users = ["admin", "user1", "user2", "user3"];
var new_users = ["Admin", "User4", "User5", "User6"];
new_users.forEach(function (new_user) {
    if (current_users.includes(new_user.toLowerCase())) {
        console.log("User ".concat(new_user, " is already in use. Please enter a new username."));
    }
    else {
        console.log("User ".concat(new_user, " is available."));
    }
});
