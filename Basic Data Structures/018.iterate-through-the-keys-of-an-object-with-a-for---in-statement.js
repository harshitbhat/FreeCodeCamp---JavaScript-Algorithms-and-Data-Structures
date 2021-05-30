function countOnline(usersObj) {
  // Only change code below this line
  let onlineUsers = 0;
  for (const user in usersObj) {
    if (usersObj[user].online === true) onlineUsers++;
  }
  return onlineUsers;
  // Only change code above this line
}

let userss = {
  Alan: { online: false },
  Jeff: { online: true },
  Sarah: { online: false },
};
console.log(countOnline(userss));
