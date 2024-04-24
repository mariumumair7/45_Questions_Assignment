let current_users : string[] = ["admin", "user1", "user2", "user3"];
let new_users : string[] = ["Admin", "User4", "User5", "User6"];

new_users.forEach((new_user) => {
    if (current_users.includes(new_user.toLowerCase())) {
        console.log(`User ${new_user} is already in use. Please enter a new username.`);
    } else {
        console.log(`User ${new_user} is available.`);
    }
});


