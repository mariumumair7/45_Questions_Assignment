let usernames: string[] = ['admin', 'user1', 'user2', 'user3', 'user4', 'user5'];
for (let username of usernames) {
  if (username === 'admin') {
    console.log(`Hello ${username}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
