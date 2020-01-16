export function generateUsers() {
  const users = [];
  let index = 0;

  const builder = {
    addUser(partialUser) {
      users.push({ ...partialUser, id: ++index });

      return builder;
    },
    build() {
      return users;
    }
  };
  return builder;
}
