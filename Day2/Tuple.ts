type TestCaseUser = {
  userName: string;
  age: number;
  email: string;
  role: "admin" | "user" | "guest";
};

let testUser: TestCaseUser[] = [
  {
    userName: "JohnDoe",
    age: 30,
    email: "johndoe@example.com",
    role: "user",
  },
  {
    userName: "JaneDoe1",
    age: 25,
    email: "janedoe1@example.com",
    role: "admin",
  },
  {
    userName: "GuestUser",
    age: 20,
    email: "guestuser@example.com",
    role: "guest",
  },
];

function getValidAdminUsers(users: TestCaseUser[]): string[] {
  let result: string[] = [];
  for (let user of users) {
    if (user.role === "admin" && user.age >= 18) {
      console.log(
        `Valid Admin User: ${user.userName}, Age: ${user.age}, Email: ${user.email}`,
      );
      result.push(user.userName);
    }
  }
  return result;
}

let validUsers = getValidAdminUsers(testUser);
console.log("Valid Admin Users:", validUsers);
