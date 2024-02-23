// Question #32
let current_users: string[] = ['John', 'Alice', 'Eric', 'Jane', 'Mike'];
let new_users: string[] = ['Jessica', 'John', 'David', 'Sarah', 'Mike'];

for (let i = 0; i < new_users.length; i++) {
  let usernameExists = false;
  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      usernameExists = true;
      break;
    }
  }
  if (usernameExists) {
    console.log(`Username '${new_users[i]}' is not available. Please enter a new username.`);
  } else {
    console.log(`Username '${new_users[i]}' is available.`);
  }
}