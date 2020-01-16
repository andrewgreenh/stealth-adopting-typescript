import { loadUsers } from "./userRepository";
import { upsertUser } from "./userService";

async function main() {
  await upsertUser({ id: 1, name: "Luke Skywalker" });
  await upsertUser({ id: 2, name: "Han Solo" });
  await upsertUser({ id: 3, name: "Rey Spoiler-Alert" });
  await upsertUser({ id: 4, name: "Yoda" });

  const users = await loadUsers();
  console.log(users);
}

main();
