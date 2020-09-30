import { generateUsers } from "./userGenerator";
import { getUsersByType, upsertUser } from "./userService";

async function main() {
  const usersToBeCreated = generateUsers()
    .addUser({
      name: "Luke Skywalker",
      type: "jedi",
      power: "Trainer",
    })
    .addUser({
      name: "Han Solo",
      type: "rebel",
      weapon: "blaster",
    })
    .addUser({
      name: "Rey Spoiler-Alert",
      type: "jedi",
      power: "Force Heal",
    })
    .addUser({
      name: "Yoda",
      type: "jedi",
      power: "Lifting X-Wings",
    })
    .build();

  for (const u of usersToBeCreated) upsertUser(u);

  const users = await loadUsers();
  console.log(users);

  console.log(await getUsersByType());
}

main();
