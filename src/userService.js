import { loadUsers, saveUsers } from "./userRepository";

export async function getUser(id) {
  const users = await loadUsers();

  return users.find(u => u.id === id);
}

export async function upsertUser(user) {
  const newUsers = await mutateUsers(users => {
    const oldUser = users.find(u => u.id === user.id);
    if (oldUser) Object.assign(oldUser, user);
    else users.push(user);
  });
  return newUsers;
}

export async function deleteUser(user) {
  await mutateUsers(users => {
    return users.filter(u => u.id !== user);
  });
}

async function mutateUsers(mutationFunction) {
  const oldUsers = await loadUsers();
  const newUsers = mutationFunction(oldUsers) ?? oldUsers;
  await saveUsers(newUsers);
  return newUsers;
}
